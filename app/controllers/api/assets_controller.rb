class Api::AssetsController < ApplicationController
  def show
    @asset = Asset.find(params[:id])
  end

  def index
    @assets = Asset.all
  end

  def create
    @asset = Asset.create(asset_params)
    if @asset.save
      render :show
    else
      render json: @asset.errors.full_messages, status: 422
    end
  end

  private
  def asset_params
    params.require(:asset).permit(:symbol, :open, :close)
  end
end
