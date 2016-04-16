angular.module('libraryApp')
  .controller('BooksIndexController', BooksIndexController);

BooksIndexController.$inject=['$http'];
function BooksIndexController( $http ) {
  var vm = this;
  var endpoint = 'https://super-crud.herokuapp.com/books';
  $http({
    method: 'GET',
    url: endpoint
  }).then(function successCallback(response){
    vm.books = response.data.books;
  }, function errorCallback(response){
    console.log('Error getting the books', response);
  });

  // $http({
  //   method: 'POST',
  //   url: endpoint
  // }).then(function successCallback(response){
  //   vm.books = response.data.books;
  // }, function errorCallback(response){
  //   console.log('Error saving the book', response);
  // });

}
