import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { useAuth } from './core/context/authHook';
import { AuthContext } from './core/context/authContext';

import Register from './containers/Auth/Register';
import Login from './containers/Auth/Login';
import Layout from './Layout/Layout';
import Home from './containers/Home/Home';

function App() {
  const { token, userId, login, logout } = useAuth();

  let routes;

  if (token) {
    routes = (
      <Switch >
        <Route path={'/home'} component={Home} />
      </Switch>
    )
  } else {
    routes = (
      <Switch>
        <Route path={'/register'} component={Register} />
        <Route path={'/'} component={Login} />
      </Switch>
    )
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout,
      }}>
      <Router>
        <Layout isAuthorised={!!token}>{routes}</Layout>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
