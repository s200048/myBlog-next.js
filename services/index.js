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
  //   console.log("This is results" + results);
  return results.postsConnection.edges;
};
