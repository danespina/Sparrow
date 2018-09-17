class Api::PortfoliosController < ApplicationController
  def show
    @portfolio = Portfolio.find(params[:id])
  end

  def create
    @portfolio = Portfolio.create(current_user.id)
    if @portfolio.save
      render json: {}
    else
      render json: @portfolio.errors.full_messages, status: 422
    end
  end

  def update
    @portfolio = Portfolio.find(params[:id])
    if @portfolio.update(portfolio_params)
      render json: {}
    else
      render json: @portfolio.errors.full_messages, status: 422
    end
  end

  private
  def portfolio_params
    params.require(:portfolio).permit(:holdings, :history)
  end
end
