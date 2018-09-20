export const addToWatchlist = (id) => {
  return $.ajax({
    method: "POST",
    url: "/api/watchlists/",
    data: { watchlist: { asset_id: id } },
  });
};

export const removeFromWatchlist = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/watchlists/${id}`,
  });
};
