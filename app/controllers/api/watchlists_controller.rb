class Api::WatchlistsController < ApplicationController
  def create
    @watchlist = Watchlist.create(watchlist_params)
    @watchlist[:user_id] = current_user.id

    if @watchlist.save
      render json: {id: @watchlist.asset_id, symbol: @watchlist.asset.symbol }
    else
      render json: @watchlist.errors.full_messages, status: 422
    end
  end

  def destroy
    @watchlist = Watchlist.find_by({user_id: current_user.id, asset_id: params[:id]})
    @watchlist.destroy!
    render json: {id: @watchlist.asset_id}
  end

  private
  def watchlist_params
    params.require(:watchlist).permit([:asset_id])
  end
end
