function TodoController($scope) {
  $scope.todos = [
    {text: 'Learn AngularJS', done: false},
    {text: 'Build new Angular app', done: false}
  ];

  $scope.addTodo = function () {
    $scope.todos.push({text:$scope.formTodoText, done: false});
    $scope.formTodoText = '';
  };
}
