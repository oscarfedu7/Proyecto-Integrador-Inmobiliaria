window.addEventListener('load', function(){
    // copia y pega el codigo de la etapa 1 aca 
    let form = document.querySelector('#form')
    let button = document.querySelector('#button')
    let firstName = document.querySelector('#firstName')
    let lastName = document.querySelector('#lastName')
    let nameError = document.querySelector('#nameError')
    let lastNameError = document.querySelector('#lastNameError')
    let email = document.querySelector('#mail')
    let emailError = document.querySelector('#emailError')
    let city = document.querySelector('#city')
    let cityError = document.querySelector('#cityError')
    let address = document.querySelector('#address')
    let addressError = document.querySelector('#addressError')
    let codigo_postal = document.querySelector('#codigo_postal')
    let codigo_postal_Error = document.querySelector('#codigo_postal_Error')
    
    let pass = document.querySelector('#pass')
    let passError = document.querySelector('#passError')
   /* let repassword = document.querySelector('#repassword')
    let repasswordError = document.querySelector('#repasswordError')
    */

    // desarrolla tu codigo aca 
    button.addEventListener("click", function(event){
        event.preventDefault();
        let errores ={};

        if(firstName.value.length < 1){
            errores.firstName = 'Debe de tener al menos 2 caracteres en el nombre';
        }
        if(lastName.value.length < 1){
            errores.lastName = 'Debe de tener al menos 2 caracteres en el apellido';
        }
        if(!email.value.includes("@")){
            errores.email='Debe escribir un email válido'
        }
        if(city.value.length < 1){
            errores.city = 'Debes escribir la ciudad';
        }
        
        if(address.value.length < 1){
            errores.address = 'Debes escribir tu dirección';
        }
        
        if(codigo_postal.value.length != 5 || !Number.isInteger(codigo_postal.value)){
            errores.codigo_postal = 'Debes escribir un código postal válido (5 números)';
        }
        if(pass.value.length < 1){
            errores.pass = 'Debes escribir una contraseña';
        }

      /*  if(password.value.length < 1){
            errores.password='Este campo debe estar completo'
        }
        if(repassword.value.length < 1){
            errores.repassword = 'Este campo debe estar completo'
        }*/
        if(Object.keys(errores).length >= 1){
            nameError.innerText = (errores.firstName) ? errores.firstName : '';
            if(errores.firstName){
                firstName.classList.add("fill");
            }
            else{
                firstName.classList.remove("fill");
            }
            lastNameError.innerText = (errores.lastName) ? errores.lastName : '';
            if(errores.lastName){
                lastName.classList.add("fill");
            }
            else{
                lastName.classList.remove("fill");
            }
            emailError.innerText = (errores.email) ? errores.email : '';
            if(errores.email){
                email.classList.add("fill");
            }
            else{
                email.classList.remove("fill");
            }
            cityError.innerText = (errores.city) ? errores.city : '';
            if(errores.city){
                city.classList.add("fill");
            }
            else{
                city.classList.remove("fill");
            }
            addressError.innerText = (errores.address) ? errores.address : '';
            if(errores.address){
                address.classList.add("fill");
            }
            else{
                address.classList.remove("fill");
            }
            codigo_postal_Error.innerText = (errores.codigo_postal) ? errores.codigo_postal : '';
            if(errores.codigo_postal){
                codigo_postal.classList.add("fill");
            }
            else{
                codigo_postal.classList.remove("fill");
            }
            passError.innerText = (errores.pass) ? errores.pass : '';
            if(errores.pass){
                pass.classList.add("fill");
            }
            else{
                pass.classList.remove("fill");
            }
        }
        else{
            form.submit();
        }
    })

})

// timeout before a callback is called

let timeout;

// traversing the DOM and getting the input and span using their IDs

let password = document.getElementById('pass')
let strengthBadge = document.getElementById('passError')

// The strong and weak password Regex pattern checker

let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))')

function StrengthChecker(PasswordParameter){
    // We then change the badge's color and text based on the password strength

    if(strongPassword.test(PasswordParameter)) {
        strengthBadge.style.backgroundColor = "green"
        strengthBadge.textContent = 'Strong'
    } else if(mediumPassword.test(PasswordParameter)){
        strengthBadge.style.backgroundColor = 'blue'
        strengthBadge.textContent = 'Medium'
    } else{
        strengthBadge.style.backgroundColor = 'red'
        strengthBadge.textContent = 'Weak'
    }
}

// Adding an input event listener when a user types to the  password input 

password.addEventListener("input", () => {

    //The badge is hidden by default, so we show it

    strengthBadge.style.display= 'block'
    clearTimeout(timeout);

    //We then call the StrengChecker function as a callback then pass the typed password to it

    timeout = setTimeout(() => StrengthChecker(password.value), 500);

    //Incase a user clears the text, the badge is hidden again

    if(password.value.length !== 0){
        strengthBadge.style.display != 'block'
    } else{
        strengthBadge.style.display = 'none'
    }
});
