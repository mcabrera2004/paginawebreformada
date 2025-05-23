//src/app/page.tsx
import { client } from "@/sanity/lib/client";

type Post = {
  _id: string;
  title: string;
  slug: { current: string };
};

export default async function Home() {
  const posts: Post[] = await client.fetch(
    `*[_type == "post"] | order(_createdAt desc)[0...5]{
      _id,
      title,
      slug
    }`
  );

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6">Artículos recientes</h1>
      <ul className="space-y-3">
        {posts.map((post) => (
          <li key={post._id}>
            <a
              href={`/${post.slug.current}`}
              className="text-blue-600 underline"
            >
              {post.title}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
