import {expect, assert} from 'chai';
import {List, Map} from "immutable"

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

  //List: Array

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


  //Map: Object
  describe('a tree', () => {
    function addMovie(currentState, movie) {
      //Map with update:
      return currentState.update('movies', movies => movies.push(movie));

      //Map with get:
      //return currentState.set(
      //'movies',
      // currentState.get('movies').push(movie)
      //);
    }

    it('is immutable', () => {
      let state = Map({
        movies: List.of('Trainspotting', '28 Days Later')
      });
      let nextState = addMovie(state, "Sunshine");

      expect(nextState).to.equal(Map({
        movies: List.of(
          'Trainspotting',
          '28 Days Later',
          'Sunshine'
        )
      }));
      expect(state).to.equal(Map({
        movies: List.of(
          'Trainspotting',
          '28 Days Later'
        )
      }));
    });
  });

  describe('Array', () => {
    it('should start empty', () => {
      let arr = [];

      assert.equal(arr.length, 0);
    });

    it('should be 1', () => {
      let array = ["testing"];

      expect(array.length).to.equal(1, 'Should equal to one');

    });
  });
// });

describe('Names', () => {
  it('should return new value of John', () => {
    let person = Map({
      firstName: 'Thomas'
    });
    //Original value
    // expect(person.get('firstName')).to.equal('Thomas');

    //New value
    person = person.set("firstName", "John")

    expect(person.get('firstName')).to.equal('John', 'This is the new immutable value');
  });
});

});
