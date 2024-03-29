//@ts-nocheck

import React from "react";
import PropTypes from "prop-types";

const ratio = 853 / 480;

const YoutubeEmbed = ({ embedId, width}) => (
    <div className="video-responsive">
        <iframe
            width={width || "853"}
            height={width / ratio || "480"}
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
