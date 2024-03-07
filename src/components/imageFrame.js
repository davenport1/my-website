import * as React from 'react';
import PropTypes from 'prop-types';
import {
    imageFrame,
    imageCaption
} from './imageFrame.module.css'
import {StaticImage} from "gatsby-plugin-image";

const ImageFrame = ({ src, alt, caption }) => {
    return (
        <div className="image-frame">
            <StaticImage src={src} alt={alt} />
            {caption && <p className="image-caption">{caption}</p>}
        </div>
    );
};

ImageFrame.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    caption: PropTypes.string,
};

export default ImageFrame;