class HomeController < ApplicationController

  # FIXME - This isn't ideal and should be resolved on the client side.
  skip_before_filter :verify_authenticity_token, :only => ['elfinder']

  def index
  end

  def elfinder
    h, r = ElFinder::Connector.new(
      :root => File.join(Rails.public_path, 'system', 'elfinder'),
      :url => '/system/elfinder'
    ).run(params)

    headers.merge!(h)

    if r.empty?
      render :nothing => true, :layout => false
    else
      render :text => r.to_json , :layout => false
    end

  end

end
