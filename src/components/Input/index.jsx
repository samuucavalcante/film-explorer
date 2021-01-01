import React from 'react';

import { FiSearch } from 'react-icons/fi';

import { Container } from './styles'

const Input = ({ ...rest }) => {
  return (
    <Container>
      <FiSearch size={20} color="gray" />
      <input
        {...rest}
        
        type="text"
      />
    </Container>
  )
}

export default Input;