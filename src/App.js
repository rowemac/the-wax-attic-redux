import './App.css';
import EditAlbumForm from './components/EditAlbumForm'
import NewAlbumForm from './components/NewAlbumForm';
import AlbumList from './containers/AlbumList';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={ AlbumList } />
            <Route exact path="/albums/new" component={ NewAlbumForm } />
            <Route exact path="/albums/:id/edit" component={ EditAlbumForm } />
          </Switch>
          {/* <NewAlbumForm /> */}
        </Router>
      </div>
    );
}

export default App;
