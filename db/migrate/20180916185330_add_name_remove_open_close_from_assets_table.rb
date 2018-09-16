class AddNameRemoveOpenCloseFromAssetsTable < ActiveRecord::Migration[5.2]
  def change
    change_table :assets do |t|
      t.remove :open, :close
      t.column :name, :string, null: false
    end
  end
end
