exports.WelcomeTitleController = ($scope, $http, $timeout) => {
  $scope.title = "Welcome Back/ Welcome new hacker";
};

exports.UserAttributeBoard = ($scope, $sce, $http, $timeout) => {
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
  $scope.dynamicPopover = {
     content: 'Hello, World!',
     templateUrl: 'myPopoverTemplate.html',
     title: 'Title'
   };

   $scope.placement = {
     options: [
       'top',
       'top-left',
       'top-right',
       'bottom',
       'bottom-left',
       'bottom-right',
       'left',
       'left-top',
       'left-bottom',
       'right',
       'right-top',
       'right-bottom'
     ],
     selected: 'top'
   };
};

exports.DynamicNewsController = ($scope, $sce, $http, $timeout) => {
  $scope.content = "news here";
};

exports.ProjectListController = ($scope, $sce, $http, $timeout) => {
  $scope.oneAtATime = true;

  $scope.groups = [
    {
      title: 'Project 1',
      content: 'Dynamic Group Body - 1'
    },
    {
      title: 'Project 2',
      content: 'Dynamic Group Body - 2'
    }
  ];

  $scope.items = ['Item 1', 'Item 2', 'Item 3'];

  $scope.addItem = function() {
    var newItemNo = $scope.items.length + 1;
    $scope.items.push('Item ' + newItemNo);
  };

  $scope.status = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
};
