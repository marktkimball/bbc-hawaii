import React from "react";
import PropTypes from "prop-types";
import { IndexPageTemplate } from "../../templates/index-page";

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <IndexPageTemplate
        announcementTitle={data.announcementTitle}
        currentSermonImage={getAsset(data.currentSermonImage)}
        image={getAsset(data.image)}
        infoText={entry.getIn(["data", "infoText"]).toJS()}
        logo={getAsset(data.logo)}
        missionStatement={data.missionStatement}
        missionSubStatement={data.missionSubStatement}
        title={data.title}
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
