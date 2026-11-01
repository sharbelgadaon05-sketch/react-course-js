export const getDirectorLine = movie => `Director:${movie.director.name}`;

export const getShortMovies = movies =>
  movies.filter(movie => 
    movie.duration < 100
  );

export const findByTitle = (movies, title) =>
  movies.find(movie => movie.title === title);


export const getOscarsLine = movie =>
  `Oscars: ${movie.awards?.oscars ?? 0}`;

export const sortByYear = movies => [...movies].sort((a, b) => a.year - b.year);

export const markAsWatched = (movies, id) => {
  return movies.map(movie => {
    if (movie.id === id) {
      return {
        ...movie,
        watched: true
      };
    }
    return movie;
  });
};

export const renameActor = (movie, index, newName) => {
  const copy = { ...movie };
  copy.cast[index].name = newName;
  return copy;
};