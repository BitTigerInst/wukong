exports.WelcomeTitleController = function($scope, $http, $timeout){
  $scope.title = "Welcome Back/ Welcome new hacker";
};

exports.UserAttributeBoard = function($scope) {
  $scope.range = [
    { label: 'Beginner'},
    { label: 'Level' },
    { label: 'Experience'},
    { label: 'Projects'},
    { label: 'Group'},
    { label: 'Profile'},
    { label: 'Registratered Events'},
    { label: 'Else'}
  ];
};

exports.DynamicNewsController = function($scope){
  $scope.news = [
    { header: "Today's Lecture", content: "Git (/ɡɪt/[5]) is a widely used source code management system for software development. It is a distributed revision control system with an emphasis on speed,[6] data integrity,[7] and support for distributed, non-linear workflows.[8] Git was initially designed and developed in 2005 by Linux kernel developers (including Linus Torvalds) for Linux kernel development.[9]" },
    { header: "Ongoing Projects", content: "Hatch Mott MacDonald specializes in developing parking plans and parking management programs. Our team has extensive experience in developing sustainable parking solutions, drafting policies and regulatory language for parking programs, helping the clients understand the true cost of parking, offering site specific parking solutions, providing parking restoration and management services, and parking system monetization."},
    { header: "Tomorrow's event", content:  "btw, this post is a bit of a followup to my previous post,s, I found a little clarity & content ☺)Update (8/04/15): I’ve created an updated version for Angular-Material 0.10.0 on CodePen."},
    { header: "Next 7 days Events", content: "", subpane: [
    { eventsheader: "Mobile RTC Hackathon", eventscontent: "Events content"},
    { eventsheader: "[太阁三人行]解读小米视频电话的黑科技：Agora.io", eventscontent: "Events content2"}
    ]}
  ];
};

exports.ProjectListController = function($scope){
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
      projectName: 'VIP Service Prediction (CloudBrain Challenge)',
      description: 'There are millions of apps in the iOS AppStore and Google Play store. '
    }
  ];
};
