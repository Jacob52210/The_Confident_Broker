import './App.css';
import Header from './components/header';
import Greeting from './components/landingpage';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results-page';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="https://jacob52210.github.io/The_Confident_Broker/" exact component={Greeting} />
          <Route path="https://jacob52210.github.io/The_Confident_Broker/form" component={Form} />
          <Route path="https://jacob52210.github.io/The_Confident_Broker/results" component={Results} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;