json.extract! @user, :id, :username
json.set! :portfolioId, @user.portfolios.first.id
json.set! :watchlist do
  Asset.find_each do |ass|
    json.set! ass.id, {id: ass[:id], symbol: ass[:symbol]} if @user.watchlists.map{ |el| el.asset_id }.include?(ass.id)
  end
end
