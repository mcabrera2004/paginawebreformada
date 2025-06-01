import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";

export default async function AutorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const data = await client.fetch(
    `*[_type == "author" && slug.current == $slug][0]{
      name,
      bio,
      image{
        asset->{url}
      }
    }`,
    { slug }
  );

  if (!data) {
    return <div className="p-8">Autor no encontrado.</div>;
  }

  return (
    <main className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">{data.name}</h1>
      {data.image?.asset?.url && (
        <img
          src={data.image.asset.url}
          alt={data.name}
          className="w-48 h-48 object-cover rounded-full mb-4"
        />
      )}
      {data.bio && (
        <div className="prose">
          <PortableText value={data.bio} />
        </div>
      )}
    </main>
  );
}