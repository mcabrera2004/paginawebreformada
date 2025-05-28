//src/app/page.tsx
import { client } from "@/sanity/lib/client";
import { NavBar } from "@/components/NavBar";
import { HeroSection } from "@/components/HeroSection";
import EmblaCarousel from "@/components/EmblaCarousel";

type Post = {
  _id: string;
  title: string;
  slug: { current: string };
};

const fakeArticles = [
  { id: 1, title: "Artículo 1", image: "https://picsum.photos/600/350?v=1" },
  { id: 2, title: "Artículo 2", image: "https://picsum.photos/600/350?v=2" },
  { id: 3, title: "Artículo 3", image: "https://picsum.photos/600/350?v=3" },
  { id: 4, title: "Artículo 4", image: "https://picsum.photos/600/350?v=4" },
  { id: 5, title: "Artículo 5", image: "https://picsum.photos/600/350?v=5" },
];

export default async function Home() {
  const posts: Post[] = await client.fetch(
    `*[_type == "post"] | order(_createdAt desc)[0...5]{
      _id,
      title,
      slug
    }`
  );

  return (
    <>
      <NavBar />
      <HeroSection />
      <div className="flex flex-col md:flex-row items-start p-8 pt-[70px] gap-8">
        <main className="flex-1">
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
        <aside className="w-full md:w-[500px] flex-shrink-0">
          <EmblaCarousel
            slides={fakeArticles.map((a) => a.id)}
            options={{ loop: true }}
          />
        </aside>
      </div>
    </>
  );
}