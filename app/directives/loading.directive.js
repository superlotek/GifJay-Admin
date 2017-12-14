  angular
  .module('app')
  .directive('loading', function () {
      return {
        restrict: 'E',
        replace: true,
        template: `
            <div class="loading">
                <img src="img/loading_icon.gif"/>
            </div>
        `,
        link: function (scope, element, attr) {
              scope.$watch('loading', function (val) {
                  if (val)
                      $(element).show();
                  else
                      $(element).hide();
              });
        }
      }
  })
