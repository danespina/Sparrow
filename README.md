# README

# Welcome to Sparrow!

[Sparrow](http://sparrow-app.herokuapp.com/#/) is a single page online brokerage web application clone of [Robinhood](https://robinhood.com/).  Its features include user portfolios and watchlist, buying and selling of stocks, real-time stock prices, up to the minute news, and detailed company information. Stock prices and information is sourced from the [IEX Group API](https://iextrading.com/) and news is sourced from [News API](https://newsapi.org/).

## Technologies
Sparrow was made using a Ruby on Rails back-end that utilizes a Postgresql database and a React/Redux front-end.

## Key Features

### User Portfolios
Visitors can sign up, log in, or view a demo account from links on the landing page.  Once signed in, a user will see an interactive chart of their portfolio history above a news feed.  To the right, a container displays the user's current holdings and watched stocks.

### Holdings and Watchlist
Users can modify their holdings through buying and selling.  Forms to do so are located on the side of the asset show page.  Upon creation of a trade, validation occurs on both the front-end and back-end.
The back-end validation, handled by the Trades Controller, ensures that the user has the requisite buying power before persisting the trade to the database.  The front-end validation, handled by the Trades Reducer, does the same buying power calculation on the client side to prevent unnecessary load times.  This allows the user to immediately perform a search or place another trade, ensuring a smooth, seamless user experience.
Watchlists can be modified using interactive buttons on each asset's page.  When an asset is on a user's watchlist, an element on the portfolio page shows the asset's symbol, 1 day chart, and latest price.

### Stock Information
Asset information is enhanced by AJAX calls to the [IEX Group API](https://iextrading.com/) and [News API](https://newsapi.org/).  The responsive, interactive chart is rendered using the Recharts library.  Users can change the time scale below the chart, ranging in options from one day to two years.  Below the chart, company information is displayed.  The amount of information shown can be toggled by a button above the company description.  Below this, different tags are shown.  Clicking these will take the user to a list of assets matching the given tag.

### Search
Users can search for any of the 8600 assets through the embedded search bar at the top of the page.  Searches can be performed by company name or symbol.  The search feature leverages ActiveRecord and PostgreSQL to efficiently query and display data from these 8600 rows, reducing load times and improving scalability.  Results are displayed instantly in a dropdown list of links to each asset's information page.

[Visit the live website!](http://sparrow-app.herokuapp.com/#/)
