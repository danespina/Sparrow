class AddIndexToMultipleTables < ActiveRecord::Migration[5.2]
  def change
    add_index :users, :username
    add_index :users, :email
    add_index :users, :session_token

    add_index :assets, :symbol
    add_index :assets, :name
  end
end
