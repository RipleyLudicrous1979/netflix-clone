/**
 * Github: https://github.com/hieptl/netflix-clone.
 * Dev.to: https://dev.to/hieptl/learn-react-by-building-netflix-1127
 */
// import react.
import { useEffect, useState } from "react";
// import firebase database.
import { firebaseDatabase } from "../../firebase/firebase";
// import use dispatch to dispatch action to the store.
import { useDispatch } from "react-redux";
// import action types.
import * as loadingActionTypes from "../../actions/LoadingActions";
/**
 * create Row component.
 * @param {*} props which are passed to the Row component.
 */
function Row(props) {
  // create "movies" state to store list of movies from Firebase.
  const [movies, setMovies] = useState([]);
  // get props.
  const { title, movieType } = props;
  // leafRoot to get data from Firebase.
  const leafRoot = "movies";

  const dispatch = useDispatch();

  /**
   * fetch movies from Firebase when getting "movieType" prop.
   */
  useEffect(() => {
    fetchMovies(movieType);
  }, [movieType]);

  /**
   * fetch movies from Firebase.
   * @param {*} movieType which is used to get movies from Firebase.
   */
  const fetchMovies = (movieType) => {
    dispatch({ type: loadingActionTypes.SHOW_LOADING });
    const movieRef = firebaseDatabase.ref(`${leafRoot}/${movieType}`);
    movieRef.on("value", (snapshot) => {
      const movies = snapshot.val();
      if (movies && movies.length !== 0) {
        // update "movies" state after getting movies from Firebase.
        setMovies(() => movies);
        dispatch({ type: loadingActionTypes.HIDE_LOADING });
      }
    });
  };

  return (
    <div className="row">
      {/* Title */}
      <h2>{title}</h2>
      {/* End Title */}
      {/* List of Movies */}
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className="row__poster row__posterLarge"
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={movie.original_name}
          />
        ))}
      </div>
      {/* End List of Movies */}
    </div>
  );
}
// export Row component.
export default Row;
