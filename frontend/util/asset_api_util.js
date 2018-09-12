export const getQuote = (asset) => {
  // debugger
  return $.ajax({
    method: "GET",
    url: `https://api.iextrading.com/1.0/stock/${asset.symbol}/quote`,
  });
};

export const fetchAsset = (id) => {
  return $.ajax({
    method: "GET",
    url: `/api/assets/${id}`,
  });
};
