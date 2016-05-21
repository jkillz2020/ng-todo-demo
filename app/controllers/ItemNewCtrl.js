app.controller("ItemNewCtrl", function($scope){
  $scope.task = "";
  $scope.newTask = {};

  $scope.items = [
  {
    id: 0,
    task: 'mow the lawn',
    isCompleted: true,
    dueDate: '12/5/17',
    assignedTo: 'greg',
    location: "Zoe's house",
    urgency: "low",
    dependencies: ["sunshine, clippers, hat, water, headphones"]
  },
  {
    id: 1,
    task: 'grade quizzes zoe',
    isCompleted: false,
    dueDate: '12/5/16',
    assignedTo: 'joe',
    location: "NSS",
    urgency: "low",
    dependencies: ["wifi, vodka, tissues, headphones"]
  },
  {
    id: 2,
    task: 'take a nap',
    isCompleted: false,
    dueDate: '5/21/16',
    assignedTo: 'zoe',
    location: "Zoe's house",
    urgency: "medium",
    dependencies: ["wifi, vodka, tissues, nap, headphones"]
  }
];


    $scope.addNewItem = function(){
      $scope.newTask.isCompleted = false;
      $scope.newTask.id = $scope.items.length;
      console.log("you added new item", $scope.newTask);
      $scope.items.push($scope.newTask);
      $scope.newTask="";
    };
});