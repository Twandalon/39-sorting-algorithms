'use strict';

const mergeSortMutate = (items) => {

  if(items.length < 2)
    return items;

  if(items.length === 2)
    return items[0] < items[1] ? items : items.reverse();

  let middle = Math.floor(items.length / 2);
  console.log(middle);
  let leftSide = mergeSortMutate(items.splice(0, middle));
  console.log('leftside: ', leftSide);
  let rightSide = mergeSortMutate(items.splice(0));
  console.log('right side: ', rightSide);

  while(leftSide.length || rightSide.length){

    if(leftSide.length && !rightSide.length){
      items.push(...leftSide);
      break;
    }

    if(!leftSide.length && rightSide.length){
      items.push(...rightSide);
      console.log('items: ', items);
      break;
    }

    if(leftSide[0] <= rightSide[0])
      items.push(leftSide.shift());
    else
      items.push(rightSide.shift());
  }
  return items;
};

module.exports = mergeSortMutate;
