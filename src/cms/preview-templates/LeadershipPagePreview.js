import React from "react";
import PropTypes from "prop-types";
import { LeadershipPageTemplate } from "../../templates/leadership-page";

const LeadershipPagePreview = ({ entry, widgetFor }) => (
  <LeadershipPageTemplate
    title={entry.getIn(["data", "title"])}
    subtitle={entry.getIn(["data", "subtitle"])}
    staff={entry.getIn(["data", "staff"]).toJS()}
    content={widgetFor("body")}
  />
);

LeadershipPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default LeadershipPagePreview;
