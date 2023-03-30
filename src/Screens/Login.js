import React, { useState, useContext, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Input } from '../Components/Home/UsedInputs';
import Layout from '../Layout/Layout';
import { FiLogIn } from 'react-icons/fi';
import AuthContext from '../store/auth-context';

function Login(props) {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const authCtx = useContext(AuthContext);

  const usernameChangeHandler = event => {
    setUsername(event.target.value);
  };
  const emailChangeHandler = event => {
    setEmail(event.target.value);
  };
  const passwordChangeHandler = event => {
    setPassword(event.target.value);
  };

  const onSubmitHandler = useCallback(async () => {
    const submitData = {
      username: username,
      email: email,
      password: password,
    };

    try {
      const response = await fetch(
        'http://watchmate.jiakuan.xyz/accounts/login/',
        {
          method: 'POST',
          body: JSON.stringify(submitData),
          headers: { 'Content-Type': 'application/json' },
        }
      );
      if (!response.ok) {
        console.log(response);
        console.log(
          response.json().then(e => {
            let keyValueString = '';

            for (let key in e) {
              if (e.hasOwnProperty(key)) {
                keyValueString += `${key}: ${e[key]} \n`;
              }
            }

            console.log(e);
            alert(keyValueString, 'input not valid');
          })
        );
        throw new Error(response.statusText);
      }
      const status = await response.status;
      if (status.toString()[0] === '2') {
        authCtx.onLogin(username);
        localStorage.setItem('username', username);
        console.log(authCtx);
        window.location.href = '/to-watch';
      }
    } catch (error) {
      console.log(error.message);
    }
  }, [username, email, password]);

  return (
    <Layout>
      <div className="container mx-auto px-2 my-24 flex-colo">
        <div className="w-full 2xl:w-2/5 gap-8 flex-colo p-8 sm:p-14 md:w-3/5 bg-dry  rounded-lg border border-border">
          <img
            src="/images/logo.png"
            alt="logo"
            className="w-full h-12 object-contain"
          />
          <Input
            label="username"
            placeholder="myusername"
            type="text"
            bg={true}
            onChange={usernameChangeHandler}
          />
          <Input
            label="Email"
            placeholder="watchmate@gmail.com"
            type="email"
            bg={true}
            onChange={emailChangeHandler}
          />
          <Input
            label="Password"
            placeholder="*******"
            type="password"
            bg={true}
            onChange={passwordChangeHandler}
          />
          <Link
            onClick={onSubmitHandler}
            //to={`/to-watch`}
            className="bg-subMain transitions hover:bg-main flex-rows gap-4 text-white p-4 rounded-lg w-full"
          >
            <FiLogIn /> Sign In
          </Link>
          <p className="text-center text-border">
            Don't have an account?{' '}
            <Link to="/register" className="text-dryGray font-semibold ml-2">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
