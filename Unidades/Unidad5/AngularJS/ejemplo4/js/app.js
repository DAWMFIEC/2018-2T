var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
    $http.get("template/welcome.html").then(function (response) {
        $scope.myWelcome = response.data;
    });
});