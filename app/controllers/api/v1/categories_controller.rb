module Api::V1
  class CategoriesController < ApiController
    def index
      @categories = Category.all
      respond_to do |format|
        format.json { render json: @categories }
      end
    end

  end
end
