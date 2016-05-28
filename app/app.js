"use strict";
var app = angular.module("TodoApp", ["ngRoute"])
.constant("firebaseURL", "https://todo-angular-js.firebaseio.com/");

let isAuth = (AuthFactory) => new Promise ((resolve, reject) => {
  if(AuthFactory.isAuthenticated()){
    console.log("User is authenticated, resolve route promise");
    resolve();
  } else {
    console.log("User is not authenticated, reject route promise");
    reject();
  }
})



app.config(function($routeProvider){
  $routeProvider.
    when("/",{
      templateUrl: "partials/item-list.html",
      controller: "ItemListCtrl",
      resolve: {isAuth}
    }).
    when("/item/list",{
      templateUrl: "partials/item-list.html",
      controller: "ItemListCtrl",
      resolve: {isAuth}
    }).
    when("/item/new",{
      templateUrl: "partials/item-new.html",
      controller: "ItemNewCtrl",
      resolve: {isAuth}
    }).
    when("/item/:itemId",{
      templateUrl: "partials/item-details.html",
      controller: "ItemViewCtrl",
      resolve: {isAuth}
    }).
    when("/item/:itemId/edit",{
      templateUrl: "partials/item-new.html",
      controller: "ItemEditCtrl",
      resolve: {isAuth}
    }).
    when("/login",{
      templateUrl: "partials/login.html",
      controller: "LoginCtrl"
    }).
    when("/logout",{
      templateUrl: "partials/login.html",
      controller: "LoginCtrl"
    }).
    otherwise("/");
});

app.run(($location) =>{
  let todoRef = new Firebase("https://todo-angular-js.firebaseio.com/");
  todoRef.onAuth(authData => {
    if(!authData){
      $location.path("/login");
    }
  })
})


