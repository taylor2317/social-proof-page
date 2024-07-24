function sizer() {
    if (window.matchMedia("(max-width: 375px)").matches) { /*If the window is less than 375 pixels*/
    console.log("small")
    document.getElementById("page").style.height = "1530px";
    document.getElementById("page").style.width = "375px";
    document.getElementById("page").style.position = "fixed";
    document.getElementById("page").style.top = "0px";
    document.getElementById("page").style.left = "0px";
    document.getElementById("page").style.textAlign = "centre";
    document.getElementById("page").style.background = "url(images/bg-pattern-bottom-mobile.svg) no-repeat right bottom"
    document.getElementById("page").style.background = "url(images/bg-pattern-top-mobile.svg) no-repeat left top"

    
    document.getElementById("content").style.padding = "0px";


    document.getElementById("left").style.width = "375px";


    document.getElementById("header").style.position = "fixed";
    document.getElementById("header").style.top = "50px";
    document.getElementById("header").style.fontSize = "60px";
    document.getElementById("header").style.width = "375px";
    document.getElementById("header").style.textAlign = "centre";
    document.getElementById("header").style.left = "150px";


    document.getElementById("desc").style.position = "fixed";
    document.getElementById("desc").style.top = "300px";
    document.getElementById("desc").style.width = "500px";
    document.getElementById("desc").style.fontSize = "25px";
    document.getElementById("desc").style.lineHeight = "30px";
    document.getElementById("desc").style.left = "80px";
    document.getElementById("desc").style.textAlign = "centre";


    document.getElementById("rating").style.position = "fixed";
    document.getElementById("rating").style.width = "500px";
    document.getElementById("rating").style.height = "75px";
    document.getElementById("rating").style.marginTop = "450px";
    document.getElementById("rating").style.marginLeft = "-50px";


    document.getElementById("rating-text").style.fontSize = "25px";
    document.getElementById("rating-text").style.marginTop = "50px";
    document.getElementById("rating-text").style.marginLeft = "125px";
    document.getElementById("rating-text").style.width = "300px";
    document.getElementById("rating-text").style.position = "fixed";
    document.getElementById("rating-text").style.textAlign = "centre";


    document.getElementById("stars").style.display = "block";
    document.getElementById("stars").style.width = "300px";
    document.getElementById("stars").style.position = "fixed";
    document.getElementById("star").style.height = "20px";
    document.getElementById("star").style.width = "20px";


    document.getElementById("rating2").style.position = "fixed";
    document.getElementById("rating2").style.width = "500px";
    document.getElementById("rating2").style.height = "75px";
    document.getElementById("rating2").style.marginTop = "575px";
    document.getElementById("rating2").style.marginLeft = "-50px";


    document.getElementById("rating-text2").style.fontSize = "25px";
    document.getElementById("rating-text2").style.marginTop = "25px";
    document.getElementById("rating-text2").style.marginLeft = "125px";
    document.getElementById("rating-text2").style.width = "300px";
    document.getElementById("rating-text2").style.position = "fixed";
    document.getElementById("rating-text2").style.textAlign = "centre";


    document.getElementById("rating3").style.position = "fixed";
    document.getElementById("rating3").style.width = "500px";
    document.getElementById("rating3").style.height = "75px";
    document.getElementById("rating3").style.marginTop = "700px";
    document.getElementById("rating3").style.marginLeft = "-50px";


    document.getElementById("rating-text3").style.fontSize = "25px";
    document.getElementById("rating-text3").style.marginTop = "25px";
    document.getElementById("rating-text3").style.marginLeft = "125px";
    document.getElementById("rating-text3").style.width = "300px";
    document.getElementById("rating-text3").style.position = "fixed";
    document.getElementById("rating-text3").style.textAlign = "centre";


    document.getElementById("review").style.position = "fixed";
    document.getElementById("review").style.top = "850px";
    document.getElementById("review").style.left = "60px";
    document.getElementById("review").style.width = "475px";


    document.getElementById("name").style.fontSize = "20px";
    document.getElementById("bio").style.fontSize = "20px";
    document.getElementById("info").style.fontSize = "20px";


    document.getElementById("review2").style.position = "fixed";
    document.getElementById("review2").style.top = "1050px";
    document.getElementById("review2").style.left = "60px";
    document.getElementById("review2").style.width = "475px";

    
    document.getElementById("name2").style.fontSize = "20px";
    document.getElementById("bio2").style.fontSize = "20px";
    document.getElementById("info2").style.fontSize = "20px";


    document.getElementById("review3").style.position = "fixed";
    document.getElementById("review3").style.top = "1250px";
    document.getElementById("review3").style.left = "60px";
    document.getElementById("review3").style.width = "475px";

    
    document.getElementById("name3").style.fontSize = "20px";
    document.getElementById("bio3").style.fontSize = "20px";
    document.getElementById("info3").style.fontSize = "20px";

    }
};

sizer();