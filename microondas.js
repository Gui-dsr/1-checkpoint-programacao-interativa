function microondas (comida, tempo){
    let tempoCozimento;
    let mensagem = "";
    switch(comida){
        case 1: tempoCozimento = 10; 
        console.log("Pipoca"); break;
        case 2: tempoCozimento = 8; 
        console.log("Macarrão"); break;
        case 3: tempoCozimento = 15; 
        console.log("Carne"); break;
        case 4: tempoCozimento = 12; 
        console.log("Feijão"); break;
        case 5: tempoCozimento = 8;
        console.log("Brigadeiro");break;
        default: console.log("Prato inexistente."); mensagem = "";
        }

     mensagem = tempo > tempoCozimento && tempo <= tempoCozimento*2 ? "A comida queimou!"
         : tempo > tempoCozimento*2 || tempo > tempoCozimento*3 ? "Kabumm!"
         : tempo < tempoCozimento && tempo >= 0 ? "Tempo insuficiente!"
         : tempo = tempoCozimento ? "Prato pronto, bom apetite!" : ""
        console.log(mensagem);
    }
    microondas(1,1)


//a frase "Prato pronto, bom apetite!" só deixei pra comida que tivesse no tempo certo
