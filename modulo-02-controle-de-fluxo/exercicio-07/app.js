// break e continue

const score = [ 50,25,0,30,100,20,10]

for ( let i = 0 ; i < score.length ; i ++){
    if(score [i] === 0){
        continue
    }
    console.log(`Sua pontuação é : ${score[i]}`);

    if( score[i]===100){
        console.log('Parabens, você atinguiu sua pontuação máxima ');
        break
    }

}

// switch e statement 

const nota = 'B'

switch(nota){
    case 'A':
        console.log('Você tirou um : A ');
        break
    case 'B':
        console.log('Você tirou um : B ');
         break
    case 'C':
        console.log('Você tirou um : C ');
         break
    case 'D':
        console.log('Você tirou um : D ');
         break
    case 'E':
        console.log('Você tirou um : E ');
         break
    default:
        console.log('Nota inválida');
         break
    
            
}