import React from "react";
import PropTypes from "prop-types";
import { Footer } from "../../components/Footer";

const FooterPreview = ({ entry }) => {
  console.info(entry.getIn(["data"]).toJS());
  return (
    <Footer
      serviceTime={entry.getIn(["data", "serviceTime"])}
      phoneNumber={entry.getIn(["data", "phoneNumber"])}
      emailAddress={entry.getIn(["data", "emailAddress"])}
      addressLineOne={entry.getIn(["data", "addressLineOne"])}
      addressLineTwo={entry.getIn(["data", "addressLineTwo"])}
      googleMapsLink={entry.getIn(["data", "googleMapsLink"])}
      facebookLink={entry.getIn(["data", "facebookLink"])}
      twitterLink={entry.getIn(["data", "twitterLink"])}
      instagramLink={entry.getIn(["data", "instagramLink"])}
      youtubeLink={entry.getIn(["data", "youtubeLink"])}
      vimeoLink={entry.getIn(["data", "vimeoLink"])}
    />
  );
};

FooterPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default FooterPreview;
