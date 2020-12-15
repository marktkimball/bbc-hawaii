import React from "react";
import PropTypes from "prop-types";
import { ImNewPageTemplate } from "../../templates/im-new-page";

const ImNewPreview = ({ entry, widgetFor }) => (
  <ImNewPageTemplate
    content={widgetFor("body")}
    items={entry.getIn(["data", "items"]).toJS()}
    subtitle={entry.getIn(["data", "subtitle"])}
    title={entry.getIn(["data", "title"])}
  />
);

ImNewPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default ImNewPreview;
