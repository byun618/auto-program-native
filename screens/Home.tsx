import styled from '@emotion/native'
import React from 'react'
import { Text } from 'react-native'

const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const Home: React.FC = () => {
  return (
    <Wrapper>
      <Text>Home!</Text>
    </Wrapper>
  )
}

export default Home
