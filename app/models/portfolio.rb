class Portfolio < ApplicationRecord
  before_validation :ensure_buying_power, :ensure_holdings, :ensure_history
  validates :user_id, :buying_power, presence: true

  belongs_to :user

  private
  def ensure_buying_power
    self.buying_power ||= 100000
  end

  def ensure_holdings
    self.holdings ||= {}
  end

  def ensure_history
    self.history ||= []
  end
end
