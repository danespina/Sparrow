export const getExternalInfo = (requestType, asset) => {
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

export const fetchAssets = () => {
  return $.ajax({
    method: "GET",
    url: "/api/assets",
  });
};

export const getQuote = (sym) => {
  return $.ajax({
    method: "GET",
    url: `https://api.iextrading.com/1.0/stock/${sym}/quote`,
  });
};

// export const createAsset = (sym) => {
//   console.log(`making ${sym}!`);
//   getQuote(sym).then((quote) => {
//     const asset = { symbol: sym, open: quote.open, close: quote.close };
//     return $.ajax({
//       method: "POST",
//       url: "/api/assets",
//       data: { asset },
//     });
//   });
// };

export const createAsset = (asset) => {
  return $.ajax({
    method: "POST",
    url: "/api/assets",
    data: { asset },
  });
};
