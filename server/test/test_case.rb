require "rack/test"
require "test/unit"

ENV["RACK_ENV"] = "test"

class HikeAppTestCase < Test::Unit::TestCase
	include Rack::Test::Methods

	def app
		HikeApp
	end

	def run(*args, &block)
		result = nil
		Sequel::Model.db.transaction(:rollback => :always){ result = super }
		result
	end

	def set_admin_cookie
		set_cookie "user_id=#{Digest::SHA1.hexdigest(User.first.id)}"
	end

	def get_basic_hike_json
		{
			"name" => "New Name",
			"locality" => "New Locality",
			"distance" => 123,
			"elevation_max" => 1234,
			"location" => {
				"latitude" => 12,
				"longitude" => 12
			}
		}
	end
end