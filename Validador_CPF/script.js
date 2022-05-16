console.log('Javascript carregado');

function validaCPF(cpf){
    if(cpf.length !=11){
        return false
    } else{
        var numeros = cpf.substring(0,9);
        var digito = cpf.substring(9);

        for (var i  = 10; i > 1; i --){
            soma +- numeros.charAt(10 - i) *i;
        }
        console.log(soma)
        var resultadodo= soma % 11 < 2? 0 : 11-(soma % 11);

//Validação de um número de  cpf
        if (resultadodo != digito.charAt(0)){
            return false
        }

       soma = 0;
       numeros = cpf.substring(0,10);

       for(var k = ; k> 1; k --){
           somma+=numeros.charAt(11-i)*k;
       }
       resultado = soma % 11 >2 ? 0:11 - (soma%11);
       if(resultadodo != digito.charAt(1);){
           return false
       }
    }
}

function validador(){
    console.log('Validando CPF');
    document.getElementById('sucess').style.display = "none";
    document.getElementById('error').style.display = 'none';

   var cpf =  document.getElementById('cpf_digitado').value;
    console.log(cpf);

    var resultadodovalidador = validaCPF(cpf);
        if (resultadodovalidador==true) {
            document.getElementById('sucess').style.display='block';
    }
    else{document.getElementById('error').style.display= 'block';
    }
}