exports.WelcomeTitleController = function ($scope) {
  $scope.title = 'Welcome Back/ Welcome new hacker';
};

exports.UserAttributeBoard = function ($scope) {
  $scope.range = [
    { label: 'Beginner' },
    { label: 'Level' },
    { label: 'Experience' },
    { label: 'Projects' },
    { label: 'Group' },
    { label: 'Profile' },
    { label: 'Registratered Events' },
    { label: 'Else' }
  ];
};

exports.DynamicNewsController = function ($scope) {
  $scope.news = [
    { header: 'Todays Lecture", content: "data integrity,[7] and support" ' +
              'for distributed, non-linear workflows.[8] Git was initially designed' +
              'and developed in 2005 by Linux kernel deve' },
    { header: 'Ongoing Projects", content: "Hatch Mott MacDonald specializes in developing ' +
              'parking plans and parking management programs. Our team has extensive' +
              'developing sustainable parking solutions.' },
    { header: 'Tomorrows event", content:  "btw, this post is a bit of a followup to' +
              ' my previous post,s, I found a little clarity & content ☺)Update (8/04/15): I’ve ' +
              'created an updated version for Angular-Material 0.10.0 on CodePen.' },
    { header: 'Next 7 days Events", content: ' }
  ];
};

exports.ProjectListController = function ($scope) {
  $scope.projects = [
    {
      projectName: 'Project 1',
      description: 'Dynamic Group Body - 1'
    },
    {
      projectName: 'Project 2',
      description: 'Dynamic Group Body - 2'
    }
  ];
};
