export const getCreators = (array) => {
  const finalized = [];

  const result = array.reduce((res, currentValue) => {
    (res[currentValue.seller] = res[currentValue.seller] || []).push(currentValue);

    return res;
  }, {});

  Object.entries(result).forEach((itm) => {
    const seller = itm[0];
    const sumall = itm[1].map((item) => Number(item.price)).reduce((prev, curr) => prev + curr, 0);

    finalized.push({ seller, sumall });
  });

  return finalized;
};
