angular.module('libraryApp')
  .controller('BooksIndexController', BooksIndexController);

BooksIndexController.$inject=['$http'];
function BooksIndexController( $http ) {
  var vm = this;
  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books'
  }).then(function successCallback(response){
    vm.books = response.data.books;
  }, function errorCallback(response){
    console.log('Error getting the books', response);
  });

  vm.createBook = function(){
      $http({
        method: 'POST',
        url: 'https://super-crud.herokuapp.com/books',
        data: vm.newBook
      }).then(function onBookCreateSuccess(response){
        vm.books.push(response.data);
        console.log('New book successfully created');
      }, function errorCallback(response){
        console.log('Error saving the book', response);
      });
    };


}
