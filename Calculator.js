var wrapDiv = document.getElementById("wrap");

for(let i = 0; i < wrapDiv.childElementCount; i++){
    var id = wrapDiv.children[i].getAttribute("id");
    wrapDiv.children[i].style = "grid-area : "+id;
};