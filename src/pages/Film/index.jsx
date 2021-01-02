import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';

import { FiChevronLeft } from 'react-icons/fi';

import { Link } from 'react-router-dom';

import { Header, FilmInfo, Container } from './styles';

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
    <>
      <Container>

        <Header>
          <h1>Film Explorer</h1>
          <Link to="/">
            Voltar
          <FiChevronLeft />
          </Link>
        </Header>
        {film.map(f => (
          <FilmInfo>
            <header>
              <img
                src={f.Poster}
                alt="" />
              <div>
                <strong>{f.Title}</strong>
                <p>{f.Genre}</p>
              </div>
            </header>
            <ul>
              <li>
                <strong>{f.Ratings[0].Value}</strong>
                <span>Rating</span>
              </li>
              <li>
                <strong>{f.imdbVotes}</strong>
                <span>IMDB Votes</span>
              </li>
              <li>
                <strong>{f.Year}</strong>
                <span>Year</span>
              </li>
            </ul>
          </FilmInfo>
        ))}

      </Container>

    </>


  )
}

export default Film;