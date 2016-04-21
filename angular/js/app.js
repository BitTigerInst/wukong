var controllers = require('./controllers');
var directives = require('./directives');
var services = require('./services');
var _ = require('underscore');

var components = angular.module('wukong.components', ['ng', 'ngMaterial']);

_.each(services, function(factory, name) {
  components.factory(name, factory);
});

_.each(controllers, function(controller, name) {
  components.controller(name, controller);
});

_.each(directives, function(directive, name) {
  components.directive(name, directive);
});

angular.module('wukong', ['wukong.components', 'ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('welcome', {
        url: "/welcome",
        templateUrl: "views/welcome.html",
        resolve: {
          user: function(UserService) {
            console.log('in reslove');
            return UserService.getUser();
          }
        }
      });

    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/welcome");
  });
