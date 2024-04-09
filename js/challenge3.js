window.addEventListener("load", function() {
    var fig2 = document.querySelectorAll('figcaption')[1].innerHTML;
    this.alert(fig2);
});

document.querySelector('.thumbnail').addEventListener("mouseover", function() {
    console.log("hovered");
    document.querySelector('body').style.backgroundImage = this;
});