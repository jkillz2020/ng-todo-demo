app.controller("ItemEditCtrl", function($scope, $http, $location, $routeParams, itemStorage){
  $scope.title = "Edit Item";
  $scope.submitButtonText="Update";
  $scope.newTask = {};

  itemStorage.getSingleItem($routeParams.itemId)
    .then(function successCallback(response){
      $scope.newTask=response;
    })

  $scope.addNewItem = function(){
    itemStorage.updateItem($routeParams.itemId, $scope.newTask)
      .then(function successCallback(response){
        $location.url("items/list");
      });
  };

  //   assignedTo: "",
  //   dependencies: "",
  //   dueDate: "",
  //   isCompleted: false,
  //   location: "",
  //   task: "",
  //   urgency: "",
  });