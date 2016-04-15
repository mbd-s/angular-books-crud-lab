angular
  .module('libraryApp')
  .controller('BooksShowController', BooksShowController);

BooksShowController.$inject=['$http', '$routeParams', '$location'];
function BooksShowController($http, $routeParams, $location) {
  var vm = this;
  vm.newBook = {};
  var endpoint = 'https://super-crud.herokuapp.com/books';

  $http({
    method: 'GET',
    url: endpoint + '/' + $routeParams.id
  }).then(function successCallback(json){
    vm.book = json.data;
  });
}
