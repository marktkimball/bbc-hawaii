import React from 'react';
import PropTypes from 'prop-types';
import './sermons.scss';

export const Sermons = ({ sermons }) => (
  <div>
    {sermons.map((sermon) => (
      <div className="sermon-container">
        <div className="sermon-title-container">
          <h3 className="headline-text sermon-title">{sermon.title}</h3>
          <h6 className="sermon-speaker">{sermon.speaker}</h6>
        </div>
        <div className="sermon-content-container">
          {sermon.date}
          <a href={sermon.url} rel="noopener noreferrer" target="_blank">
            Download
          </a>
        </div>
      </div>
    ))}
  </div>
);

Sermons.propTypes = {
  sermons: PropTypes.arrayOf({
    title: PropTypes.string.isRequired,
    speaker: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
};

export default Sermons;