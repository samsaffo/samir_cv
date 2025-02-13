// script.js
let pressed = 0
function showError() {
    alert("Something went wrong");
}

function showMore(name,btnName){
    if(pressed == 0){
        let box = document.getElementById(name);
        box.style.display = "block";
        let btn = document.getElementById(btnName);
        btn.textContent = "Show less";
        pressed = 1;
    }
    else{
        let box = document.getElementById(name);
        box.style.display = "none";
        let btn = document.getElementById(btnName);
        btn.textContent = "Show more";
        pressed = 0;
    }
    /*if(name == "AboutMe"){
        //alert("about");
        if(pressed == 0){
            let box = document.getElementById("about_box");
            box.style.display = "block";
            let btn = document.getElementById("more_btn");
            btn.textContent = "Show less";
            pressed = 1;
        }
        else{
            let box = document.getElementById("about_box");
            box.style.display = "none";
            let btn = document.getElementById("more_btn");
            btn.textContent = "Show more";
            pressed = 0;
        }
    }
    else if(name == "Studies"){
        alert("studies");
        let box = document.getElementById("studies_box");
        if(pressed == 0){
            let box = document.getElementById("about_box");
            box.style.display = "block";
            let btn = document.getElementById("more_btn");
            btn.textContent = "Show less";
            pressed = 1;
        }
        else{
            let box = document.getElementById("about_box");
            box.style.display = "none";
            let btn = document.getElementById("more_btn");
            btn.textContent = "Show more";
            pressed = 0;
        }
    }
    else if(name == "Experties"){
        alert("experties");
        let box = document.getElementById("experties_box");
    }
    else{
        alert("else");
        let box = document.getElementById("projects_box");
    }*/
}

function toggleContent() {
    let content = document.getElementById("extraContent");
    content.style.display = content.style.display === "none" ? "block" : "none";
}
