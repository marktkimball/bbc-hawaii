import React from "react";
import PropTypes from "prop-types";
import { CreditsPageTemplate } from "../../templates/credits-page";

const CreditsPagePreview = ({ entry, widgetFor }) => (
  <CreditsPageTemplate
    content={widgetFor("body")}
    credits={entry.getIn(["data", "credits"])}
    title={entry.getIn(["data", "title"])}
  />
);

CreditsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default CreditsPagePreview;
