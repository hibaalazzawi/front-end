
document.getElementById("open").addEventListener('click',function(e){
    e.preventDefault();
document.querySelector(".bg").style.display="flex";
document.getElementById("login").href="Opcard.html";
}
);
document.getElementById("creat").addEventListener('click',function(e){
    e.preventDefault();
document.querySelector(".bg").style.display="flex";
document.getElementById("login").href="CreatCard.html";
});

    document.getElementById("closed").addEventListener('click',function(e){
        e.preventDefault();
    document.querySelector(".bg").style.display="none";
});

