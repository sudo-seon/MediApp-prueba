import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Register from './Components/Register'
import { Login } from './Components/Login'
import { Home } from './Components/Home'
import Citas from './Components/Citas';
import Consultas from './Components/Consultas';

import Dashboard from './Components/Dashboard'
import EditUser from './Components/EditUser'
import PatientTable from './Components/PatientTable'

function App() {
window.addEventListener('unload', () => {
    localStorage.clear();
});
  return (
      <Router>
          <div>
              <Switch>
                  <Route path="/" component={Home} exact/>
                  <Route path="/register" component={Register} />
                  <Route path="/login" component={Login} />
                  <Route path="/dashboard" component={Dashboard} exact/>
                  <Route path="/citas" component={Citas} exact />
                  <Route path="/consultas" component={Consultas} exact />
                  <Route path="/usertable" component={EditUser}/>
                  <Route path="/test" component={PatientTable}/>
              </Switch>
          </div>
      </Router>
  );
}

export default App;
