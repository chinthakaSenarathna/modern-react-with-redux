import './App.css';
import MoviePlaylist from "./components/MoviePlaylist";
import SongPlaylist from "./components/SongPlaylist";
import { reset } from './store';
import { useDispatch } from 'react-redux';

export default function App() {
  const dispatch = useDispatch();

  const handleResetClick = () => {
    const action = reset();
    dispatch(action);
  };

  return (
    <div style={{'margin': '10px'}} className="container is-fluid">
      <button onClick={() => handleResetClick()} className="button is-danger">
        Reset Both Playlists
      </button>
      <hr />
      <MoviePlaylist />
      <hr />
      <SongPlaylist />
    </div>
  );
}

