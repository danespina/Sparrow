export const getExternalInfo = (requestType, asset) => {
  // debugger
  return $.ajax({
    method: "GET",
    url: `https://api.iextrading.com/1.0/stock/${asset.symbol}/${requestType}`,
  });
};

export const fetchAsset = (id) => {
  return $.ajax({
    method: "GET",
    url: `/api/assets/${id}`,
  });
};
