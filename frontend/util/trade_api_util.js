export const makeTrade = (trade) => {
  return $.ajax({
    method: "POST",
    url: "/api/trades",
    data: { trade },
  });
};
