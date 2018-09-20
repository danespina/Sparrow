class Watchlist < ApplicationRecord
  validates :user_id, :asset_id, presence: true

  belongs_to :user

  belongs_to :asset
end
