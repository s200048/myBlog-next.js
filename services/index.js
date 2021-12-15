import { request, gql } from "graphql-request";

const graphqlAPI = process.env.MY_GRAPHCMS_ENDPOINT;

// Fetch data using graphQL and graphQL CMS
export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const results = await request(graphqlAPI, query);
  // console.log(results);
  return results.postsConnection.edges;
};

// getPosts();

export const getRecentPosts = async () => {
  const query = gql`
    query GetPostDetails() {
        posts(
            orderBy: createdAt_ASC
            last: 3
        ) {
            title
            featuredImage {
                url
            }
            createdAt
            slug
        }
    }
    `;

  const result = await request(graphqlAPI, query);
  // console.log(result);
  return result.posts;
};

// export const getSimilarPosts = async (categories, slug) => {
//   // query language $slug --> type = string
//   // where 果到講緊 donot display the current article but display other articles that includes some categories we want to get, and 我地想拎到last 3 article，所以寫做last 3
//   const query = gql`
//     query GetPostDetails($slug: String!, $categories: [String!]) {
//       posts(
//         where: {
//           slug_not: $slug
//           AND: { catrgories_some: { slug_in: $categories } }
//         }
//         last: 3
//       ) {
//         title
//         featuredImage {
//           url
//         }
//         createdAt
//         slug
//       }
//     }
//   `;

//   const results = await request(graphqlAPI, query, { slug, categories });
//   // console.log("This is " + results);
//   return results.posts;
// };

// Answer

// export const getSimilarPosts = async (categories, slug) => {
//   const query = gql`
//     query GetPostDetails($slug: String!, $categories: [String!]) {
//       posts(
//         where: {
//           slug_not: $slug
//           AND: { categories_some: { slug_in: $categories } }
//         }
//         last: 3
//       ) {
//         title
//         featuredImage {
//           url
//         }
//         createdAt
//         slug
//       }
//     }
//   `;
//   const result = await request(graphqlAPI, query, { slug, categories });

//   return result.posts;
// };

// export const getRecentPosts = async () => {
//   const query = gql`
//     query findSlug {
//       posts {
//         slug
//       }
//     }
//   `;
//   const result = await request(graphqlAPI, query);
//   // console.log(result);

//   return result.posts;
// };
// getRecentPosts();
// getRecentPosts().catch((err) => console.log(err));
