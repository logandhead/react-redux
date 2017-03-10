import { Link } from 'react-router';
import styled from 'styled-components';

export default styled(Link)`
  display: inline-block;
  padding: .50em 3em;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  border: 2px solid #41ADDD;
  color: #41ADDD;
  width: 33.3333%;
  &:active {
    background: #41ADDD;
    color: #FFF;
  }
`;
