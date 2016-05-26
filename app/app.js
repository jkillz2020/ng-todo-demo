"use strict";
var app = angular.module("TodoApp", ["ngRoute"])
.constant("firebaseURL", "https://todo-angular-js.firebaseio.com/");

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
    when("/item/:itemId",{
      templateUrl: "partials/user-details.html",
      controller: "ItemViewCtrl"
    }).
    when("/item/:itemId/edit",{
      templateUrl: "partials/item-new.html",
      controller: "ItemEditCtrl"
    }).
    otherwise("user/list");
}

);


