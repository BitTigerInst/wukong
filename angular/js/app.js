var controllers = require('./controllers');
var directives = require('./directives');
var services = require('./services');
var _ = require('underscore');

var components = angular.module('wukong.components', ['ng', 'ngMaterial','ngAnimate','vAccordion','ui.bootstrap']);

_.each(controllers, function(controller, name) {
  components.controller(name, controller);
});

_.each(directives, function(directive, name) {
  components.directive(name, directive);
});

_.each(services, function(factory, name) {
  components.factory(name, factory);
});

var app = angular.module('wukong', ['wukong.components', 'ngRoute']);

app.config(function ($mdThemingProvider) {
$mdThemingProvider
    .theme('default')
    .primaryPalette('indigo')
    .accentPalette('pink')
    .warnPalette('red')
});