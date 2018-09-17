json.extract! @asset, :id, :symbol, :name
json.set! :key, ENV['NEWS_API_KEY']
