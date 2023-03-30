import React, { useContext, useCallback, useEffect } from 'react';
//import Uploder from '../../Components/Uploder';
import { Input } from '../../Components/Home/UsedInputs';
import SideBar from './SideBar';
import AuthContext from '../../store/auth-context';

function Profile() {
  const authCtx = useContext(AuthContext);

  console.log(authCtx.username);

  const getMoviesHandler = useCallback(async () => {
    try {
      const response = await fetch(
        'http://watchmate.jiakuan.xyz/accounts/user'
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

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  useEffect(() => {
    getMoviesHandler();
  }, []);
  return (
    <SideBar>
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-bold">Profile</h2>

        {/* <Uploder /> */}
        <Input label="First Name" placeholder="Donald" type="text" bg={true} />
        <Input label="Last Name" placeholder="Trump" type="text" bg={true} />
        {/* <Input label="username" placeholder="username" type="text" bg={true} />
        <Input
          label="Email"
          placeholder="watchname@gmail.com"
          type="email"
          bg={true}
        /> */}
        <div className="flex gap-2 flex-wrap flex-col-reverse sm:flex-row justify-between items-center my-4">
          {/* <button className="bg-subMain font-medium transitions hover:bg-main border border-subMain text-white py-3 px-6 rounded w-full sm:w-auto">
            Delete Account
          </button> */}
          <button className="bg-main font-medium transitions hover:bg-subMain border border-subMain text-white py-3 px-6 rounded w-full sm:w-auto">
            Update Profile
          </button>
        </div>
      </div>
    </SideBar>
  );
}

export default Profile;
