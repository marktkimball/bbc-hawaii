import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Content, { HTMLContent } from "../components/Content";
import Layout from "../components/Layout";
import StaffMembers from "../components/StaffMembers";
import MiniHero from "../components/MiniHero";
import leadershipImage from "../img/hawaii-beach.jpg";

export const LeadershipPageTemplate = ({
  staff,
  title,
  subtitle,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content;
  return (
    <>
      <MiniHero image={leadershipImage} title={title} subtitle={subtitle} />
      <section className="section section--gradient">
        <div className="content about-subsection">
          <StaffMembers staff={staff} />
        </div>
        <PageContent className="content about-subsection" content={content} />
      </section>
    </>
  );
};

LeadershipPageTemplate.propTypes = {
  staff: PropTypes.array,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  content: PropTypes.node,
};

const LeadershipPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <LeadershipPageTemplate
        title={post.frontmatter.title}
        subtitle={post.frontmatter.subtitle}
        staff={post.frontmatter.staff}
        contentComponent={HTMLContent}
        content={post.html}
      />
    </Layout>
  );
};

LeadershipPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default LeadershipPage;

export const LeadershipPageQuery = graphql`
  query LeadershipPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subtitle
        staff {
          name
          subtitle
          bio
          image {
            childImageSharp {
              fluid(maxWidth: 500, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
