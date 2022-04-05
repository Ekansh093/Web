import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Contacts from './components/contactBook/Contacts';
import NavBar from './components/NavBar';
import store from './redux/store'
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddContact from './components/contactBook/AddContact'
import Videos from './components/youtube/Videos';
import TikTokHome from './components/tik-tok/TikTokHome';
import PostMaster from './components/postmaster/PostMaster';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/postmaster" component={PostMaster} />
            <Route exact path="/youtube" component={Videos} />
            <Route exact path="/contacts" component={Contacts} />
            <Route exact path="/contacts/add" component={AddContact} />
            <Route exact path="/contacts/edit/:id" component={AddContact} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
