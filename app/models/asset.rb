class Asset < ApplicationRecord
  validates :symbol, :name, presence: true
  validates :symbol, uniqueness: true
end
