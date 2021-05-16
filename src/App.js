import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Navbar from './components/layout/Navbar'
import Home from './components/pages/Home'
import NotFound from './components/pages/NotFound'

import User from './components/users/User'
import Alert from './components/layout/Alert'
import About from './components/pages/About'


import GithubState from './context/github/GithubState'
import AlertState from './context/alert/AlertState'

import './App.css';


const App = () => {

  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar title="Github Finder" icon="fab fa-github" />
            <div className="container">
              <Alert />
              {/* Put all the Routes inside of Switch */}
              <Switch >
                {/* When there are no props we can create a route for a component like this */}
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About} />
                <Route exact path='/user/:login' component={User} />

                {/* Not Found At the end !!! */}
                <Route component={NotFound}></Route>
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>

  )
  
}

export default App