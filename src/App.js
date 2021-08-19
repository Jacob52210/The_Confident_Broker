import './App.css';
import Header from './components/header';
import Greeting from './components/landingpage';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results-page';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/The_Confident_Broker/#/" component={Greeting} />
          <Route path="/The_Confident_Broker/#/form" component={Form} />
          <Route path="/The_Confident_Broker/#//results" component={Results} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;