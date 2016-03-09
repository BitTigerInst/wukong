exports.welcomeTitle = () => {
  return {
    controller: 'WelcomeTitleController',
    templateUrl: '/views/welcome-title.html'
  };
};

exports.userAttributeBoard = () => {
  return {
    controller: 'UserAttributeBoard',
    templateUrl: '/views/user-attribute-board.html'
  };
};

exports.projectList = () => {
  return {
    controller: 'ProjectListController',
    templateUrl: '/views/project-list.html'
  };
};

exports.dynamicNews = () => {
  return {
    controller: 'DynamicNewsController',
    templateUrl: '/views/dynamic-news.html'
  };
};
