//@ts-nocheck

import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId, width, height }) => (
    <div className="video-responsive">
        <iframe
            width={width || "853"}
            height={height || "480"}
            src={`https://www.youtube.com/embed/${embedId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
        ></iframe>
    </div>
);

YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
