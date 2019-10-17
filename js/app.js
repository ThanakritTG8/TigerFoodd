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

    //homepage
    $("#dessert").click(function () {
      $("#myNavigator")[0].pushPage("thaidessert.html");
    });

    $("#pearltea").click(function () {
      $("#content")[0].load("pearltea.html");
    });

    $("#cookedtoOrder").click(function () {
      $("#content")[0].load("cookedtoOrder.html");
    });

    $("#fastfood").click(function () {
      $("#content")[0].load("fastfood.html");
    });

    $("#chickenrice").click(function () {
      $("#content")[0].load("chickenrice.html");
    });

    $("#noodle").click(function () {
      $("#content")[0].load("noodle.html");
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


  if (page.id === 'thaidessert') {



    $("#restaurent_recommended").empty();

    db.collection("restaurent").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {

        var item = `<ons-card class="restaurent">
        <ons-row style="width:100%">
            <div class="left" style="width:30%">
                <img class="photorestaurent"
                    src="${doc.data().resUrl}"
                    alt="" id="${doc.data().resid}">
            </div>
            <div class="center" style="width:40%; margin-top:30px">
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

  if (page.id === 'pearltea') {

    $("#restaurent_recommended").empty();

    db.collection("pearltea").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {

        var item = `<ons-card class="restaurent">
        <ons-row style="width:100%">
            <div class="left" style="width:30%">
                <img class="photorestaurent"
                    src="${doc.data().resUrl}"
                    alt="" id="${doc.data().resid}">
            </div>
            <div class="center" style="width:40%; margin-top:30px">
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

  if (page.id === 'chickenrice') {

    $("#restaurent_recommended").empty();

    db.collection("chickenrice").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {

        var item = `<ons-card class="restaurent">
        <ons-row style="width:100%">
            <div class="left" style="width:30%">
                <img class="photorestaurent"
                    src="${doc.data().resUrl}"
                    alt="" id="${doc.data().resid}">
            </div>
            <div class="center" style="width:40%; margin-top:30px">
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

  if (page.id === 'cookedtoOrder') {

    $("#restaurent_recommended").empty();

    db.collection("cookToOrder").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {

        var item = `<ons-card class="restaurent">
        <ons-row style="width:100%">
            <div class="left" style="width:30%">
                <img class="photorestaurent"
                    src="${doc.data().resUrl}"
                    alt="" id="${doc.data().resid}">
            </div>
            <div class="center" style="width:40%; margin-top:30px">
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

  if (page.id === 'noodle') {

    $("#restaurent_recommended").empty();

    db.collection("noodle").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {

        var item = `<ons-card class="restaurent">
        <ons-row style="width:100%">
            <div class="left" style="width:30%">
                <img class="photorestaurent"
                    src="${doc.data().resUrl}"
                    alt="" id="${doc.data().resid}">
            </div>
            <div class="center" style="width:40%; margin-top:30px">
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

  if (page.id === 'fastfood') {

    $("#restaurent_recommended").empty();

    db.collection("fastfood").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {

        var item = `<ons-card class="restaurent">
        <ons-row style="width:100%">
            <div class="left" style="width:30%">
                <img class="photorestaurent"
                    src="${doc.data().resUrl}"
                    alt="" id="${doc.data().resid}">
            </div>
            <div class="center" style="width:40%; margin-top:30px">
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


  // if (page.id === 'menuPage') {
  //   console.log("menuPage");

  //   $("#login").click(function () {
  //     $("#content")[0].load("login.html");
  //     $("#sidemenu")[0].close();
  //   });

  //   $("#home").click(function () {
  //     $("#content")[0].load("home.html");
  //     $("#sidemenu")[0].close();
  //   });
  // }

  // if (page.id === 'loginPage') {
  //   console.log("loginPage");

  //   $("#backhomebtn").click(function () {
  //     $("#content")[0].load("home.html");
  //   });
  // }
});
