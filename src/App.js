import React from 'react';
import { Provider } from 'react-redux';
import { Switch, BrowserRouter } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import store from './store';
import { listen } from './utils/listener';

import MainLayout from './components/mainLayout/index';
import GuardRoute from './components/GuardRoute';
import GuestOnlyRoute from './components/GuestRouteOnly';
import MainMenu from './configs/mainMenu';

import Login from './pages/Admin/Login';
import PageNotFound from './pages/Admin/404';

function App() {
  React.useEffect(() => {
    listen();
  }, []);

  return (
    <Provider store={store}>
    
      <BrowserRouter>
        <Switch>
          <GuestOnlyRoute path={'/login'} component={Login} exact={true} />
          <MainLayout>
            <Switch>
              {MainMenu.map((route, index) => (
                <GuardRoute {...route} key={index} />
              ))}
              <GuardRoute component={PageNotFound} />
            </Switch>
          </MainLayout>
        </Switch>
      </BrowserRouter>
      <ToastContainer />
    </Provider>
  );
}

export default App;
