class Trade < ApplicationRecord
  validates :user_id, :asset_id, :position, :avg_price, presence: true

  belongs_to :user

  belongs_to :asset
end
