'use strict';

const mergeSortMutate = (items) => {

  let output = [];

  if(items.length < 2)
    return items;

  if(items.length === 2)
    return items[0] < items[1] ? items : items.reverse();

  let middle = Math.floor(items.length / 2);
  console.log(middle);
  let leftSide = mergeSortMutate(items.slice(0, middle));
  console.log('leftside: ', leftSide);
  let rightSide = mergeSortMutate(items.slice(middle));
  console.log('right side: ', rightSide);

  while(leftSide.length || rightSide.length){

    if(leftSide.length && !rightSide.length){
      // return items = items.push(leftSide);
      output = output.concat(leftSide);
      console.log('output only left side length', output);
      break;
    }

    if(!leftSide.length && rightSide.length){
      // return items = items.push(rightSide);
      output = output.concat(rightSide);
      console.log('output only right side length', output);
      break;
    }

    if(leftSide[0] <= rightSide[0])
      output.push(leftSide.shift());
    else
      output.push(rightSide.shift());
  }
  return output;
};

module.exports = mergeSortMutate;
