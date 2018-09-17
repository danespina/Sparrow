class CreateTrades < ActiveRecord::Migration[5.2]
  def change
    create_table :trades do |t|
      t.integer :user_id, null: false
      t.integer :asset_id, null: false
      t.integer :position, null: false
      t.float :avg_price, null: false

      t.timestamps
    end
  end
end
