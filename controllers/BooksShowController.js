angular
  .module('libraryApp')
  .controller('BooksShowController', BooksShowController);

BooksShowController.$inject=['$http', '$routeParams', '$location'];
function BooksShowController($http, $routeParams, $location) {
  var vm = this;
  var bookId = $routeParams.id;
  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books/' + bookId
  }).then(function successCallback(response){
    vm.book = response.data;
  }, function errorCallback(response){
    console.log('Error showing the book', response);
  });

  vm.editBook = function(bookToEdit){
    $http({
      method: 'PUT',
      url: 'https://super-crud.herokuapp.com/books/' + bookToEdit._id,
      data: {
        title: bookToEdit.title,
        author: bookToEdit.author,
        releaseDate: bookToEdit.releaseDate,
        image: bookToEdit.image
      }
    }).then(function onBookEditSuccess(response){
      console.log('Book successfully updated', response.data);
      vm.book = response.data;
      $location.path('/');
    }, function onBookEditError(response){
      console.log('Error updating the book', response);
    });
  };

  //TODO write deleteBook() function
}
