exports.welcomeTitle = function() {
  return {
    controller: 'WelcomeTitleController',
    templateUrl: '/views/partials/welcome-title.html'
  };
};

exports.textDivider = function() {
  return {
    controller: 'TextDividerController',
    templateUrl: '/views/partials/text-divider.html'
  };
};

exports.userAttributeBoard = function() {
  return {
    controller: 'UserAttributeBoardController',
    templateUrl: '/views/partials/user-attribute-board.html'
  };
};

exports.projectList = function() {
  return {
    controller: 'ProjectListController',
    templateUrl: '/views/partials/project-list.html'
  };
};

exports.dynamicNews = function() {
  return {
    controller: 'DynamicNewsController',
    templateUrl: '/views/partials/dynamic-news.html'
  };
};
