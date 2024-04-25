let passInput = document.querySelector("#pass-input");
let showBtn = document.querySelector("#show-pass");
let hideBtn = document.querySelector("#hide-pass");

showBtn.addEventListener("click", (e)=>{
    if(passInput.type === 'password'){
        passInput.type = 'text';
        hideBtn.style.display = 'block';
        showBtn.style.display = 'none';
    }
})
hideBtn.addEventListener("click", (e)=>{
    if(passInput.type === 'text'){
        passInput.type = 'password';
        hideBtn.style.display = 'none';
        showBtn.style.display = 'block';
    }
})