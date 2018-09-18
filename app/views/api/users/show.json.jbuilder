json.extract! @user, :id, :username
json.set! :portfolioId, @user.portfolios.first.id
