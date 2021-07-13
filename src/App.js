import './App.css';
import NewAlbumForm from './components/NewAlbumForm';
import AlbumList from './containers/AlbumList';

function App() {
  
  return (
    <div className="App">
      <AlbumList />
      <NewAlbumForm />
    </div>
  );
}

export default App;
