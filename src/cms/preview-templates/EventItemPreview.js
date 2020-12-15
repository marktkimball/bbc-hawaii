import React from "react";
import PropTypes from "prop-types";
import { EventItemTemplate } from "../../templates/event-item";

const EventItemPreview = ({ entry, widgetFor }) => {
  const tags = entry.getIn(["data", "tags"]);

  return (
    <EventItemTemplate
      address={entry.getIn(["data", "address"])}
      content={widgetFor("body")}
      description={entry.getIn(["data", "description"])}
      featureEvent={entry.getIn(["data", "featuredEvent"])}
      location={entry.getIn(["data", "location"])}
      tags={tags && tags.toJS()}
      title={entry.getIn(["data", "title"])}
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
