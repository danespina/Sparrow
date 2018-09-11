class ApplicationController < ActionController::Base

  helper_method :current_user, :logged_in?, :logout

  def current_user
    user = User.find_by(session_token: session[:session_token])
    return user if user
  end

  def logged_in?
    !!current_user
  end

  def login(user)
    session[:session_token] = user.session_token
  end

  def logout
    session[:session_token] = nil
    current_user.reset_session_token!
  end
end
