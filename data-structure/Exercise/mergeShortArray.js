const mergeShortArray = (arr1, arr2) => {
  const mergedArray = [];
  let array1Item = arr1[0];
  let array2Item = arr2[0];

  if (arr1.length === 0) {
    return arr2;
  }
  if (arr2.length === 0) {
    return arr1;
  }
  let i = 1;
  let j = 1;
  while (array1Item || array2Item) {
    if (!array2Item || array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = arr1[i];
      i++;
    } else {
      mergedArray.push(array2Item);
      array2Item = arr2[j];
      j++;
    }
  }
  console.log(mergedArray);
};

const mergeShortArray2 = (arr1, arr2) => {
  if (arr1.length === 0) {
    return arr2;
  }
  if (arr2.length === 0) {
    return arr1;
  }
  const data = [...arr1, ...arr2].sort((a, b) => a - b);
  console.log(data);
};

mergeShortArray2([0, 3, 4, 31], [4, 6, 30]);