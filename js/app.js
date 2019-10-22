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
      localStorage.setItem("selectedCategory", "dessert")
      $("#myNavigator")[0].pushPage("category.html");
    });

    $("#pearltea").click(function () {
      $("#myNavigator")[0].pushPage("pearltea.html");
    });

    $("#cookedtoOrder").click(function () {
      $("#myNavigator")[0].pushPage("cookedtoOrder.html");
    });

    $("#fastfood").click(function () {
      $("#myNavigator")[0].pushPage("fastfood.html");
    });

    $("#chickenrice").click(function () {
      $("#myNavigator")[0].pushPage("chickenrice.html");
    });

    $("#noodle").click(function () {
      $("#myNavigator")[0].pushPage("noodle.html");
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
    
    $("#restaurent_recommended").empty();
    var category = localStorage.getItem("selectedCategory");
    db.collection("restaurent").where("category", "==", category).get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {

        var item = `<ons-card class="restaurent" id="restaurent">
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

    $("#restaurent").click(function(){
      $("#content")[0].load("restaurentMenu.html");
    });

  }

  if (page.id === 'pearltea') {

    $("#restaurent_recommended").empty();

    db.collection("pearltea").orderBy("resid", "asc").get().then((querySnapshot) => {
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

    db.collection("chickenrice").orderBy("resid", "asc").get().then((querySnapshot) => {
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

    db.collection("cookToOrder").orderBy("resid", "asc").get().then((querySnapshot) => {
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

    db.collection("noodle").orderBy("resid", "asc").get().then((querySnapshot) => {
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

    db.collection("fastfood").orderBy("resid", "asc").get().then((querySnapshot) => {
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


  if (page.id === 'profilePage') {
    console.log("profile");

    $("#logout1").click(function () {
      $("#content")[0].load("login.html");
    });
  }

  if (page.id === 'loginPage') {
    console.log("loginPage");

    $("#backhomebtn").click(function () {
      $("#content")[0].load("home.html");
    });
  }
});
