import React from "react";
import PropTypes from "prop-types";
import { EventItemTemplate } from "../../templates/event-item";

const EventItemPreview = ({ entry, widgetFor }) => {
  const tags = entry.getIn(["data", "tags"]);
  return (
    <EventItemTemplate
      title={entry.getIn(["data", "title"])}
      description={entry.getIn(["data", "description"])}
      featureEvent={entry.getIn(["data", "featuredEvent"])}
      location={entry.getIn(["data", "location"])}
      address={entry.getIn(["data", "address"])}
      tags={tags && tags.toJS()}
      content={widgetFor("body")}
    />
  );
};

EventItemPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default EventItemPreview;
