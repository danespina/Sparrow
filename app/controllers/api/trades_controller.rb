class Api::TradesController < ApplicationController
  //# TODO: fix this
  def create
    @trade = Trade.create(trade_params)
    @trade[:user_id] = current_user.id

    trade_cost = trade_params[:position].to_f * trade_params[:avg_price].to_f
    cur_portfolio = Portfolio.find_by(user_id: @trade.user_id)

    if cur_portfolio.buying_power < trade_cost
      render json: ["Not enough buying power"], status: 422
      return
    end

    if @trade.save
      if cur_portfolio.holdings[trade_params[:asset_id].to_s]
        cur_record = cur_portfolio.holdings[trade_params[:asset_id].to_s]
        new_pos = trade_params[:position].to_i + cur_record["position"].to_i
        old_price = trade_params[:position].to_f * trade_params[:avg_price].to_f
        new_price = old_price + cur_record["position"].to_f * cur_record["avg_price"].to_f

        cur_portfolio.holdings[trade_params[:asset_id].to_s] = {
          asset_id: trade_params[:asset_id].to_i,
          position: new_pos,
          avg_price: (new_price / new_pos)
        }
      else
        cur_portfolio.holdings[trade_params[:asset_id].to_s] = {
          asset_id: trade_params[:asset_id].to_i,
          position: trade_params[:position].to_i,
          avg_price: trade_params[:avg_price].to_f
        }
      end
      cur_portfolio.buying_power -= trade_cost
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
