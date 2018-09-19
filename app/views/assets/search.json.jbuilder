json.array!(@assets) do |asset|
  json.(asset, *Asset.column_names)
end
