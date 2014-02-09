Controller = require 'controllers/base/controller'
HomeView = require 'views/home/home-view'
HomeViewModel = require 'view-models/home/home-view-model'

View = require 'views/base/view'

class EdgeView extends View
  template: require 'templates/mock'
  container: 'body'

module.exports = class HomeController extends Controller
  index: ->
    @viewModel = new HomeViewModel
    @view = @compose 'home', HomeView, model: @viewModel

    edgeView = new EdgeView
    edgeView.render()

