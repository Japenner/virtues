require "test_helper"

class ReflectionsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @reflection = reflections(:one)
  end

  test "should get index" do
    get reflections_url, as: :json
    assert_response :success
  end

  test "should create reflection" do
    assert_difference("Reflection.count") do
      post reflections_url, params: { reflection: { user_id: @reflection.user_id, week_number: @reflection.week_number } }, as: :json
    end

    assert_response :created
  end

  test "should show reflection" do
    get reflection_url(@reflection), as: :json
    assert_response :success
  end

  test "should update reflection" do
    patch reflection_url(@reflection), params: { reflection: { user_id: @reflection.user_id, week_number: @reflection.week_number } }, as: :json
    assert_response :success
  end

  test "should destroy reflection" do
    assert_difference("Reflection.count", -1) do
      delete reflection_url(@reflection), as: :json
    end

    assert_response :no_content
  end
end
