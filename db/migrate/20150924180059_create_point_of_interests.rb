class CreatePointOfInterests < ActiveRecord::Migration
  def change
    create_table :point_of_interests do |t|
      t.string :name
      t.string :address
      t.decimal :latitude
      t.decimal :longitude

      t.timestamps null: false
    end
  end
end
