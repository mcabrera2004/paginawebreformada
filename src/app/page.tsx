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
  { id: 6, title: "Artículo 6", image: "https://picsum.photos/600/350?v=6" },
  { id: 7, title: "Artículo 7", image: "https://picsum.photos/600/350?v=7" },
  { id: 8, title: "Artículo 8", image: "https://picsum.photos/600/350?v=8" },
  { id: 9, title: "Artículo 9", image: "https://picsum.photos/600/350?v=9" },
  { id: 10, title: "Artículo 10", image: "https://picsum.photos/600/350?v=10" },
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
      <div className="w-full my-8 flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-[35%] flex justify-center items-center">
          {/* Reemplaza '/logo.png' con la ruta real a tu logo */}
          <img
            src="/logo-transparente.png"
            alt="Logo"
            className="w-full h-auto max-w-[350px]"
          />
        </div>
        <div className="w-full md:w-[65%]">
          <EmblaCarousel slides={fakeArticles} options={{ loop: true }} />
        </div>
      </div>
      <div className="w-full px-8 pb-8">
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
      </div>
    </>
  );
}