// ./src/app/[slug]/page.tsx
import { defineQuery } from "next-sanity";
import { draftMode } from "next/headers";
import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import { NavBar } from "@/components/NavBar";

// Configura el builder de imágenes de Sanity
const builder = imageUrlBuilder(client);

const portableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <img
        src={builder.image(value).width(800).url()}
        alt={value.alt || "Imagen"}
        style={{ margin: "2rem 0", maxWidth: "100%" }}
      />
    ),
  },
  marks: {
    link: ({ value, children }: any) => (
      <a
        href={value.href}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: "#2563eb",
          textDecoration: "underline",
          overflowWrap: "break-word", // permite el corte de palabras largas
        }}
      >
        {children}
      </a>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-3xl md:text-4xl font-bold mt-8 mb-4 text-center">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-2xl md:text-3xl font-semibold mt-6 mb-3">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl md:text-2xl font-semibold mt-5 mb-2">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-lg md:text-xl font-medium mt-4 mb-2">{children}</h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-blue-400 pl-4 italic my-4 text-gray-700">
        {children}
      </blockquote>
    ),
    normal: ({ children }: any) => (
      <p className="mb-4">{children}</p>
    ),
  },
};

const query = defineQuery(
  `*[_type == "post" && slug.current == $slug][0]{
    title,
    body,
    publishedAt,
    author->{name},
    categories[]->{title},
    mainImage{
      asset->{url},
      alt
    }
  }`
);

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { isEnabled } = await draftMode();

  const data = await client.fetch(
    query,
    { slug },
    isEnabled
      ? {
          perspective: "previewDrafts",
          useCdn: false,
          stega: true,
        }
      : undefined
  );

  return (
    <>
      <NavBar />
      <main className="font-sans">
        {data.mainImage?.asset?.url && (
          <div className="relative w-full h-56 sm:h-72 md:h-96 mb-8">
            <img
              src={data.mainImage.asset.url}
              alt={data.mainImage.alt || ""}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 sm:p-8">
              <h1 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-white drop-shadow mb-1 text-center w-full">
                {data.title}
              </h1>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 justify-center">
                {data.publishedAt && (
                  <p className="text-xs sm:text-sm text-gray-200 drop-shadow">
                    Publicado el {new Date(data.publishedAt).toLocaleDateString()}
                  </p>
                )}
                {data.author && (
                  <p className="text-xs sm:text-sm text-gray-300 drop-shadow">
                    Por {data.author.name}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
        <div className="px-4 md:px-0 max-w-3xl mx-auto">
          {data.body && (
            <div className="leading-relaxed text-lg space-y-4">
              <PortableText value={data.body} components={portableTextComponents} />
            </div>
          )}
          {data.categories && data.categories.length > 0 && (
            <div className="mt-4">
              Categorías:{" "}
              {data.categories.map((cat: any) => (
                <span key={cat.title} className="mr-2">
                  {cat.title}
                </span>
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
}