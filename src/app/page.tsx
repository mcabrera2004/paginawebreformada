export const metadata = {
    title: "Presbiterianismo",
    icons: {
        icon: "/favicon.ico"
    }
};

export const revalidate = 60;

import { client } from "@/sanity/lib/client";
import { NavBar } from "@/components/NavBar";
import { HeroSection } from "@/components/HeroSection";
import { ArticleCarousel } from "@/components/ArticleCarousel";
import { ContactSection } from "@/components/ContactSection";

type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage?: {
    asset?: { url: string };
    alt?: string;
  };
  body?: any[];
};

export default async function Home() {
  const posts: Post[] = await client.fetch(
    `*[_type == "post"] | order(_createdAt desc)[0...5]{
      _id,
      title,
      slug,
      mainImage{
        asset->{url},
        alt
      },
      body
    }`
  );

  // Función para extraer texto plano del body (Portable Text)
  function getPlainText(body: any[] = []) {
    if (!Array.isArray(body) || body.length === 0) {
      return "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
    }
    return body
      .filter((block) => block._type === "block" && block.children)
      .map((block) =>
        block.children.map((child: any) => child.text).join("")
      )
      .join(" ");
  }

  // Prepara los artículos para el carrusel
  const carouselArticles = posts.map((post) => ({
    id: post._id,
    title: post.title,
    image: post.mainImage?.asset?.url || "/logo-transparente.png",
    slug: post.slug.current,
    excerpt:
      getPlainText(post.body).slice(0, 160) +
      (getPlainText(post.body).length > 160 ? "..." : ""),
  }));

  return (
    <>
      <NavBar />
      <HeroSection />
      <div className="w-full my-10 flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-[35%] flex justify-center items-center md:pl-2">
          <img
            src="/logo-transparente.png"
            alt="Logo"
            className="w-full h-auto max-w-[300px] md:max-w-[221px] custom:max-w-[300px]"
          />
        </div>
        <div className="w-full md:w-[65%] flex flex-col items-center">
          <h1 className="text-2xl font-bold mb-4 text-center">
            Artículos recientes
          </h1>
          <ArticleCarousel articles={carouselArticles} />
        </div>
      </div>
      <ContactSection />
    </>
  );
}