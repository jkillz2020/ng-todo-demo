"use strict";
var app = angular.module("TodoApp", []);

app.controller("NavCtrl", function($scope){
  $scope.navItems = [{name: "Logout"}, {name: "All Items"}, {name: "New Item"}];
});

app.controller("TodoCtrl", function($scope){
  $scope.welcome = "hello";
  $scope.showListView = true;
  $scope.newTask = []

  $scope.items = [
  {
    id: 0,
    task: 'mow the lawn',
    isCompleted: true,
    dueDate: '12/5/17',
    assignedTo: 'greg',
    location: "Zoe's house",
    urgency: "low",
    dependencies: ["sunshine", "clippers", "hat", "water", "headphones"]
  },
  {
    id: 1,
    task: 'grade quizzes',
    isCompleted: false,
    dueDate: '12/5/16',
    assignedTo: 'joe',
    location: "NSS",
    urgency: "low",
    dependencies: ["wifi", "vodka", "tissues", "nap", "headphones"]
  }
]

   $scope.newItem = function(){
        console.log("you hit new item");
        $scope.showListView = false;
    };
    $scope.allItem = function(){
        console.log("you hit all items");
        $scope.showListView = true;

    };
});