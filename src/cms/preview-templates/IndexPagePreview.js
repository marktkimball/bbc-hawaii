import React from "react";
import PropTypes from "prop-types";
import { IndexPageTemplate } from "../../templates/index-page";

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <IndexPageTemplate
        title={data.title}
        items={entry.getIn(["data", "infoText"]).toJS()}
        image={getAsset(data.image)}
        logo={data.logo}
        missionStatement={data.missionStatement}
        missionSubStatement={data.missionSubStatement}
        announcementTitle={data.announcementTitle}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default IndexPagePreview;
