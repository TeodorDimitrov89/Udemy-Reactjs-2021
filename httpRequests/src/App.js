import React, { useState, useEffect, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie';
import './App.css';

function App() {
  const [moviesData, setMoviesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        'https://react-http-b17ed-default-rtdb.firebaseio.com/movie.json'
      );
      if (!response.ok) {
        throw new Error('Something went horribly wrong!');
      }
      const data = await response.json();
      const transformedMovies = Object.keys(data).map((uid) => {
        const title = data[uid].title;
        const id = uid;
        const releaseDate = data[uid].releaseDate;
        const openingText = data[uid].openingText;

        return {
          title: title,
          id: id,
          releaseDate: releaseDate,
          openingText: openingText,
        };
      });
      setMoviesData(transformedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  const addMovieHandler = async (movie) => {
    try {
      const response = await fetch(
        'https://react-http-b17ed-default-rtdb.firebaseio.com/movie.json',
        {
          method: 'POST',
          body: JSON.stringify(movie),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const data = await response.json();
      console.log(data);

      if (!response.ok) {
        throw new Error('Could not create data');
      }

      fetchMoviesHandler();
    } catch (error) {}
  };

  let content = <div>No movies found !</div>;
  if (moviesData.length > 0) {
    content = <MoviesList movies={moviesData} />;
  }
  if (error) {
    content = <div>{error}</div>;
  }

  if (!isLoading && moviesData.length === 0 && !error) {
    content = <div>No movies found !</div>;
  }

  if (isLoading) {
    content = <div>Loading...</div>;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
