import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PictureCTAContainer from "../components/PictureCTA";
import AboutUsImage from "../img/beach-from-water.jpg";
import EventsImage from "../img/beach-campfire.jpg";
import WelcomeImage from "../img/aloha-tower.jpg";

export const IndexPageTemplate = ({
  image,
  infoText,
  logo,
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
      <div className="home-jumbotron-title-container">
        <img
          alt="logo"
          src={!!logo.childImageSharp ? logo.childImageSharp.fluid.src : logo}
        />
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
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  infoText: PropTypes.arrayOf(PropTypes.string),
  missionStatement: PropTypes.string,
  missionSubStatement: PropTypes.string,
  title: PropTypes.string,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout
      announcementTitle={frontmatter.announcementTitle}
      showAnnoucements={frontmatter.showAnnoucements}
    >
      <IndexPageTemplate
        image={frontmatter.image}
        infoText={frontmatter.infoText}
        logo={frontmatter.logo}
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
        showAnnoucements
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        logo {
          childImageSharp {
            fluid(maxWidth: 600, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
