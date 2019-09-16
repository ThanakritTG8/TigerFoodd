function opendessert() {
    document.querySelector('#myNavigator').pushPage('dessert.html');
  }

  function goBack() {
    document.querySelector('#menu').close().then(function() {
      document.querySelector('#myNavigator').popPage()
    });
  }