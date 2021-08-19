export const getUpComingMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1`
    );
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  };


export const getMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=4 `
  );
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  console.log(response);
  const ans =response.json();
  console.log(ans);
  return ans
};
  
export const getMovie = async ( args ) => {
  // eslint-disable-next-line no-unused-vars
  const [prefix, { id }] = args.queryKey;
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
  );
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};


  
  export const getGenres = async () => {
    const response = await  fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
        process.env.REACT_APP_TMDB_KEY +
        "&language=en-US"
    )
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  };
  
  export const getMovieImages = async ({queryKey}) => {
    // eslint-disable-next-line no-unused-vars
    const [prefix, { id }] = queryKey;
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  };

  export const getMovieReviews = (id) => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then((res) => res.json())
      .then((json) => {
         console.log(json.results);
        return json.results;
      });
  };

  export const getKidsMovies= async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&certification_country=US&certification=PG&sort_by=popularity.desc`
      );
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    };

    /**
    ***********************Tv Shows ***********************************
     */

     export const getTvShow = async ( args ) => {
  // eslint-disable-next-line no-unused-vars
  const [prefix, { id }] = args.queryKey;
  const response = await fetch(
    `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
  );
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};

    export const getTvShows = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
  );
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};

export const getMostPopularTvShows = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_TMDB_KEY}&vote_average.gte=8`
  );
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};

export const getKidsTvShows = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_TMDB_KEY}&genre_names=Sci-Fi %26 Fantasy&%26certification_country=US&page=1`
  );
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};

    export const getTvShowImages = async ({queryKey}) => {
    // eslint-disable-next-line no-unused-vars
    const [prefix, { id }] = queryKey;
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  };


    export const getTvShowReviews = (id) => {
      return fetch(
        `https://api.themoviedb.org/3/tv/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
      )
        .then((res) => res.json())
        .then((json) => {
         console.log(json.results);
          return json.results;
        });
    };
  
 /**
 **********People************
 * */ 

 export const getPeople = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
  );
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  console.log(response)
  return response.json();
}; 

export const getPerson = async ( args ) => {
  // eslint-disable-next-line no-unused-vars
  const [prefix, { id }] = args.queryKey;
  const response = await fetch(
    `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
  );
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};

export const getPeopleImages = async ({queryKey}) => {
    // eslint-disable-next-line no-unused-vars
    const [prefix, { id }] = queryKey;
    const response = await fetch(
      `https://api.themoviedb.org/3/person/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
};
/**
https://api.themoviedb.org/3/person/popular?api_key=0ac4bad22dc293db80db061a506a35f2&gender/1
this will get all females
 */

export const getGender = async () => {
    const response = await  fetch(
      "https://api.themoviedb.org/3/gendre/person/list?api_key=" +
        process.env.REACT_APP_TMDB_KEY +
        "&language=en-US"
    )
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  };