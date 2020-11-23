import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import clsx from 'clsx';

import styles from './PageNav.module.scss';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const Component = ({ className, changeUserDispatch }) => {
  const classes = useStyles();

  return (
    <div className={clsx(className, styles.root)}>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-native-select">Zaloguj się</InputLabel>
        <Select native defaultValue="" onChange={changeUserDispatch} id="grouped-native-select">
          <option aria-label="None" value="" />
          <optgroup label="Użytkownicy">
            <option value={1}>Niezalogowany</option>
            <option value={2}>Jan Latkowski</option>
            <option value={3}>Anna Łoza</option>
            <option value={4}>Administrator</option>
          </optgroup>
        </Select>
      </FormControl>
      <nav className={clsx(className, styles.component)}>
        <Button className={styles.link} component={NavLink} exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>Home</Button>
      </nav>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  changeUserDispatch: PropTypes.func.isRequired,
};

export {
  Component as PageNav,
  Component as PageNavComponent,
};
