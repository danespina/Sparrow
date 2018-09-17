class Api::TradesController < ApplicationController
  def create
    @trade = Trade.create(trade_params)
    if @trade.save
      cur_portfolio = Portfolio.find(trade_params[:user_id])
      if cur_portfolio.holdings[trade_params[:asset_id].to_s]
        cur_record = cur_portfolio.holdings[trade_params[:asset_id].to_s]
        cur_portfolio.holdings[trade_params[:asset_id].to_s] = {
          asset_id: trade_params[:asset_id],
          position: trade_params[:position] + cur_record["position"],
          avg_price: (trade_params[:position] * trade_params[:avg_price].to_f
            + cur_record["position"] * cur_record["avg_price"].to_f) / (trade_params[:position] + cur_record["position"])
        }
      else
        cur_portfolio.holdings[trade_params[:asset_id].to_s] = {
          asset_id: trade_params[:asset_id],
          position: trade_params[:position],
          avg_price: trade_params[:avg_price]
        }
      end
      cur_portfolio.save
      render json: {}
    else
      render json: @trade.errors.full_messages, status: 422
    end
  end

  private
  def trade_params
    params.require(:trade).permit(:user_id, :asset_id, :position, :avg_price)
  end
end
