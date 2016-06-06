(function() {
  'use strict';

  var template = require('./linkList.html');

  module.exports = function cfaLinkList() {
    var directive = {
      restrict: 'E',
      scope: {},
      controllerAs: 'vm',
      bindToController: {
        linkTitle: '@title',
        linkSubTitle: '=subTitle',
        linkUrl: '=linkUrl',
        //linkIcon: '@arrowIcon',
        linkDollarAmount: '=dollarAmount',
        avatarImageUrl: '=avatarUrl'
      },
      link: link,
      template: template,
      controller: function() {}  //if access to the controller is needed, add the controller in separate file
    };
    return directive;

    function link(scope, element, attrs, vm) {}

  };
})();