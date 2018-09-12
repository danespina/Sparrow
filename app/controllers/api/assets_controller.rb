class Api::AssetsController < ApplicationController
  def show
    @asset = Asset.find(params[:id])
  end

  private
  def asset_params
    params.require(:asset).permit(:symbol)
  end
end
