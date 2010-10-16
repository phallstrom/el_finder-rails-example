Railselfinder::Application.routes.draw do

  root :to => 'home#index'
  match 'elfinder' => 'home#elfinder'

end
