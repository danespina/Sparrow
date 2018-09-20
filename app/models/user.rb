class User < ApplicationRecord
  before_validation :ensure_session_token
  after_create :ensure_portfolio
  validates :username, :email, :password_digest, :session_token, presence: true
  validates :username, :email, uniqueness: true
  validates :password, length:{ minimum: 6 }, allow_nil: true

  attr_reader :password

  has_many :portfolios, dependent: :destroy
  has_many :trades, dependent: :destroy
  has_many :watchlists, dependent: :destroy

  def self.find_by_credentials(username, password)
    user_by_username = User.find_by(username: username)
    user_by_email = User.find_by(email: username)
    if user_by_username && user_by_username.is_password?(password)
      return user_by_username
    elsif user_by_email && user_by_email.is_password?(password)
      return user_by_email
    else
      return nil
    end
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  private

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def ensure_portfolio
    Portfolio.create(user_id: self.id)
  end


end
