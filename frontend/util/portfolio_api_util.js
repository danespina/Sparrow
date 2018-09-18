export const fetchPortfolio = (id) => {
  return $.ajax({
    method: "GET",
    url: `/api/portfolios/${id}`,
  });
};
