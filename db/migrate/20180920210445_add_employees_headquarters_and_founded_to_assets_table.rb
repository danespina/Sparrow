class AddEmployeesHeadquartersAndFoundedToAssetsTable < ActiveRecord::Migration[5.2]
  def change
    change_table :assets do |t|
      t.column :headquarters, :string, null: false
      t.column :employees, :integer, null: false
      t.column :founded, :integer, null: false
    end
  end
end
