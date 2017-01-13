import {expect} from 'chai';
import {List} from "immutable"

describe('immutability', () => {

  describe('a number plus 1', () => {

    function increment(currentState) {
      return currentState + 1;
    }

    it('is immutable', () => {
      //Test implementation
      let state = 42;
      let nextState = increment(state);

      expect(nextState).to.equal(43);
      expect(state).to.equal(42);
    });
  });

  describe("A List", () => {

    function addMovie(currentState, movie) {
      return currentState.push(movie);
    }
    it('is immutable', () => {
      let state = List.of('Trainspotting', "28 Days Later");  //Array
      let nextState = addMovie(state, 'Sunshine');

      expect(nextState).to.equal(List.of(
        'Trainspotting',
        '28 Days Later',
        'Sunshine'
      ));

      expect(state).to.equal(List.of(
        'Trainspotting',
        '28 Days Later'
      ));
    });

  });

});
