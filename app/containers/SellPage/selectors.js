import { createSelector } from 'reselect';

/**
 * Direct selector to the sellPage state domain
 */
const selectSellPageDomain = () => (state) => state.get('sellPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SellPage
 */

const makeSelectSellPage = () => createSelector(
  selectSellPageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectSellPage;
export {
  selectSellPageDomain,
};
