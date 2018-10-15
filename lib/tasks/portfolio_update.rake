# TODO: Add check for day of week to prevent running on weekends
task :portfolio_update => :environment do
  Portfolio.all.each do |portfolio|
    current_date = DateTime.now.strftime("%Y-%m-%d")
    current_value = portfolio.buying_power
    asset_ids = portfolio.holdings.keys
    assets = Asset.find(asset_ids)

    assets.each do |asset|
      quote = IEX::Resources::Quote.get("#{asset.symbol.downcase}")
      latest_price = quote.latest_price
      current_value += portfolio.holdings[asset.id.to_s]["position"] * latest_price
    end

    new_history = portfolio.history << { "label" => current_date, "close" => current_value }
    portfolio.update(history: new_history)
  end
end
