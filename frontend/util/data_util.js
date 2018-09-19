export const cleanIncoming = (arr) => {
  let lastVals = arr.map((el) => {
    return el.close;
  });
  for (let i = lastVals.length; i >= 0; i--) {
    if (!lastVals[i]) {
      let j = i;
      while (!lastVals[j] && j > 0) {
        j--;
      }
      lastVals[i] = lastVals[j];
    }
  }
  return arr.map((el, idx) => {
    return {label: el.label, close: lastVals[idx]};
  });
};
