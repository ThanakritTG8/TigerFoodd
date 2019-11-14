var firebaseConfig = {
  apiKey: "AIzaSyDWxIv_Yc22Fc0UJApkZqjnbmV-qiqbbPY",
  authDomain: "tgfood-6eaae.firebaseapp.com",
  databaseURL: "https://tgfood-6eaae.firebaseio.com",
  projectId: "tgfood-6eaae",
  storageBucket: "tgfood-6eaae.appspot.com",
  messagingSenderId: "1084753868707",
  appId: "1:1084753868707:web:a1abd0b24cada4e4394c16",
  measurementId: "G-BCXTW2P2C1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

//Use firestore
var db = firebase.firestore();

function restaurent(id) {
  localStorage.setItem("selectedrestaurent", id);
  $("#myNavigator")[0].pushPage("listMenu.html");
}

document.addEventListener('init', function (event) {
  var page = event.target;


  if (page.id === 'homePage') {
    console.log("homePage");

    //homepage
    $("#dessert").click(function () {
      localStorage.setItem("selectedCategory", "dessert");
      $("#myNavigator")[0].pushPage("category.html");
    });

    $("#pearltea").click(function () {
      localStorage.setItem("selectedCategory", "pearltea");
      $("#myNavigator")[0].pushPage("category.html");
    });

    $("#cookedtoOrder").click(function () {
      localStorage.setItem("selectedCategory", "cookToOrder");
      $("#myNavigator")[0].pushPage("category.html");
    });

    $("#fastfood").click(function () {
      localStorage.setItem("selectedCategory", "fastfood");
      $("#myNavigator")[0].pushPage("category.html");
    });

    $("#chickenrice").click(function () {
      localStorage.setItem("selectedCategory", "chickenrice");
      $("#myNavigator")[0].pushPage("category.html");
    });

    $("#noodle").click(function () {
      localStorage.setItem("selectedCategory", "noodle");
      $("#myNavigator")[0].pushPage("category.html");
    });

    page.querySelector('#carousel').addEventListener("postchange", function () {
      page.querySelector('#dot0').classList.remove("circle_current");
      page.querySelector('#dot1').classList.remove("circle_current");
      page.querySelector('#dot2').classList.remove("circle_current");
      page.querySelector('#dot3').classList.remove("circle_current");
      page.querySelector('#dot' + page.querySelector('#carousel').getActiveIndex()).classList.add("circle_current");

    });


    $("#slidemenu").empty();
    db.collection("slidemenu").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {

        var item = `<ons-carousel-item modifier="nodivider" id="${doc.data().id}" class="recomended_item">  
        <img src="${doc.data().url}" alt="" style="width:400px ; height:250px" >
        </ons-carousel-item>`;

        $("#carousel").append(item);
      });
    });


  }


  if (page.id === 'categoryPage') {
    console.log();


    $("#restaurent_recommended").empty();
    var category = localStorage.getItem("selectedCategory");
    db.collection("restaurent").where("category", "==", category).get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {

        var item = `<ons-card class="restaurent" onclick="restaurent('${doc.data().resid}');">
        <ons-row style="width:100%">
            <div class="left" style="width:30%">
                <img class="photorestaurent"
                    src="${doc.data().resUrl}"
                    alt="" id="${doc.data().resid}">
            </div>
            <div class="center" style="width:40%; margin-top:30px; ">
                <a class="text">${doc.data().resname}</a>
            </div>
            <div class="right" style="width:30%; margin-top:30px">
                <a class="rating">${doc.data().rating}<ons-icon icon="fa-star" class="starRating">
                    </ons-icon>
                </a>
            </div>
        </ons-row>
    </ons-card>`;
        $("#restaurent_recommended").append(item);

      });

    });
  }

  if (page.id === 'listmenu') {
    $("#menu").empty();
    var resid = localStorage.getItem("selectedrestaurent");
    db.collection("restaurent").where("resid", "==", resid).get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        var item = `<ons-card class="resdetail" >
        <p class="resname">${doc.data().resname}</p>
      <p class="resrating">rating : ${doc.data().rating}<ons-icon icon="fa-star"></ons-icon></p>
        <p class="opentime">${doc.data().time}</p>
        <p class="tel">${doc.data().tel}</p>
        </ons-card>`;
        $("#menu").append(item);

        doc.data().menu.forEach(element => {

          var item = `<ons-card class="list" onclick="ons.notification.toast('Hi there!', { timeout: 1000, animation: 'fade' })">
          <ons-row>
              <div class="left" style="width:50%">
                  <a class="listmenu">${element.list}</a>
              </div>
              <div class="right" style="width: 50%;">
                  <a class="price">${element.price}฿</a>
              </div>
          </ons-row>
      </ons-card>`;
          $("#list").append(item);

        });

        doc.data().topping.forEach(element => {

          var item = `<ons-card class="list" onclick="ons.notification.toast('Hi there!', { timeout: 1000, animation: 'fall' })">
            <ons-row>
                <div class="left" style="width:50%">
                    <a class="listmenu">${element.type}</a>
                </div>
                <div class="right" style="width: 50%;">
                    <a class="price">${element.price}฿</a>
                </div>
            </ons-row>
        </ons-card>`
          $("#topping").append(item);
        });


      });
    });
  }

  if (page.id === 'profilePage') {
    console.log("profile");

    $(".logout1").click(function () {
      $("#content")[0].load("login.html");
    });
  }

  if (page.id === 'loginPage') {
    console.log("loginPage");
    $(".signinbtn").click(function () {
      var username = $("#username").val();
      var password = $("#password").val();

      firebase
        .auth()
        .signInWithEmailAndPassword(username, password)
        .then(function () {
          content.load("Resturant_manu.html");
        })
        .catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
          console.log("errorCode :" + errorCode);
          console.log("errorMessage:" + errorMessage);
          ons.notification.alert("Incorrect Email or Password");
        });
    });

    $("#back_home").click(function () {
      $("#content")[0].load("Resturant_manu.html");
    });


    $("#gmail-button").click(function () {
      var provider = new firebase.auth.GoogleAuthProvider();

      firebase
        .auth()
        .signInWithPopup(provider)
        .then(function (result) {
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          // ...
        })
        .then(function () {
          $("#content")[0].load("Resturant_manu.html");
        })
        .catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
        });
    });


    $("#backhomebtn").click(function () {
      $("#content")[0].load("home.html");
    });
  }
});

