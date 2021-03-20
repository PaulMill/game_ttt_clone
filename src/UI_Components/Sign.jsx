import React from 'react';
import PropTypes from 'prop-types';

export const Sign = ({ char }) => <p className="sign">{char}</p>;

Sign.propTypes = {
    char: PropTypes.string
}