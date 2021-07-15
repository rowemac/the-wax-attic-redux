import './App.css';
import NewAlbumForm from './components/NewAlbumForm';
import AlbumList from './containers/AlbumList';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={ AlbumList } />
            <Route exact path="/albums/new" component={ NewAlbumForm } />
          </Switch>
          {/* <NewAlbumForm /> */}
        </Router>
      </div>
    );
}

export default App;
