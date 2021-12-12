// import React, { useState, useEffect } from "react";
// import moment from "moment";
// import Link from "next/link";
// import { getRecentPosts, getSimilarPosts } from "../services";

// //呢個page係要做recent posts(Home Page) and related posts(禁入個posts 之後)

// // For fetch most recent post
// // --> 要起多個function (GQL) 去拎到果啲data

// const PostWidget = ({ categories, slug }) => {
//   const [relatedPosts, setRelatedPosts] = useState([]);

//   console.log(categories);
//   console.log(slug);

//   //要check user 係係home page 定 post pages 入邊？ --> 可以用slug去區分係邊一樣
//   // slug 係講緊url 入邊嘅query?

//   useEffect(() => {
//     if (slug) {
//       getSimilarPosts(categories, slug).then((result) =>
//         setRelatedPosts(result)
//       );
//     } else {
//       getRecentPosts().then((result) => setRelatedPosts(result));
//     }
//   }, [slug]);

//   // console.log(relatedPosts);

//   return (
//     <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
//       <h3 className="text-xl mb-8 font-semibold border-b pb-4">
//         {slug ? "Related Post" : "Recent Posts"}
//       </h3>
//       {relatedPosts.map((post) => (
//         <div key={post.title} className="flex items-center w-full mb-4">
//           <div className="2-16 flex-none">
//             <img
//               alt={post.title}
//               height="60px"
//               width="60px"
//               className="align-middle rounded-full"
//               src={post.featuredImage.url}
//             ></img>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default PostWidget;

import React, { useState, useEffect } from "react";
import Image from "next/image";
import moment from "moment";
import Link from "next/link";

// import { grpahCMSImageLoader } from "../util";
import { getSimilarPosts, getRecentPosts } from "../services";

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result);
      });
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result);
      });
    }
  }, [slug]);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        {slug ? "Related Posts" : "Recent Posts"}
      </h3>
      {relatedPosts.map((post, index) => (
        <div key={index} className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
            <Image
              // loader={grpahCMSImageLoader}
              alt={post.title}
              height="60px"
              width="60px"
              unoptimized
              className="align-middle rounded-full"
              src={post.featuredImage.url}
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-500 font-xs">
              {moment(post.createdAt).format("MMM DD, YYYY")}
            </p>
            <Link href={`/post/${post.slug}`} className="text-md" key={index}>
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
