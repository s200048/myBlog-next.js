import Head from "next/head";
import { Categories, PostCard, PostWidget } from "../components";
import { getPosts } from "../services";

// Demo post
// const posts = [
//   { title: "React Testing", excerpt: "Learn React Testing" },
//   { title: "React with Tailwind", excerpt: "Learn React Testing" },
// ];

// 係下邊拎到fetch data 之後，就可以拎個props 嚟做components
export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-10 mb-8 bg-gray-300">
      <Head>
        <title>CMS blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post) => (
            <PostCard post={post.node} key={post.title} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1 ">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>

      {/* <a href="https://www.youtube.com/watch?v=HYv55DhgTuA&t=4170s&ab_channel=JavaScriptMastery">
        https://www.youtube.com/watch?v=HYv55DhgTuA&t=4170s&ab_channel=JavaScriptMastery
      </a> */}
    </div>
  );
}

// New next.js way to fetch data in components
// Create a new async function
export async function getStaticProps() {
  // 如果拎唔到啲data ， 就empty array --> 好似function + condition?
  const posts = (await getPosts()) || [];

  // 拎到data 之後再return 出去 as a props
  return {
    props: { posts },
  };
}

// 拎到data 重未夠，重要係 GraphQL setting --> API setting 到加返個permission 入去，令到可以read
