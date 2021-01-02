import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';

import { Container } from './styles';

const Film = () => {
  const [film, setFilme] = useState([]);



  const { params } = useRouteMatch(null);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=938c5de9&t=${params.filmid}`).then(response => {
      return response.json()
    }).then(data => {
      setFilme([data]);
    })
  }, [params.filmid])

  return (
    <Container>
      {film.map(algo => (
        <h1 key={algo.imdbID} >{algo.Title}</h1>
      ))}
    </Container>
  )
}

export default Film;