import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm } from "../utils/typography";
import { formatReadingTime } from "../utils/format-reading-time";

interface Props {
  data: {
    allMarkdownRemark: {
      edges: {
        node: {
          frontmatter: {
            title: string;
            date: string;
            description?: string;
          };
          excerpt: string;
          fields: {
            slug: string;
          };
          timeToRead: number;
        };
      }[];
    };
    site: {
      siteMetadata: {
        title: string;
        social: {
          mail: string;
          linkedIn: string;
          twitter: string;
          github: string;
        };
      };
    };
  };
}

const BlogIndex = ({ data }: Props) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout title={siteTitle}>
      <SEO />

      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;

        return (
          <article key={node.fields.slug}>
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link
                  style={{ boxShadow: "none", color: "var(--text-title)" }}
                  to={node.fields.slug}
                >
                  {title}
                </Link>
              </h3>
              <small>
                {node.frontmatter.date}
                {` • ${formatReadingTime(node.timeToRead)}`}
              </small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </article>
        );
      })}
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          timeToRead
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
