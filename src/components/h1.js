import React from 'react'
import styled from 'styled-components';

const H1 = styled.h1`
  margin-bottom: 1.45rem;
  grid-column: 2 / 3;
  grid-row: 2;
`;

const H1Component = ({ children }) => (
  <H1>{children}</H1>
)

export default H1Component;
