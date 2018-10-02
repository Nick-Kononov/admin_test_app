FactoryBot.define do
  factory :skill do
    name { Faker::Lorem::word}
    description { Faker::Lorem::sentence}
  end

  factory :admin_role, class: Role do
    title { 'admin' }
    description { Faker::Lorem::sentence }
  end

  factory :user do
    email { Faker::Internet.email }
    password { Faker::Internet.password }

    factory :admin_user do
      association :role, factory: :admin_role
    end

    factory :user_with_skills do
      transient do
        skills_count { 5 }
      end

      after :create do |user, evaluator|
        create_list :skill, evaluator.skills_count, users: [user]
      end
    end
  end

  factory :user_with_short_password, class: User do
    email { Faker::Internet.email }
    password { Faker::Internet.password(1,5) }
  end

end
