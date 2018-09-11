namespace :start do
  task :development do
    exec 'foreman s -f procfile.dev'
  end
end

desc 'Start development server'
task start: 'start:development'
