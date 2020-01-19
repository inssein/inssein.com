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
  const { site } = useStaticQuery(
    graphql`
      query {
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
            title: `${site.siteMetadata.title} — A blog by Hussein Jafferjee`,
          })}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        ...meta,
      ]}
    />
  );
}

export default SEO;
