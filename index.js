function isPrimo(n) {
    if (n < 1) {
        console.log('insira um numero')
        return
    }
    for (i = 2; i < n; i++) {
        var verificacao = Number.isInteger(n / i)

        if (verificacao === true) {
            console.log('não é um numero primo')
            return
        }
    } console.log('esse é um numero primo')

    for (let i = 1; i <= 1000; i++) {
        if (isPrime(i)) {
          primes.push(i);
        }
      }
    
      return primes;


}


// questão 2 

function verificarSenha(senha) {
    const caracteresMinimos = senha.length >= 8;
    const possuiLetraMaiuscula = /[A-Z]/.test(senha);
    const possuiLetraMinuscula = /[a-z]/.test(senha);
    const possuiNumero = /[0-9]/.test(senha);
  
    return caracteresMinimos && possuiLetraMaiuscula && possuiLetraMinuscula && possuiNumero;
  }
  
  // Exemplo de uso da função
  const senha1 = "SenhaSegura123";
  const senha2 = "fraca123";
  
  console.log(`A senha '${senha1}' é válida? ${verificarSenha(senha1)}`);
  console.log(`A senha '${senha2}' é válida? ${verificarSenha(senha2)}`);
  




//questão 3 

function calcularFatorialdafunção(num) {
    if (num === 0 || num === 1) {
        console.log('insira um numero natural maior que 0')
      return 1;
    }
  
    let fatorial = 1;
    for (let i = 2; i <= num; i++) {
      fatorial *= i;
    }
  
    return fatorial;
  }
  
  // Calcular os fatorial de 1 a 10
  for (let i = 1; i <= 10; i++) {
    const resultado = calcularFatorialdafunção(i);
    console.log(`O fatorial de ${i} é: ${resultado}`);
  }



  //questao 4 

  function visQuadradoPerfeito(numero) {
    if (numero <= 0) {
        console.log('Insira um numero inteiro maior que 0')
        return
    }

    var raizNumero = numero ** (1 / 2)

    if (Number.isInteger(raizNumero)) {
        console.log('É um quadrado perfeito')

    } else {
        console.log('não é um quadrado perfeito')
    }
}