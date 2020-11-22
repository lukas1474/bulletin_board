import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import clsx from 'clsx';

import styles from './PageNav.module.scss';

const Component = ({className, children}) => (
  <nav className={clsx(className, styles.component)}>
    <Button className={styles.link} component={NavLink} exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>Home</Button>
  </nav>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as PageNav,
  Component as PageNavComponent,
};
