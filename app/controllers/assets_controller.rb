class AssetsController < ApplicationController
  def search
    if params[:query].present?
      @assets = Asset.where('symbol ~ ? OR name ~ ?', params[:query], params[:query]).limit(10)
    else
      @assets = Asset.none
    end
    render :search
  end
end
