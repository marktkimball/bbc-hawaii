import React from "react";
import PropTypes from "prop-types";
import { LeadershipPageTemplate } from "../../templates/leadership-page";

const LeadershipPagePreview = ({ entry, widgetFor }) => (
  <LeadershipPageTemplate
    content={widgetFor("body")}
    staff={entry.getIn(["data", "staff"]).toJS()}
    subtitle={entry.getIn(["data", "subtitle"])}
    title={entry.getIn(["data", "title"])}
  />
);

LeadershipPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default LeadershipPagePreview;
