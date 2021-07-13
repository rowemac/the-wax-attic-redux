import './App.css';
import AlbumList from './containers/AlbumList';

function App() {
  
  return (
    <div className="App">
      <AlbumList aL={albums} />
    </div>
  );
}

export default App;
