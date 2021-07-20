import { useEffect, useRef, useState } from 'react';
import { useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import classes from './AuthForm.module.css';
import { authActions } from '../store/auth-slice';

const AuthForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isLogin, setIsLogin] = useState(true);
  const [users, setUsers] = useState([]);
  const userEmailRef = useRef('');
  const userPassRef = useRef('');

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const onLoginHandler = async(event) => {
    event.preventDefault();
    
    const foundUser = users.filter(user => {
      if(user.email === userEmailRef.current.value && user.password === userPassRef.current.value){
        return user;
      }
      return null;
    });

    if(foundUser){
      dispatch(authActions.login({foundUser}));
      history.replace('/');
    }
  };

  useEffect(() => {
    
    const fetchUsers = async() => {
      if(isLogin){
        const response = await fetch('https://fakestoreapi.com/users/');
        if(response.ok){
          const data = await response.json();
          setUsers(data);
        }else{
          console.log('ERROR');
        }
      }
    };

    fetchUsers();

  }, [isLogin])

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={onLoginHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' ref={userEmailRef} required />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' ref={userPassRef} required />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? 'Login' : 'Create Account'}</button>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
