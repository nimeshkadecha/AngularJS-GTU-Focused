# Ultimate Guide to AngularJS (Version 1.6.9)

## Introduction
AngularJS is a structural framework for dynamic web applications. It lets you use HTML as your template language and extends HTML's syntax to express application components clearly and succinctly.

---

# 1. Basics and Syntax of AngularJS

## Explanation
- AngularJS is a JavaScript framework developed by Google.
- It enables the creation of single-page applications (SPAs) with a modular approach.
- Uses two-way data binding, dependency injection, and directives.

## Syntax
```js
angular.module('myApp', [])
       .controller('myController', function($scope) {
           $scope.message = "Hello, AngularJS!";
       });
```

## Example
```html
<!DOCTYPE html>
<html ng-app="myApp">
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
</head>
<body>
    <div ng-controller="myController">
        <p>{{ message }}</p>
    </div>
    <script>
        angular.module('myApp', [])
               .controller('myController', function($scope) {
                   $scope.message = "Hello, AngularJS!";
               });
    </script>
</body>
</html>
```

---

# 2. Key Components of AngularJS

## 1. **Module**
### Explanation
- Defines the application and its dependencies.

### Syntax
```js
angular.module('myApp', []);
```

### Example
```js
var app = angular.module('storeApp', []);
```

## 2. **Controller**
### Explanation
- Manages application data and logic.

### Syntax
```js
angular.module('myApp', [])
       .controller('myController', function($scope) {
           $scope.message = "Hello, Controller!";
       });
```

### Example
```html
<div ng-controller="myController">
    <p>{{ message }}</p>
</div>
```

## 3. **Directives**
### Explanation
- Extend HTML with custom attributes like `ng-model`, `ng-repeat`.

### Syntax
```html
<input type="text" ng-model="name">
<p>Hello, {{ name }}!</p>
```

### Example
```html
<input type="button" ng-click="count = count + 1" value="Increment">
<p>Count: {{ count }}</p>
```

## 4. **Filters**
### Explanation
- Modify how data is displayed in views (e.g., `uppercase`, `currency`).

### Syntax
```html
<p>{{ message | uppercase }}</p>
```

### Example
```html
<p>{{ 1234.56 | currency }}</p>
```

## 5. **Services**
### Explanation
- Provide reusable logic and share data across components.

### Syntax
```js
angular.module('myApp', [])
       .service('myService', function() {
           this.getMessage = function() {
               return "Hello from Service!";
           };
       });
```

### Example
```js
app.service('mathService', function() {
    this.square = function(num) {
        return num * num;
    };
});
```

## 6. **Factory**
### Explanation
- Similar to services but returns an object or function.

### Syntax
```js
angular.module('myApp', [])
       .factory('myFactory', function() {
           return {
               getMessage: function() {
                   return "Hello from Factory!";
               }
           };
       });
```

### Example
```js
app.factory('dataFactory', function() {
    return {
        getData: function() {
            return [1, 2, 3, 4];
        }
    };
});
```

## 7. **Routing ($routeProvider)**
### Explanation
- Enables navigation in Single Page Applications (SPAs).

### Syntax
```js
angular.module("myApp", ["ngRoute"])
       .config(function($routeProvider) {
           $routeProvider
           .when("/home", { template : "<h1>Home Page</h1>" })
           .when("/about", { template : "<h1>About Page</h1>" })
           .otherwise({redirectTo: '/home'});
       });
```

### Example
```html
<a href="#/home">Home</a>
<a href="#/about">About</a>
<div ng-view></div>
```

## 8. **Scope ($scope)**
### Explanation
- Bridges controllers and views for data binding.

### Syntax
```js
$scope.message = "Hello, Scope!";
```

### Example
```html
<p>{{ message }}</p>
```

## 9. **Expressions ({{ }})**
### Explanation
- Embed JavaScript-like code inside templates.

### Syntax
```html
<p>{{ 5 + 5 }}</p>
```

### Example
```html
<p>{{ user.name }}</p>
```

## 10. **Templates**
### Explanation
- Define UI layouts dynamically loaded via routes.

### Syntax
```html
<script type="text/ng-template" id="myTemplate.html">
    <h1>My Template</h1>
</script>
```

### Example
```html
<div ng-include="'myTemplate.html'"></div>
```

## 11. **Events (ng-click, ng-change)**
### Explanation
- Handle user interactions.

### Syntax
```html
<button ng-click="sayHello()">Click Me</button>
```

### Example
```js
$scope.sayHello = function() {
    alert("Hello!");
};
```

## 12. **Form Validation**
### Explanation
- Built-in validation using directives like `ng-required`, `ng-minlength`.

### Syntax
```html
<input type="text" ng-model="name" ng-required>
```

### Example
```html
<form name="myForm">
    <input type="email" name="userEmail" ng-model="email" required>
    <span ng-show="myForm.userEmail.$error.required">Email is required.</span>
</form>
```

## 13. **Dependency Injection**
### Explanation
- Inject services automatically into controllers, directives, etc.

### Syntax
```js
angular.module('myApp', [])
       .controller('myController', function($scope, $http) {
           // Use injected services
       });
```

### Example
```js
app.controller('MainCtrl', function($scope, dataFactory) {
    $scope.data = dataFactory.getData();
});
```

## 14. **Two-way Data Binding**
### Explanation
- Syncs model and view seamlessly.

### Syntax
```html
<input type="text" ng-model="name">
<p>{{ name }}</p>
```

### Example
```html
<input type="checkbox" ng-model="checked">
<p>Checked: {{ checked }}</p>
```

