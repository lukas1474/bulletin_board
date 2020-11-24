import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';
import { getAll } from '../../../redux/userRedux';
import { connect } from 'react-redux';

import clsx from 'clsx';
import styles from './PageNav.module.scss';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const Component = ({ className, changeUserDispatch, users }) => {
  const classes = useStyles();

  return (
    <div className={clsx(className, styles.component)}>
      <FormControl className={classes.formControl}>
        <Select native defaultValue="" onChange={changeUserDispatch} id="grouped-native-select" className={styles.option}>
          <optgroup label="Użytkownicy">
            {users && users.map(user => (
              <option value={1} key={user.id} active={user.active} >
                {user.name} / {user.role}
              </option>
            ))}
          </optgroup>
        </Select>
        <nav>
          <Button className={styles.link} component={NavLink} exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>Home</Button>
        </nav>
      </FormControl>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  changeUserDispatch: PropTypes.func,
  users: PropTypes.string,
};

const mapStateToProps = state => ({
  users: getAll(state),
});

const Container = connect(mapStateToProps)(Component);

export {
  Container as PageNav,
  // Component as PageNav,
  Component as PageNavComponent,
};
