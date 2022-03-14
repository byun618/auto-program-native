import styled from '@emotion/native'
import React from 'react'
import { Text } from 'react-native'

const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const Setting: React.FC = () => {
  return (
    <Wrapper>
      <Text>Setting!</Text>
    </Wrapper>
  )
}

export default Setting
