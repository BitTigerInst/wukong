var controllers = require('./controllers');
var directives = require('./directives');
var services = require('./services');
var _ = require('underscore');

var components = angular.module('wukong.components', ['ng', 'ngMaterial']);

_.each(controllers, function(controller, name) {
  components.controller(name, controller);
});

_.each(directives, function(directive, name) {
  components.directive(name, directive);
});

_.each(services, function(factory, name) {
  components.factory(name, factory);
});

angular.module('wukong', ['wukong.components', 'ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('welcome', {
        url: "/",
        templateUrl: "views/welcome.html"
      });

    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/");
  });
