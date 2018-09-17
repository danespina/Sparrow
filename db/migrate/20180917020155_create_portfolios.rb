class CreatePortfolios < ActiveRecord::Migration[5.2]
  def change
    create_table :portfolios do |t|
      t.integer :user_id, null: false
      t.json :holdings
      t.json :history
      t.float :buying_power, null: false

      t.timestamps
    end
  end
end
