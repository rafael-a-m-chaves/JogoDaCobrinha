let canvas = document.getElementById('cobra');
let context = canvas.getContext('2d');
let box = 32;
let cobra = [];
let direcao = "direita";
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}
let nomeJogador ='';
let pontuacao = 0;

cobra[0] ={
    x:8 * box,
    y:8 * box
}

function criarBG(){
    context.fillStyle = "lightgreen";
    context.fillRect(0,0,16 * box, 16 * box);
}

function criarCobrinha(){
    for(i=0; i<cobra.length;i++){
        context.fillStyle = 'green';
        context.fillRect(cobra[i].x, cobra[i].y, box, box);
    }
}

function dropfood(){
    context.fillStyle='red';
    context.fillRect(food.x, food.y , box, box);
}

document.addEventListener('keydown', update);

function update (event){
    if(event.keyCode == 37 && direcao !='direita'){direcao="esquerda"};
    if(event.keyCode == 38 && direcao !='abaixo'){direcao="acima"};
    if(event.keyCode == 39 && direcao !='esquerda'){direcao='direita'};
    if(event.keyCode == 40 && direcao !='acima'){direcao='abaixo'};
}

function iniciarJogo(){
    
    for(i=1; i < cobra.length;i++){
        if(cobra[0].x == cobra[i].x && cobra[0].y == cobra[i].y){
            clearInterval(jogo);
            alert('Game Over');
        }
    }

    if(cobra[0].x > 15 * box ){cobra[0].x=0};
    if(cobra[0].x < 0 * box ){cobra[0].x=16 * box};
    if(cobra[0].y > 15 * box ){cobra[0].y=0};
    if(cobra[0].y < 0 * box ){cobra[0].y=16 * box};
    
    criarBG();
    criarCobrinha();
    dropfood();

    let cobraX=cobra[0].x;
    let cobraY=cobra[0].y;

    if(direcao == 'direita'){cobraX += box};
    if(direcao == 'esquerda'){cobraX -= box};
    if(direcao == 'acima'){cobraY -= box};
    if(direcao == 'abaixo'){cobraY += box};

    if(cobraX != food.x || cobraY != food.y){
        cobra.pop();
    }else{
        food.x = Math.floor(Math.random() * 15 + 1) * box;
        food.y = Math.floor(Math.random() * 15 + 1) * box;
        
    }

    
    let novaCabeca ={
        x: cobraX,
        y: cobraY
    }
    cobra.unshift(novaCabeca);
}

function inicionivel(){
    nivel = document.getElementById('dificuldade')
    console.log(nivel.value)
    jogo = setInterval(iniciarJogo,nivel.value);

}

function mostrapontuacao(){

}