class Api::UsersController < ApplicationController
  def create
    @user = User.create(user_params)
    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: ["Unable to sign up with provided credentials"], status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
