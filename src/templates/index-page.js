import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PictureCTAContainer from "../components/PictureCTA";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import AboutUsImage from "../img/beach-from-water.jpg";
import EventsImage from "../img/beach-campfire.jpg";
import WelcomeImage from "../img/aloha-tower.jpg";

export const IndexPageTemplate = ({
  currentSermonImage,
  image,
  infoText,
  missionStatement,
  missionSubStatement,
  title,
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
        {infoText.map((text, i) => (
          <h2 key={`${text}-${i}`} className="info-text headline-text">
            {text}
          </h2>
        ))}
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container mission-container">
        <h1 className="title headline-text main-pitch">{missionStatement}</h1>
        <p className="mission-sub-statement">{missionSubStatement}</p>
      </div>
      {currentSermonImage && (
        <div className="section current-sermon-container">
          <h2 className="alt-headline-text current-sermon-title">
            Current sermon series:
          </h2>
          <PreviewCompatibleImage imageInfo={currentSermonImage} />
        </div>
      )}
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
  currentSermonImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  infoText: PropTypes.arrayOf(PropTypes.string),
  missionStatement: PropTypes.string,
  missionSubStatement: PropTypes.string,
  title: PropTypes.string,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout announcementTitle={frontmatter.announcementTitle}>
      <IndexPageTemplate
        currentSermonImage={frontmatter.currentSermonImage}
        image={frontmatter.image}
        infoText={frontmatter.infoText}
        missionStatement={frontmatter.missionStatement}
        missionSubStatement={frontmatter.missionSubStatement}
        title={frontmatter.title}
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
        infoText
        missionStatement
        missionSubStatement
        title
        currentSermonImage {
          childImageSharp {
            fluid(maxWidth: 720, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
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
