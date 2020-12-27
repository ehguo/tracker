import React from 'react';
import styled from '@emotion/styled'
import GenshinTracker from './GenshinTracker'

const AppContainer = styled.div`
  display: grid;
  place-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #222222;
  color: #ededed;
`;

const App = () => {
  return (
    <AppContainer>
      <GenshinTracker />
    </AppContainer>
  );
}

export default App;
