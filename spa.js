angular.module('myapp',['ngRoute'])
.config(function($routeProvider)
{
    $routeProvider.when('home',
    {
        templateUrl:'home.html',
        controller:'homectrl'}).when('/home/:first/:last',
        {
            templateUrl:'home.html',
            controller:'homectrl'
    }).when('course',
    {
        templateUrl:'Bookingmanip.html',
        controller:'Empmanipctrl'
    }).when('/student',
    {
        templateUrl:'BPsearch.html',
        controller:'studentctrl'
    })
})
.controller('myctrl',function()
{

})
.controller("homectrl",function($scope,$routeParams)
{
    $scope.message="Home Page"
    if($routeParams.first&&$routeParams.last)
    {
        $scope.person={
            first:$routeParams.first,
            last:$routeParams.last
        };
    }
})
.controller("Empmanipctrl",function($scope,$http)
{
    $http.get('emp.json')
    .success(function(response)
    {
    
        $scope.entry=response.data;
        $scope.limit=6;

    });
})
.controller("studentctrl",function($scope,$http)
{
    $http.get('emp.json')
    .success(function(response)
    {
        $scope.entry=response.data;

    });
});
