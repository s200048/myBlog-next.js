import Head from "next/head";
import { Categories, PostCard, PostWidget } from "../components";

const posts = [
  { title: "React Testing", excerpt: "Learn React Testing" },
  { title: "React with Tailwind", excerpt: "Learn React Testing" },
];

export default function Home() {
  return (
    <div className="container mx-auto px-10 mb-8 bg-gray-300">
      <Head>
        <title>CMS blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post) => (
            <PostCard post={post} key={post.title} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1 ">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>

      <a href="https://www.youtube.com/watch?v=HYv55DhgTuA&t=4170s&ab_channel=JavaScriptMastery">
        https://www.youtube.com/watch?v=HYv55DhgTuA&t=4170s&ab_channel=JavaScriptMastery
      </a>
    </div>
  );
}

//flex flex-col items-center justify-center min-h-screen py-
