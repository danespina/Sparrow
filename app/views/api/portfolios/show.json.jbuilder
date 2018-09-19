json.extract! @portfolio, :id, :user_id, :buying_power, :holdings, :history

json.set! :assetInfo do
  Asset.find_each do |ass|
    json.set! ass.id, {id: ass[:id], symbol: ass[:symbol]} if @portfolio.holdings.keys.include?(ass.id.to_s)
  end
end
