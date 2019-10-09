// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDWxIv_Yc22Fc0UJApkZqjnbmV-qiqbbPY",
  authDomain: "tgfood-6eaae.firebaseapp.com",
  databaseURL: "https://tgfood-6eaae.firebaseio.com",
  projectId: "tgfood-6eaae",
  storageBucket: "",
  messagingSenderId: "1084753868707",
  appId: "1:1084753868707:web:a1abd0b24cada4e4394c16",
  measurementId: "G-BCXTW2P2C1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Use firestore
var db = firebase.firestore();

document.addEventListener('init', function (event) {
  var page = event.target;

  if (page.id === 'homePage') {
    console.log("homePage");

    $("#menubtn").click(function () {
      $("#sidemenu")[0].open();
    });

    $("#slidemenu").empty();
    db.collection("slidemenu").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {

        var item = `<ons-carousel-item modifier="nodivider" id="${doc.data().id}" class="recomended_item">
        <div class="thumnail">
        <img src="${doc.data().url}" alt="" style="width:400px ; height:250px" >
        </div>
        </ons-carousel-item>`;

        $("#carousel").append(item);
      });
    });




  }

  if (page.id === 'menuPage') {
    console.log("menuPage");

    $("#login").click(function () {
      $("#content")[0].load("login.html");
      $("#sidemenu")[0].close();
    });

    $("#home").click(function () {
      $("#content")[0].load("home.html");
      $("#sidemenu")[0].close();
    });
  }

  if (page.id === 'loginPage') {
    console.log("loginPage");

    $("#backhomebtn").click(function () {
      $("#content")[0].load("home.html");
    });
  }
});
