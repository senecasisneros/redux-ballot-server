import {Map, fromJS} from 'immutable';
import {expect} from 'chai';

import makeStore from '../src/store';

describe('store', () => {

  it('is a Redux store configured with the correct reducer', () => {
    //Make a store
    //Read its initial state
    const store = makeStore();
    expect(store.getState()).to.equal(Map());

    //Dispatch action, and witness the changed state
    store.dispatch({
      type: "SET_ENTRIES",
      entries: ["Trainspotting", "28 Days Later"]
    });
    expect(store.getState()).to.equal(fromJS({
      entries: ['Trainspotting', '28 Days Later']
    }));
  });

});
