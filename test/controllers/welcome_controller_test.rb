require 'test_helper'

class WelcomeControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

  test "should get english" do
    get :english
    assert_response :success
  end

  test "should get arab" do
    get :arab
    assert_response :success
  end

  test "should get detectlocation" do
    get :detectlocation
    assert_response :success
  end

  test "should get about" do
    get :about
    assert_response :success
  end

  test "should get us" do
    get :us
    assert_response :success
  end

end
