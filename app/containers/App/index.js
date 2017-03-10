/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Header from 'components/Header';
import withProgressBar from 'components/ProgressBar';

const AppContainer = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  padding: 0 16px;
`;

const AppWrapper = styled.div`
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

export function App(props) {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - Flight Club Listings"
        defaultTitle="Flight Club Consignment Application"
        meta={[
          { name: 'description', content: 'A place to list shoes on Flight Club' },
        ]}
      />
      <Header />
      <AppContainer>
      {React.Children.toArray(props.children)}
     </AppContainer>
    </AppWrapper>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default withProgressBar(App);
