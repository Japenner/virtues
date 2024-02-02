require "test_helper"

class VirtuesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @virtue = virtues(:one)
  end

  test "should get index" do
    get virtues_url, as: :json
    assert_response :success
  end

  test "should create virtue" do
    assert_difference("Virtue.count") do
      post virtues_url, params: { virtue: { description: @virtue.description, name: @virtue.name } }, as: :json
    end

    assert_response :created
  end

  test "should show virtue" do
    get virtue_url(@virtue), as: :json
    assert_response :success
  end

  test "should update virtue" do
    patch virtue_url(@virtue), params: { virtue: { description: @virtue.description, name: @virtue.name } }, as: :json
    assert_response :success
  end

  test "should destroy virtue" do
    assert_difference("Virtue.count", -1) do
      delete virtue_url(@virtue), as: :json
    end

    assert_response :no_content
  end
end
