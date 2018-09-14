# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = User.create({username: "Demo", email: "Demo", password: "123456"})

assets = Asset.create([{symbol: "DIS", open: 109.25, close: 109.60}, {symbol: "FB", open: 161.72, close: 161.36}, {symbol: "SPOT", open: 185, close: 184.75}])
