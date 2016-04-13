exports.WelcomeTitleController = function($scope, $http) {
  $scope.title = "Welcome Back/ Welcome new hacker1";
  $scope.logout = function() {
//    console.log('Click logout');
    $http.get('/auth/logout').then(function() {
      console.log('In success');
    }, function() {
      console.log('In failure');
    });
  };
};


exports.TextDividerController = function($scope) {
  $scope.text = "Recent Updates";
  $scope.description_l1 = "Below is the detail of the latest interesting projects and talented hackers.";
  $scope.description_l2 = "To see more, Please find a study group to join.";
};


exports.UserAttributeBoard = function($scope) {
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

exports.DynamicNewsController = function($scope) {
  $scope.news = [
    {
      header: "Today's Lecture",
      content: "Git (/ɡɪt/[5]) is a widely used source code management system for software development. It is a distributed revision control system with an emphasis on speed,[6] data integrity,[7] and support for distributed, non-linear workflows.[8] Git was initially designed and developed in 2005 by Linux kernel developers (including Linus Torvalds) for Linux kernel development.[9]"
    },
    {
      header: "Ongoing Projects",
      content: "Hatch Mott MacDonald specializes in developing parking plans and parking management programs. Our team has extensive experience in developing sustainable parking solutions, drafting policies and regulatory language for parking programs, helping the clients understand the true cost of parking, offering site specific parking solutions, providing parking restoration and management services, and parking system monetization."
    },
    {
      header: "Tomorrow's event",
      content: "btw, this post is a bit of a followup to my previous post,s, I found a little clarity & content ☺)Update (8/04/15): I’ve created an updated version for Angular-Material 0.10.0 on CodePen."
    },
    { header: "Next 7 days Events", content: "Mobile RTC Hackathon" }
  ];
};

exports.ProjectListController = function($scope) {
  $scope.projects = [
    {
      thumbnail: 'image/1.jpg',
      projectNumber: 'Option 1',
      projectName: 'AppStore Crawler',
      description: 'Web crawling to gather information is a common technique used to efficiently collect information from across the web.'
    },
    {
      thumbnail: 'image/2.jpg',
      projectNumber: 'Option 2',
      projectName: 'VIP Service Prediction',
      description: 'There are millions of apps in the iOS AppStore and Google Play store. '
    }
  ];
};
