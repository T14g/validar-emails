//Usei Regular expressions para validar se:
//-O email não está vazio
//-O email é de um dos 3 provedores gratuitos informados
//-O email é válido

const verificar     = document.querySelector('#verificar');
const emailInput    = document.querySelector('#email');
const errorEmail    = document.querySelector('#error-email');
const rules         = [/^[\w.+\-]+@gmail\.com$/,/^[\w.+\-]+@outlook\.com$/, /^[\w.+\-]+@hotmail\.com$/];

verificar.addEventListener('click',(e) =>{
    e.preventDefault();

    const {value} = emailInput;

    if (rules.some(r => r.test(value.toLowerCase()))) {

        //Esconde a mensagem de erro se estiver visível
        if(!errorEmail.classList.contains('d-none')){
            errorEmail.classList.add('d-none');
        }


    } else {

        //Mostra a mensagem de erro
        if(errorEmail.classList.contains('d-none')){
            errorEmail.classList.remove('d-none');
        }
    }
})
    
