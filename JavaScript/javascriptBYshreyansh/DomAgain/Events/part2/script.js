let h = document.querySelector('h1');
window.addEventListener('keydown',function(dets){
if(dets.key===' '){
    h.textContent = 'spc'
} else {
    h.textContent = dets.key;
}
})