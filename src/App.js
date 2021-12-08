
import{ BrowserRouter as Router, Switch, Route, Link }from 'react-router-dom'

import Home from './components/pages/Home'
import Sobre from './components/pages/Sobre'
import Contato from './components/pages/Contato'
import NovoProjeto from './components/pages/NovoProjeto'

import Container from './layout/Container'

function App() {

  return (
    <Router>
      <div>
        <Link to="/">Home/</Link>
        <Link to="/sobre">Sobre/</Link>
        <Link to="/contato">Contato/</Link>
        <Link to="/novoprojeto">NovoProjeto/</Link>
      </div>
      <ul>
        <li>Home</li>
        <li>Contato</li>
      </ul>
      <Switch>
        <Container>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/sobre">
           <Sobre />
          </Route>
          <Route exact path="/contato">
           <Contato />
          </Route>
          <Route exact path="/novoprojeto">
           <NovoProjeto />
          </Route>
        </Container>
      </Switch>
      <p>Rodapé</p>
    </Router>
    
  );
}

export default App;
