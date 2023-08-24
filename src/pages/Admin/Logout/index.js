import * as React from 'react';
import { useHistory } from 'react-router-dom';
import BounceLoader from 'react-spinners/BounceLoader';
import { logout } from '../../../api/auth';

export default function Component() {
  let history = useHistory();

  const onLogout = async () => {
    await logout();
    window.location.assign('/login');
  };

  React.useEffect(() => {
    onLogout();
  }, [history]);

  return (
    <div className="text-center flex flex-col justify-center items-center">
      <BounceLoader color="red" />
      <br />
      Logging out ...
    </div>
  );
}
