const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

let width = screen.width;

if(width > 768){

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() =>{
        mario.classList.remove('jump');
    }, 800);
};

document.addEventListener('keydown', jump);
document.addEventListener('touchstart', jump);

const loopGame = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if(pipePosition <= 160 && pipePosition > 40 && marioPosition < 80){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/mario-game-over.png';
        mario.style.width = '75px';
        mario.style.bottom = '120px';
        mario.style.left = '120px';

        clearInterval(loopGame);
    }

},10);

}else{

    const jump = () => {
        mario.classList.add('jump');
    
        setTimeout(() =>{
            mario.classList.remove('jump');
        }, 1000);
    };
    
    document.addEventListener('keydown', jump);
    document.addEventListener('touchstart', jump);
    
    const loopGame = setInterval(() => {
    
        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
        console.log(marioPosition);
    
        if(pipePosition <= 110 && pipePosition > 40 && marioPosition < 60){
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;
    
            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;           
    
            mario.src = './images/mario-game-over.png';
            mario.style.width = '50px';
            mario.style.bottom = '80px';
            mario.style.left = '26px';
    
            clearInterval(loopGame);
            
            
        }
    
    },10);

}
