import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';

export default function Component(props) {
  const { actions } = props;

  const history = useHistory();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const params = {
      email: e.target.elements.username?.value,
      password: e.target.elements.password?.value
    };
    const response = await actions.submitLogin(params);
    console.log(response);
    if (response?.code === 200) {
      history.push('/');
    }
  };

  return (
    <div className="h-screen flex bg-gray-bg1">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
        <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
          Log in to your account
        </h1>

        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="username">Email</label>
            <input
              type="text"
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id="username"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id="password"
              placeholder="Your Password"
            />
          </div>

          <div className="flex justify-center items-center mt-6">
            <button
              style={{backgroundColor:'#008145'}}
              className={`py-2 px-4 text-sm text-white rounded border w-full`}>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

Component.defaultProps = {
  actions: {}
};
Component.propTypes = {
  actions: PropTypes.object
};
