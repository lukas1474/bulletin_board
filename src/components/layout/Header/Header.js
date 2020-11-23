import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { PageNav } from '../PageNav/PageNav';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';

import styles from './Header.module.scss';

const Component = ({ className, changeUserDispatch }) => {
  return (
    <div className={clsx(className, styles.header)}>
      <AppBar className={styles.appBar}>
        <Container maxWidth='lg'>
          <Toolbar disableGutters>
            <PageNav changeUserDispatch = {changeUserDispatch} />
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  changeUserDispatch: PropTypes.func.isRequired,
};

export {
  Component as Header,
  Component as HeaderComponent,
};
