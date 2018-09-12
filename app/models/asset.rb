class Asset < ApplicationRecord
  validates :symbol, :open, :close, presence: true
end
