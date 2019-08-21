import React from "react";
import PropTypes from "prop-types";

export default class Gallery extends React.Component {
  static propTypes = {
    image: PropTypes.string
  };

  static getInitialProps({ query: { image } }) {
    return { image };
  }

  render() {
    const { image } = this.props;

    return (
      <div>
        {image && (
          <div style={{ position: "fixed", top: "10px", left: "10px" }} />
        )}
        <div>Hello there</div>
      </div>
    );
  }
}
