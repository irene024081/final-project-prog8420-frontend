import React, { useState, useCallback, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Input } from '../Components/Home/UsedInputs';
import Layout from '../Layout/Layout';
import { FiLogIn } from 'react-icons/fi';
import AuthContext from '../store/auth-context';

function Register() {
  const authCtx = useContext(AuthContext);

  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const usernameChangeHandler = event => {
    setUsername(event.target.value);
  };
  const emailChangeHandler = event => {
    setEmail(event.target.value);
  };
  const passwordChangeHandler = event => {
    setPassword(event.target.value);
  };
  const confirmPasswordChangeHandler = event => {
    setConfirmPassword(event.target.value);
  };

  const onSubmitHandler = useCallback(async () => {
    const submitData = {
      username: username,
      email: email,
      password1: password,
      password2: confirmPassword,
    };

    try {
      const response = await fetch(
        'http://watchmate.jiakuan.xyz/accounts/registration',
        {
          method: 'POST',
          body: JSON.stringify(submitData),
          headers: { 'Content-Type': 'application/json' },
        }
      );
      if (!response.ok) {
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
        authCtx.onLogin(username, password);
        alert('Register Success');
      }
    } catch (error) {
      console.log(error.message);
    }
  }, [username, email, password, confirmPassword]);

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
            label="Username"
            placeholder="Your User Name"
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
            placeholder="contains at least 8 characters, 1 alphabet, 1 number"
            type="password"
            bg={true}
            onChange={passwordChangeHandler}
          />
          <Input
            label="Confirm Password"
            placeholder="*******"
            type="password"
            bg={true}
            onChange={confirmPasswordChangeHandler}
          />
          <Link
            // to="/dashboard"
            className="bg-subMain transitions hover:bg-main flex-rows gap-4 text-white p-4 rounded-lg w-full"
            onClick={onSubmitHandler}
          >
            <FiLogIn /> Sign Up
          </Link>
          <p className="text-center text-border">
            Already have an account?{' '}
            <Link to="/login" className="text-dryGray font-semibold ml-2">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Register;
