import * as React from "react";
import { Helmet } from "react-helmet-async";
import { graphql, useStaticQuery } from "gatsby";

interface Props {
  description?: string;
  lang?: string;
  title?: string;
  meta?: JSX.IntrinsicElements["meta"][];
}

function SEO({ description, lang = "en", meta = [], title }: Props) {
  const { site } = useStaticQuery<{
    site: {
      siteMetadata: { title: string; description: string; author: string };
    };
  }>(
    graphql`
      query SeoQuery {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      bodyAttributes={{
        class: "solarized-dark",
      }}
      htmlAttributes={{
        lang,
      }}
      {...(title
        ? {
            titleTemplate: `%s — ${site.siteMetadata.title}`,
            title,
          }
        : {
            title: `${site.siteMetadata.title} — A blog by ${site.siteMetadata.author}`,
          })}
      meta={[
        {
          name: "description",
          content: metaDescription,
        },
        {
          property: "og:title",
          content: title,
        },
        {
          property: "og:description",
          content: metaDescription,
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          name: "twitter:card",
          content: "summary",
        },
        {
          name: "twitter:creator",
          content: site.siteMetadata.author,
        },
        {
          name: "twitter:title",
          content: title,
        },
        {
          name: "twitter:description",
          content: metaDescription,
        },
        {
          name: "theme-color",
          content: "#002b36",
        },
        ...meta,
      ]}
    />
  );
}

export default SEO;
