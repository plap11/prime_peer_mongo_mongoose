console.log('this works');


var myApp=angular.module( 'myApp', [] );
// create a controller
myApp.controller( 'assignmentController', [ '$scope', '$http', function( $scope, $http ){
  $scope.addRecord = function(){
    event.preventDefault();
    // get the user input and store in an object to send to server, property names we assign, object put on body of req
    var objectToSend ={
      name: $scope.studentNameIn,
      assignment: $scope.assignmentNumberIn,
      score: $scope.scoreIn,
      date: $scope.dateIn
    };
    // make a call to server with object to be stored in DB
    $http({
      method: 'POST',
      url: '/postAssignment',
      data: objectToSend
    });
    // clear inputs
    $scope.studentNameIn ='';
    $scope.assignmentNumberIn ='';
    $scope.scoreIn ='';
    $scope.dateIn =''; // THIS DOESN'T CLEAR YET
  }; // end addRecord function

  $scope.getRecords = function(){
     // read button clicked
     // retrieve records via http call (GET)
     $http({
       method: 'GET',
       url: '/getRecords'
     }).then( function( response ){
       // like an ajax success
       // we have been sent back "response"
       // .data is the data in the reponse
       $scope.allTheRecords = response.data; // .data;
       console.log( $scope.allTheRecords );
     }), function myError( response ){
       console.log( response.statusText );
     };
   }; // end getRecords

}]); // end controller
