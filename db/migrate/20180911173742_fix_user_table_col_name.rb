class FixUserTableColName < ActiveRecord::Migration[5.2]
  def change
    rename_column :users, :session_tokekn, :session_token
  end
end
