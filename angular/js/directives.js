exports.welcomeTitle = function() {
  return {
    controller: 'WelcomeTitleController',
    templateUrl: '/views/welcome-title.html'
  };
};

exports.textDivider = function() {
  return {
    controller: 'TextDividerController',
    templateUrl: '/views/text-divider.html'
  };
};

exports.userAttributeBoard = function() {
  return {
    controller: 'UserAttributeBoardController',
    templateUrl: '/views/user-attribute-board.html'
  };
};

exports.projectList = function() {
  return {
    controller: 'ProjectListController',
    templateUrl: '/views/project-list.html'
  };
};

exports.dynamicNews = function() {
  return {
    controller: 'DynamicNewsController',
    templateUrl: '/views/dynamic-news.html'
  };
};
