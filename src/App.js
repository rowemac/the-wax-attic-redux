import './App.css';
import Home from './components/Home'
import EditAlbumForm from './containers/EditAlbumForm'
import NewAlbumForm from './containers/NewAlbumForm';
import AlbumList from './containers/AlbumList';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/albums" component={ AlbumList } />
            <Route exact path="/albums/new" component={ NewAlbumForm } />
            <Route exact path="/albums/:id/edit" component={ EditAlbumForm } />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
}

export default App;
