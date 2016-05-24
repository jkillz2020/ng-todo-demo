"use strict";
var app = angular.module("TodoApp", ["ngRoute"]);

app.config(function($routeProvider){
  $routeProvider.
    when("/user/list",{
      templateUrl: "partials/user-list.html",
      controller: "ItemListCtrl"
    }).
    when("/item/new",{
      templateUrl: "partials/item-new.html",
      controller: "ItemNewCtrl"
    }).
    when("/user/:itemId",{
      templateUrl: "partials/user-details.html",
      controller: "ItemViewCtrl"
    }).
    otherwise("user/list");
}

);


