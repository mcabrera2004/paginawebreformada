// ./src/app/[slug]/page.tsx

import { defineQuery } from "next-sanity";
import { draftMode } from "next/headers";
import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";

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
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">{data.title}</h1>
      {data.author && <p className="mb-2 text-sm">Por {data.author.name}</p>}
      {data.publishedAt && (
        <p className="mb-2 text-xs text-gray-500">
          Publicado el {new Date(data.publishedAt).toLocaleDateString()}
        </p>
      )}
      {data.mainImage?.asset?.url && (
        <img
          src={data.mainImage.asset.url}
          alt={data.mainImage.alt || ""}
          className="mb-4 max-w-xl"
        />
      )}
      {data.body && (
        <PortableText value={data.body} components={portableTextComponents} />
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
    </main>
  );
}