import React from "react";
import PropTypes from "prop-types";
import { Footer } from "../../components/Footer";

const FooterPreview = ({ entry }) => (
  <Footer
    addressLineOne={entry.getIn(["data", "addressLineOne"])}
    addressLineTwo={entry.getIn(["data", "addressLineTwo"])}
    emailAddress={entry.getIn(["data", "emailAddress"])}
    facebookLink={entry.getIn(["data", "facebookLink"])}
    googleMapsLink={entry.getIn(["data", "googleMapsLink"])}
    instagramLink={entry.getIn(["data", "instagramLink"])}
    phoneNumber={entry.getIn(["data", "phoneNumber"])}
    serviceTime={entry.getIn(["data", "serviceTime"])}
    twitterLink={entry.getIn(["data", "twitterLink"])}
    vimeoLink={entry.getIn(["data", "vimeoLink"])}
    youtubeLink={entry.getIn(["data", "youtubeLink"])}
  />
);

FooterPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default FooterPreview;
