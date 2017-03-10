/*
 *
 * AccountPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import makeSelectAccountPage from './selectors';
import H1 from 'components/H1';

export class AccountPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="AccountPage"
          meta={[
            { name: 'description', content: 'Description of AccountPage' },
          ]}
        />
        <H1>Account Page</H1>
      </div>
    );
  }
}

AccountPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  AccountPage: makeSelectAccountPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountPage);
