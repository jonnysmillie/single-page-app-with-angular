angular
    .module('app')
    //service contains all routes for the Angular application
    .service('dataService', ['$http', function($http) {

    	var baseURL = "http://localhost:5000/";

    	this.getRecipes = function(callback) {
            $http.get(baseURL + 'api/recipes')
            .then(callback);
          };
   		  // gets recipes of a particular category
          this.getCategoryOfRecipes = function(category, callback) {
            $http.get(baseURL + 'api/recipes?category=' + category)
            .then(callback);
          };
          // gets a recipe by ID number
          this.getID = function(id, callback) {
            $http.get(baseURL + 'api/recipes/' + id)
            .then(callback);
          };
          // updates recipe by ID number
          this.putID = function(id, data, callback, failure) {
            $http.put(baseURL + 'api/recipes/' + id, data)
            .then(callback, failure)
          };
          // adds a new recipe
          this.addRecipe = function(recipe, callbackSuccess, callbackFailure) {
            $http.post(baseURL + 'api/recipes', recipe)
            .then(callbackSuccess, callbackFailure);
          };
          // deletes a recipe by ID number
          this.deleteID = function(id, callbackSuccess, callbackFailure) {
            $http.delete(baseURL + 'api/recipes/' + id)
            .then(callbackSuccess, callbackFailure)
          };
          // gets all the recipe categories
          this.getCategory = function(callback) {
            $http.get(baseURL + 'api/categories')
           .then(callback);
         };
         // gets all the food items
         this.getFoodItems = function(callback) {
           $http.get(baseURL + 'api/fooditems')
           .then(callback);
         };
}]);
