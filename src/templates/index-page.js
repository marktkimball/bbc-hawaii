import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PictureCTAContainer from "../components/PictureCTA";
import WelcomeImage from "../img/aloha-tower.jpg";
import AboutUsImage from "../img/beach-from-water.jpg";
import EventsImage from "../img/beach-campfire.jpg";

export const IndexPageTemplate = ({
  missionStatement,
  missionSubStatement,
  image,
  title,
  infoText,
}) => (
  <div>
    <div
      className="home-jumbotron depth-4"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
      }}
    >
      <div
        style={{
          maxWidth: "80%",
        }}
      >
        <h1 className="headline-text jumbotron-title-text">{title}</h1>
      </div>
      <div className="jumbotron-info-text-container">
        {infoText.map((text) => (
          <h2 className="info-text headline-text">{text}</h2>
        ))}
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container mission-container">
        <h1 className="title headline-text main-pitch">{missionStatement}</h1>
        <p className="mission-sub-statement">{missionSubStatement}</p>
      </div>
      <PictureCTAContainer
        items={[
          { image: WelcomeImage, title: "I'm New", to: "/im-new" },
          { image: AboutUsImage, title: "About Us", to: "/about" },
          { image: EventsImage, title: "Upcoming Events", to: "/events" },
        ]}
      />
    </section>
  </div>
);

IndexPageTemplate.propTypes = {
  missionStatement: PropTypes.string,
  missionSubStatement: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  infoText: PropTypes.arrayOf(PropTypes.string),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout announcementTitle={frontmatter.announcementTitle}>
      <IndexPageTemplate
        missionStatement={frontmatter.missionStatement}
        missionSubStatement={frontmatter.missionSubStatement}
        image={frontmatter.image}
        title={frontmatter.title}
        infoText={frontmatter.infoText}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        announcementTitle
        missionStatement
        missionSubStatement
        title
        infoText
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
