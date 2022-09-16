class AddColumnsToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :display_name, :string
    add_column :users, :profile_img_url, :string
    add_column :users, :spotify_id, :string
    add_column :users, :spotify_url, :string
    add_column :users, :access_token, :string
    add_column :users, :refresh_token, :string
    add_column :users, :email, :string 
  end
end
