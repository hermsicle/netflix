import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import * as ROUTES from './constants/routes'
import {Home, Signin, Signup, Browse} from './pages'
import {useAuthListener} from './hooks'
import { IsUserRedirect, ProtectedRoute } from './helpers/routes'

function App() {

  const { user } = useAuthListener()

  return (
    <Router>
      <Switch>

        <IsUserRedirect user={ user } loggedInPath = {ROUTES.BROWSE} path={ROUTES.SIGNIN}>
          <Signin/>
        </IsUserRedirect>

        <IsUserRedirect user={ user } loggedInPath = {ROUTES.BROWSE} path={ROUTES.SIGNUP}>
          <Signup/>
        </IsUserRedirect>

        <ProtectedRoute user={ user } path={ROUTES.BROWSE}>
          <Browse/>
        </ProtectedRoute>

        <IsUserRedirect user={ user } loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME}>
          <Home/>
        </IsUserRedirect>

      </Switch>
    </Router>
  );
}

export default App;
