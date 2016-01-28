# Angular With

Простая директива которая призвана облегчить работу с данными большой вложенности


# Basic usage
```js

  angular.module('app', ['ngWith'])
    .controller('UserController', function($scope) {
      $scope.timezones = [
        ...
        {
          code: 'Europe/Moscow',
          name: 'Europe/Moscow'
        }
        ...
      ];
      
      $scope.data = {
        name: 'Mike',
        email: 'mike@ngworld.com',
        profile: {
          address: {
            country: 'Russia',
            city: 'Kazan',
            street: 'Adoratskogo'
          },
          settings: {
            timezone: null
          }
        }
      };
      
    })
  ;

```
```html
<div ng-controller="UserController">

  <form name="form" ng-submit="submit()" ng-with="data">
  
    <input id="name" ng-model="name" />
    
    <input id="email" ng-model="email" />
  
    <fieldset ng-with="profile.address">
    
      <input id="country" ng-model="country" />
    
      <input id="city" ng-model="city" />
    
      <input id="street" ng-model="street" />
    
    </fieldset>
  
    <fieldset ng-with="profile.settings">
      <select 
        name="timezone" 
        ng-model="timezone" 
        ng-options="zone.code as zone.name for zone in timezones"
      >
        <option value=""> - </option>
      </select>
    </fieldset>
  </form>

</div>
```
