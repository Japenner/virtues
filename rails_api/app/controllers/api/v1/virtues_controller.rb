module Api::V1
  class VirtuesController < ApplicationController
    before_action :set_virtue, only: %i[ show update destroy ]

    # GET /virtues
    def index
      @virtues = Virtue.all

      render json: @virtues
    end

    # GET /virtues/1
    def show
      render json: @virtue
    end

    # POST /virtues
    def create
      @virtue = Virtue.new(virtue_params)

      if @virtue.save
        render json: @virtue, status: :created, location: @virtue
      else
        render json: @virtue.errors, status: :unprocessable_entity
      end
    end

    # PATCH/PUT /virtues/1
    def update
      if @virtue.update(virtue_params)
        render json: @virtue
      else
        render json: @virtue.errors, status: :unprocessable_entity
      end
    end

    # DELETE /virtues/1
    def destroy
      @virtue.destroy
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_virtue
        @virtue = Virtue.find(params[:id])
      end

      # Only allow a list of trusted parameters through.
      def virtue_params
        params.require(:virtue).permit(:name, :description)
      end
  end
end
