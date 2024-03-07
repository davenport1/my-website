import * as React from 'react';
import PropTypes from 'prop-types';
import {
    imageFrame,
    imageCaption
} from './imageFrame.module.css'
import {GatsbyImage} from "gatsby-plugin-image";

const ImageFrame = ({ children, caption }) => {
    return (
        <div className={imageFrame}>
            {children}
            {caption && <p className={imageCaption}>{caption}</p>}
        </div>
    );
};

ImageFrame.propTypes = {
    children: PropTypes.element.isRequired,
    caption: PropTypes.string,
};

export default ImageFrame;