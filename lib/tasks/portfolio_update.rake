task :portfolio_update => :environment do
  Portfolio.each do |portfolio|
    current_date = DateTime.now.strftime("%Y-%m-%d")
    current_value = portfolio.buying_power
    asset_ids = portfolio.holdings.keys
    assets = Asset.find(asset_ids)
    assets.each do |asset|
      quote = IEX::Resources::Quote.get('asset.symbol')
      latest_price = quote.latest_price
      current_value += portfolio.holdings[asset.id]["position"] * latest_price
    end
    portfolio.history << { "label" : current_date, "close" : current_value }
  end
end
