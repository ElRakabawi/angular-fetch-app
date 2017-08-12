'use strict';

/**
 * @ngdoc function
 * @name angularFetchAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularFetchAppApp
 */
angular.module('angularFetchAppApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/posts'
    }).then(function successCallback(response) {
      $scope.DataObj = response.data;
    }, function errorCallback(response) {
      console.log('There was error with the http request');
    });

    var $item = $(".carousel .item");
    var $wHeight = $(window).height();
    $item.eq(0).addClass("active");
    $item.height($wHeight);
    $item.addClass("full-screen");

    $(window).on("resize", function() {
      $wHeight = $(window).height();
      $item.height($wHeight);
    });

    $(".carousel").carousel({
      interval: 5000,
      pause: "false",
    });

    $('.carousel-control').click(function(e){
	     e.preventDefault();
	      $('#myCarousel').carousel( $(this).data() );
    });
});
