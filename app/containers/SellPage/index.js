/*
 *
 * SellPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import makeSelectSellPage from './selectors';
import H1 from 'components/H1';

export class SellPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="SellPage"
          meta={[
            { name: 'description', content: 'Description of SellPage' },
          ]}
        />
        <H1>Sell Page</H1>
      </div>
    );
  }
}

SellPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  SellPage: makeSelectSellPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SellPage);
