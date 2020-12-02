import React from "react";
import PropTypes from "prop-types";
import { ImNewPageTemplate } from "../../templates/im-new-page";

const ImNewPreview = ({ entry, widgetFor }) => {
  return (
    <ImNewPageTemplate
      title={entry.getIn(["data", "title"])}
      subtitle={entry.getIn(["data", "subtitle"])}
      items={entry.getIn(["data", "items"]).toJS()}
      content={widgetFor("body")}
    />
  );
};

ImNewPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default ImNewPreview;
