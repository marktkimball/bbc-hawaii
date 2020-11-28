import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import "./staff-members.scss";

export const StaffMembers = ({ staff }) => (
  <div className="staff-members-container">
    {staff.map((person) => (
      <div className="staff-member">
        <div className="staff-member-image">
          <PreviewCompatibleImage imageInfo={person.image} />
        </div>

        <div className="staff-member-name-title">
          <h3 className="headline-text">{person.name}</h3>
          {person.subtitle && <h6>{person.subtitle}</h6>}
          {person.bio && <p>{person.bio}</p>}
        </div>
      </div>
    ))}
  </div>
);

StaffMembers.propTypes = {
  staff: PropTypes.arrayOf({
    bio: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    name: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
  }).isRequired,
};

export default StaffMembers;
