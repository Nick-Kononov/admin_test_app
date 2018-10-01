module Api::V1
  class CategoriesController < ApiController
    serialization_scope :view_context

    def index
      respond_to do |format|
        format.json {
          render json: Category.all, each_serializer: Filtered::CategorySerializer
        }
      end
    end

  end
end
