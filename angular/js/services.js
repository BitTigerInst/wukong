exports.UserService = function($http) {
  var user = {};

  function getUser() {
    return $http.get('api/auth/me').then(function(response) {
      console.log('call user service and got data: ', response.data);
      user.data = response.data;
      return response.data;
    });
  }

  return {
    user: user,
    getUser: getUser
  };
};
