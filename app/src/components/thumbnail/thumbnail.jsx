import React from "react";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";

function Thumbnail({ alt, src }) {
  return <Avatar alt={alt} src={src} />;
}

Thumbnail.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

Thumbnail.defaultProps = {
  alt: "",
};

export default Thumbnail;
