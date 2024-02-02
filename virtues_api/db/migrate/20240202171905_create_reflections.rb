class CreateReflections < ActiveRecord::Migration[7.0]
  def change
    create_table :reflections do |t|
      t.integer :user_id
      t.integer :week_number

      t.timestamps
    end
  end
end
