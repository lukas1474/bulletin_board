import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';
import { changeUser, getAll, getActive } from '../../../redux/userRedux';
import { connect } from 'react-redux';

import clsx from 'clsx';
import styles from './PageNav.module.scss';

import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

// const useStyles = makeStyles((theme) => ({
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//   },
// }));

// changeUser = (payload) => {
//   console.log('user', payload);
//   const { sendStatus } = this.props;

//   sendStatus({id: payload.id, name: payload.name, role: payload.role, active: payload.active});
// };
class Component extends React.Component {

  state = {
    selectedValue: this.props.loggedUser.name,
  };

  changeUser(event) {
    console.log(event.target.value);
    const { sendStatus, users } = this.props;

    const payload = users.find(user => user.id == event.target.value);

    console.log(payload);

    if (payload) {
      sendStatus(payload);
    }
  }

  render() {

    const { className, users, children, loggedUser } = this.props;
    const { selectedValue } = this.state;

    return (
      <div className={clsx(className, styles.component)}>
        <FormControl className={styles.formControl}>
          <Select native value={selectedValue.name} onChange={(event) => this.changeUser(event)} id="grouped-native-select" className={styles.option}>
            <optgroup label="Użytkownicy" >
              {users && users.map(user => (
                <option key={user.id} value={user.id}>
                  {user.name} / {user.role}
                </option>
              ))}
            </optgroup>
          </Select>
          <nav>
            <Button className={styles.link} variant="contained" color="secondary" href="/" activeClassName='active'>Home</Button>
          </nav>
          {loggedUser.active ? <Button className={styles.link} component={NavLink} exact to={`/`} activeClassName='active'>Logout</Button> : <Button className={styles.link} component={NavLink} exact to={`/`} activeClassName='active' >Login</Button>}
        </FormControl>
        {children}
      </div>
    );
  }
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  changeUserDispatch: PropTypes.func,
  users: PropTypes.array,
  loggedUser: PropTypes.object,
  sendStatus: PropTypes.func,
};

const mapStateToProps = state => ({
  users: getAll(state),
  loggedUser: getActive(state),
});

const mapDispatchToProps = (dispatch) => ({
  sendStatus: (payload) => dispatch(changeUser(payload)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as PageNav,
  // Component as PageNav,
  Component as PageNavComponent,
};
