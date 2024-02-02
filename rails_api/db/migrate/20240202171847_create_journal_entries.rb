class CreateJournalEntries < ActiveRecord::Migration[7.0]
  def change
    create_table :journal_entries do |t|
      t.integer :user_id
      t.integer :virtue_id

      t.timestamps
    end
  end
end
