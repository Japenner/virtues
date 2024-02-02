module Api::V1
  class ReflectionsController < ApplicationController
    before_action :set_reflection, only: %i[ show update destroy ]

    # GET /reflections
    def index
      @reflections = Reflection.all

      render json: @reflections
    end

    # GET /reflections/1
    def show
      render json: @reflection
    end

    # POST /reflections
    def create
      @reflection = Reflection.new(reflection_params)

      if @reflection.save
        render json: @reflection, status: :created, location: @reflection
      else
        render json: @reflection.errors, status: :unprocessable_entity
      end
    end

    # PATCH/PUT /reflections/1
    def update
      if @reflection.update(reflection_params)
        render json: @reflection
      else
        render json: @reflection.errors, status: :unprocessable_entity
      end
    end

    # DELETE /reflections/1
    def destroy
      @reflection.destroy
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_reflection
        @reflection = Reflection.find(params[:id])
      end

      # Only allow a list of trusted parameters through.
      def reflection_params
        params.require(:reflection).permit(:user_id, :week_number)
      end
  end
end
