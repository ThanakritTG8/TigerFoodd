document.addEventListener('init', function(event) {
    var page = event.target;
    console.log(page.id);

    if(page.id === 'tabbar'){
        //Code for tabbar
        $("#menubtn").click(function(){
          var menu = document.getElementById('menubtn');
        menu.open();  
        })
        
    }

    if(page.id === "sidemenu"){
        //Code for side menu
        $('#homebtn').click(function(){
            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('tabbar.html')
                .then(menu.close.bind(menu));
    }) 
    $('#loginbtn').click(function(){
        var content = document.getElementById('content');
        var menu = document.getElementById('menu');
        content.load('login.html')
            .then(menu.close.bind(menu));
})
    }

    if(page.id === 'tab1'){
      $('#btn1').click(function(){
        ons.notification.alert("Hello");
    })  
    }
    
});