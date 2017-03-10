
import { fromJS } from 'immutable';
import sellPageReducer from '../reducer';

describe('sellPageReducer', () => {
  it('returns the initial state', () => {
    expect(sellPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
