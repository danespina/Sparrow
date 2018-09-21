json.extract! @asset, :id, :symbol, :name, :employees, :headquarters, :founded
json.set! :key, ENV['NEWS_API_KEY']
