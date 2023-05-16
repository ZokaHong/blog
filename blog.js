var box001 = document.getElementById("001");
var box002 = document.getElementById("002");
var box003 = document.getElementById("003");
var box004 = document.getElementById("004");


box001.addEventListener("mouseover", function(){
    box001.innerHTML = "001-text";
})
box001.addEventListener("mouseout", function(){
    box001.innerHTML = "001";
})

box002.addEventListener("mouseover", function(){
    box002.innerHTML = "002-text";
})
box002.addEventListener("mouseout", function(){
    box002.innerHTML = "002";
})

box003.addEventListener("mouseover", function(){
    box003.innerHTML = "003-text";
})
box003.addEventListener("mouseout", function(){
    box003.innerHTML = "003";
})

box004.addEventListener("mouseover", function(){
    box004.innerHTML = "004-text";
})
box004.addEventListener("mouseout", function(){
    box004.innerHTML = "004";
})