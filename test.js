const fun1 = () => {
  newArr = [];
  for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
      newArr.push(i);
    }
  }
  return newArr;
};
