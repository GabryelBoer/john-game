const john = document.querySelector('.john');
const cacto = document.querySelector('#cacto');
const score = document.querySelector('.score')
let count = 0;
let gameover = false
let alreadyJump = false;

const jump = () => {
    if(!john.classList.contains('jump')) {
        john.classList.add('jump');
        alreadyJump = true;

        setTimeout(() => {
            john.classList.remove('jump');
            alreadyJump = false;
        }, 500);
    }   
}

const loop = setInterval(() => {
    let johnPosition = +window.getComputedStyle(john).bottom.replace('px', '');
    let cactoPosition = cacto.offsetLeft;
    console.log(johnPosition);

    if(cactoPosition <= 175 && johnPosition <= 100 && cactoPosition > 50) {
        cacto.style.animation = 'none';
        cacto.style.left = `${cactoPosition}px`; 

        john.style.animation = 'none';
        john.style.bottom = `${johnPosition}px`;
        john.src = "../images/johnd.png";
        john.style.marginLeft = '-15px';
        gameover = true;
        clearInterval(loop);
        
        setTimeout(() => {
            alert("Game Over")
            location.reload();
        }, 100);
    }
    count++;
    score.innerHTML = `SCORE: ${count}`;
}, 10);


addEventListener("keydown", (e) => {
    if(e.code === 'Space' || e.code === 'ArrowUp' || e.key.toLowerCase() === 'w') {
        jump();
    }
});