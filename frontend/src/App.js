import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Login from './containers/Auth/Login';
import Register from './containers/Auth/Register';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={'/register'} component={Register} />
        <Route path={'/'} component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
