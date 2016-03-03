app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
    {
      name: 'Bruschetta',
      description: 'Grilled bread garlic, tomatoes, olive oil',
      price: 4.95
    }
  ];

  $scope.mains = [
  {
      name: 'Pizza',
      description: 'Delish',
      price: 4.95
    },
    {
      name: 'Burger',
      description: 'Good',
      price: 4.95
    },
    {
      name: 'Wrap',
      description: 'Tortilla',
      price: 4.95
    }
    ];
    $scope.extras =[
    {
      name: 'Cake',
      description: 'Chocolate',
      price: 4.95
    },
      {
      name: 'Ice Cream',
      description: 'Vanilla',
      price: 4.95
    },
      {
      name: 'French Fries',
      description: 'With Ketchup',
      price: 4.95
    }
    ];
 

}]);