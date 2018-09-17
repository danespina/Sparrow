class Portfolio < ApplicationRecord
  before_validation :ensure_buying_power
  validates :user_id, :buying_power, presence: true

  belongs_to :user

  private
  def ensure_buying_power
    self.buying_power ||= 100000
  end
end
