import React from 'react';
import styled from 'styled-components';

const DailyDogContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

function DailyDog(props) {
  return (
    <DailyDogContainer>
      <h1>데일리독</h1>
    </DailyDogContainer>
  );
}

export default DailyDog;