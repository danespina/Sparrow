@assets.each do |asset|
  json.set! asset.id do
    json.extract! asset, :id, :symbol
  end
end
