import React from "react";
import PropTypes from "prop-types";
import { BeliefsPageTemplate } from "../../templates/beliefs-page";

const BeliefsPagePreview = ({ entry, widgetFor }) => (
  <BeliefsPageTemplate
    title={entry.getIn(["data", "title"])}
    subtitle={entry.getIn(["data", "subtitle"])}
    content={widgetFor("body")}
  />
);

BeliefsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default BeliefsPagePreview;
