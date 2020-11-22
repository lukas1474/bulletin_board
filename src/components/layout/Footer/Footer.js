import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import styles from './Footer.module.scss';

const Component = ({className}) => (
  <div className={clsx(className, styles.footer)}>
    <h2>2020</h2>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
};

export {
  Component as Footer,
  Component as FooterComponent,
};
