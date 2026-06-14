let abcd = document.querySelector("#xyz");

// abcd.addEventListener("mouseover",function(){
// abcd.style.backgroundColor = "yellow"
// })                                                // for changing color of div
// abcd.addEventListener("mouseout",function(){
// abcd.style.backgroundColor = "red"
// })




window.addEventListener("mousemove",function(dets){
abcd.style.top = dets.clientY + "px";
abcd.style.left = dets.clientX + "px";
})