import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

import { connect } from 'react-redux';
import { changeUser } from '../../../redux/userRedux';

import styles from './MainLayout.module.scss';

const Component = ({ className, children, changeUser }) => {
  console.log(changeUser);
  return (
    <div className={clsx(className, styles.root)}>
      <Header changeUserDispatch={changeUser} />
      <h2>MainLayout</h2>
      {children}
      <Footer />
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  changeUser: PropTypes.func,
};

const mapStateToProps = state => ({
  // someProp: reduxSelector(state),
});

const mapDispatchToProps = dispatch => ({
  changeUser: arg => dispatch(changeUser(arg)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as MainLayout,
  Container as MainLayout,
  Component as MainLayoutComponent,
};
