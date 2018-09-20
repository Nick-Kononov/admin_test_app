module Api::V1
  class CategoriesController < ApiController
    def index
      user_skills = @current_user.all_refactored_skills

      respond_to do |format|
        format.json {
          render json: user_skills
        }
      end
    end

  end
end
