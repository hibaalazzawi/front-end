document.getElementById("gone").addEventListener('click',function(e){
    e.preventDefault();
    document.querySelector(".main").style.display="flex";
document.querySelector(".main").style.transform="rotateY(180deg)";
});
document.getElementById("submits").addEventListener('click',function(e){
    e.preventDefault();
document.querySelector(".form").style.display="none";

});
document.getElementById("arrow").addEventListener('click',function(){
    document.querySelector(".main").style.transform="rotateY(360deg)";
    });
function save(){
    alert("لقد تم حفظ البيانات");
}
document.getElementById("icons").addEventListener('click',function(){
document.querySelector(".main").style.transform="rotateY(180deg)";

});