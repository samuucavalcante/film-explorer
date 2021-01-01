import React, { useState, useEffect, useCallback } from 'react';

import { Container, Search, List } from './styles';

import Input from '../../components/Input';



const Dashboard = () => {
  const [input, setInput] = useState('');
  const [filmes, setFilmes] = useState([])

  useEffect(() => {
    async function date() {
      try {
        
        const inputConfig = input.trim()
        const response = await fetch(`http://www.omdbapi.com/?apikey=938c5de9&s="${inputConfig}"`)
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
              <div className="wrap-image">
                <img src={film.Poster} alt="This film has no image" />
              </div>
              <div className="wrap-description">
                <h3>{film.Title}</h3>
                <p>{film.Year}</p>
                <span>{film.Type}</span>
              </div>
            </li>
          ))}
      </List>


    </Container>
  )
}

export default Dashboard;