gsap.to("#rotate_enter", {
  rotate: -360,
  repeat: -1,
  duration: 6.5,
  ease: "none",
});
window.addEventListener('mousemove', (e)=>{
    gsap.to('#cursor_follow', {
        top: e.clientY,
        left: e.clientX,
        duration: 0.5
    })
})
