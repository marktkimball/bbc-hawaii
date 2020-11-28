import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Content, { HTMLContent } from "../components/Content";
import Layout from "../components/Layout";
import MiniHero from "../components/MiniHero";
import OurBeliefsImage from "../img/prayer-on-coast.jpg";

export const BeliefsPageTemplate = ({
  title,
  subtitle,
  content,
  contentComponent,
}) => {
  React.useEffect(() => {
    const script = document.createElement("script");

    script.async = true;
    script.innerHTML = `
      var refTagger = {
        settings: {
          bibleVersion: "KJV",
          socialSharing: [],
          tooltipStyle: "dark",
        },
      };
      (function (d, t) {
        var g = d.createElement(t),
          s = d.getElementsByTagName(t)[0];
        g.src = "//api.reftagger.com/v2/RefTagger.js";
        s.parentNode.insertBefore(g, s);
      })(document, "script");
      `;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  const PageContent = contentComponent || Content;
  return (
    <>
      <MiniHero image={OurBeliefsImage} title={title} subtitle={subtitle} />
      <section className="section section--gradient">
        <PageContent className="content beliefs" content={content} />
      </section>
    </>
  );
};

BeliefsPageTemplate.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  content: PropTypes.node,
};

const BeliefsPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BeliefsPageTemplate
        title={post.frontmatter.title}
        subtitle={post.frontmatter.subtitle}
        contentComponent={HTMLContent}
        content={post.html}
      />
    </Layout>
  );
};

BeliefsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default BeliefsPage;

export const BeliefsPageQuery = graphql`
  query BeliefsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subtitle
      }
    }
  }
`;
