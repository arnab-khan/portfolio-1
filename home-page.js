                // start manu 
    function manuClick(id) {
    document.getElementById(id).scrollIntoView();
    // console.log(document.body.clientWidth);
    if (document.body.clientWidth<=580) {
        openClose();
    }
}

// start manu visiable 
var opeb_close=0;
function openClose() {
    if (opeb_close==0) {
        document.getElementsByTagName("ul")[0].style.zIndex="5";
        document.getElementsByTagName("ul")[0].style.width="60%";
        opeb_close=1;

        // start for manu bar 
        document.getElementsByClassName("manu_bar")[0].style.transform="translateX(.7vh) rotate(45deg) translateX(.2vh)";
        document.getElementsByClassName("manu_bar")[2].style.transform="translateX(.7vh) rotate(-45deg) translateX(-.2vh)";
        document.getElementsByClassName("manu_bar")[1].style.transform="scale(0)";

        // end for manu bar 

    } else {
        document.getElementsByTagName("ul")[0].style.width="0%";
        document.getElementsByTagName("ul")[0].style.zIndex="-6";
        opeb_close=0;

        document.getElementsByClassName("manu_bar")[0].style.transform="none";
        document.getElementsByClassName("manu_bar")[2].style.transform="none";
        document.getElementsByClassName("manu_bar")[1].style.transform="none";
    }
}                      
// end manu visiable 

// start manu color change by scroll
document.addEventListener("scroll",scrollEvent);
function scrollEvent() {
    for (let id_scroll = 0; id_scroll <=4; id_scroll++) {

        let manu_bottom;
        if (document.body.clientWidth>=580) {
            manu_bottom=document.getElementsByTagName("ul")[0].offsetHeight;
        } else {
            manu_bottom=0;
        }

    // console.log(manu_bottom);
    let element_top=document.getElementById(id_scroll+10).offsetTop;
    let next_element_top=document.getElementById(id_scroll+11).offsetTop;
    // console.log(element_top);
    let scroll_top=document.documentElement.scrollTop;
    // console.log(scroll_top);

    if (scroll_top>=(element_top-manu_bottom) && scroll_top< (next_element_top-manu_bottom)) {
        document.getElementsByTagName("li")[id_scroll].style.color="red";
    }
    else {
        document.getElementsByTagName("li")[id_scroll].style.color="black";
    }
    }
    
}
// end manu color change by scroll 

                // end manu 
                
                // start home
// start of random dot 
for (let rank = 0; rank <=100; rank++) {
    let creat_dot=document.createElement("div");
    document.getElementsByClassName("home")[0].appendChild(creat_dot);
    creat_dot.className="animation_dot";

    document.getElementsByClassName("animation_dot")[rank].style.left=Math.random()*100+"%";
    document.getElementsByClassName("animation_dot")[rank].style.top=Math.random()*100+"%";
    document.getElementsByClassName("animation_dot")[rank].style.backgroundColor="rgb("+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+")"
}
   
setInterval(timer,10);
var timer=0;
function timer() {
    timer++;
    document.getElementsByClassName("animation_dot")[timer].style.left=Math.random()*100+"%";
    document.getElementsByClassName("animation_dot")[timer].style.top=Math.random()*100+"%";
    document.getElementsByClassName("animation_dot")[timer].style.backgroundColor="rgb("+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+")"
    if (timer==99) {
        timer=0;
    }
}       
// end of random dot 

                // end hone 

                // start about me 

// start circle click event of slider 
var creat_black_dot=document.createElement("div");
creat_black_dot.className="creat_black_dot";


document.getElementsByClassName("slider_move_circle")[0].appendChild(creat_black_dot);
function moveSlider(num) {
    document.getElementsByClassName("slider")[0].style.transform="rotateY("+(1-num)*90+"deg)";
    document.getElementsByClassName("slider_move_circle")[num].appendChild(creat_black_dot);
    slide_switch=num;

    if (num==0) {
        document.getElementsByClassName("slide_switch1")[0].style.display="none";
    }
    else{
        document.getElementsByClassName("slide_switch1")[0].style.display="flex";
    }

    if (num==2) {
        document.getElementsByClassName("slide_switch2")[0].style.display="none";
    }
    else{
        document.getElementsByClassName("slide_switch2")[0].style.display="flex";
    }
}
// end circle click event of slider

// start greater and less than click event of slider 
var slide_switch=0;
function slideSwitch1() {
    if (slide_switch==1) {
        moveSlider(0);
        slide_switch=0;
    }
    else if (slide_switch==2) {
        moveSlider(1);
        slide_switch=1;
    }
}
function slideSwitch2() {
    if (slide_switch==0) {
        moveSlider(1);
        slide_switch=1;
    }
    else if (slide_switch==1) {
        moveSlider(2);
        slide_switch=2;
    }
}
// end greater and less than click event of slider 

                // end about me 
                var w = window.innerWidth
                || document.documentElement.clientWidth
                || document.body.clientWidth;

window.onresize = () =>{
    // console.log(document.body.clientWidth);
    if (document.body.clientWidth>=580) {
        // console.log("call");
        document.getElementsByTagName("ul")[0].style.zIndex="5";
        document.getElementsByTagName("ul")[0].style.width="100%";
        document.getElementsByTagName("ul")[0].style.height="5vw";
        opeb_close=1;
    }
    if (document.body.clientWidth<=580) {
        // console.log("call");
        document.getElementsByTagName("ul")[0].style.width="0%";
        document.getElementsByTagName("ul")[0].style.zIndex="-6";
        document.getElementsByTagName("ul")[0].style.height="90vh";
        opeb_close=0;
    }
}


// start add image 

// start project image 
for (let img_no = 0; img_no <=11; img_no++) {
    document.getElementsByClassName("image")[img_no].style.backgroundImage = "url('"+(img_no+1)+".png')";
}

// end project image 

// start about me image 
document.getElementsByClassName("dlider_content1")[0].style.backgroundImage = "url('13.jpg')";
document.getElementsByClassName("dlider_content21")[0].style.backgroundImage = "url('14.jpg')";
// end add image 