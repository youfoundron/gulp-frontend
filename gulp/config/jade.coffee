module.exports = (config) ->
  paths = config.get 'paths'
  app_config = config.get 'app'

  src: [
    "#{paths.views}/index.jade"
  ]
  dest: "#{paths.dist.root}"

  locals:
    title: app_config.title
    site_description: app_config.site_description
    keyword: app_config.site_keywords
    cdn: app_config.cdn
    env: app_config.env
    hosturl: if app_config.env is 'production' then app_config.host_url else "http://localhost:#{app_config.port}"
    google_analytics: app_config.google_analytics
