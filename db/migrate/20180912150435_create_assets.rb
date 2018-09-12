class CreateAssets < ActiveRecord::Migration[5.2]
  def change
    create_table :assets do |t|
      t.string :symbol, null: false
      t.float :open, null: false
      t.float :close, null: false

      t.timestamps
    end
  end
end
