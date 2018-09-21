class AssetsController < ApplicationController
  def search
    if params[:query].present?
      @assets = Asset.where('symbol ~ ?', params[:query].upcase).or(Asset.where('lower(name) ~ ?', params[:query].downcase)).limit(10)
    else
      @assets = Asset.none
    end
    render :search
  end
end
