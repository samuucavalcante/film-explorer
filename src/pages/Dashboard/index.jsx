import React, { useState, useEffect } from 'react';

import { Container, Search, List, Popular } from './styles';

import Input from '../../components/Input';

import { Link } from 'react-router-dom';



const Dashboard = () => {
  const [input, setInput] = useState('');
  const [filmes, setFilmes] = useState([])

  useEffect(() => {
    setTimeout(() => {
    async function date() {
        
      try {
        
        const inputConfig = input.trim()
        const response = await fetch(`https://www.omdbapi.com/?apikey=938c5de9&s="${inputConfig}"`)
        const data = await response.json()
        if (!response) {
          setFilmes([])

        } else {
          setFilmes([...data.Search]);
        }
        return 0;
      }
      catch (err) {
        setFilmes([])

        return 0;
      }

    }
    date()
  }, 500);

  }, [input])



  return (
    <Container>
      <h1>Film Explorer</h1>
      <Search>
        <Input
          onChange={e => setInput(e.target.value)}
          placeholder="Type some movie"
        />
      </Search>
      <List>
        {filmes.filter(f => {
          return f.Title.toLowerCase().slice('').match(input.toLowerCase().slice(''))
        })
          .map(film => (
            <li key={film.imdbID} >
              <Link to={`film/${film.Title}`}>
                <div className="wrap-img">
                  <img src={film.Poster} alt="This film has no imagem" />
                </div>
                <div className="wrap-description">
                  <h3 href="/" >{film.Title}</h3>
                  <p>{film.Year}</p>
                  <span>{film.Type}</span>
                </div>
              </Link>
            </li>
          ))}
       

      </List>


    </Container>
  )
}

export default Dashboard;