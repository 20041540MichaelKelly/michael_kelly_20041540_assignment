import { useEffect, useState } from "react";
import {getTvShow} from '../api/tmdb-api'

const useTvShow = id => {
  const [show, setTvShow] = useState(null);
  useEffect(() => {
    getTvShow(id).then(show => {
      setTvShow(show);
    });
  }, [id]);
  return [show, setTvShow];
};

export default useTvShow