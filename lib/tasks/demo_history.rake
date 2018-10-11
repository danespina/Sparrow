task :demo_history => :environment do
  current_value = 20500
  date = (DateTime.now - 2.years)
  today = DateTime.now.strftime("%Y-%m-%d")
  new_history = []
  while (date.strftime("%Y-%m-%d") != today || new_history.length < 100)
    current_value += (current_value * ((0.01 + 0.005) * rand - 0.005))
    label_date = date.strftime("%Y-%m-%d")
    history_value = current_value.round(2)
    new_history << { "label" => label_date, "close" => history_value }
    date += 1.days
  end
  User.find_by(username: "Demo").portfolios.first.update(history: new_history)
end
