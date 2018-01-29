'use strict';

const mergeSortMutate = require('../merge-sort-mutate');


describe('testing quick sort', () => {
  test('testing quick sort', () => {
    let testArray = [3,5,1,7,8,9];

    console.log(mergeSortMutate(testArray));

  });
});
