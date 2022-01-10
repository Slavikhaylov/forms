const form = document.querySelector('.form')
const firstName = document.getElementById('id_first_name')
const eFirstName = document.querySelector('.first_name')
const lastName = document.getElementById('id_last_name')
const eLastName = document.querySelector('.last_name')
let email = document.getElementById('id_email')
const eEmail = document.querySelector('.email')
const username = document.getElementById('id_username')
const eUsername = document.querySelector('.username')
const password1 = document.getElementById('id_new_password1')
const ePassword1 = document.querySelector('.password1')
const password2 = document.getElementById('id_new_password2')
const ePassword2 = document.querySelector('.password2')

let pass1
let pass2
let val
let err = 0
// const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// return re.test(String(email).toLowerCase())
// function validateEmail(email) {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }

function classRemove(nameTag) {
    nameTag.classList.remove('err')
}
function showError(nameTag) {
    nameTag.classList.add('err')  
    setTimeout(classRemove,5000 ,nameTag) 
} 

firstName.addEventListener('blur', (e)=>{
    if(document.getElementById('id_first_name').value == ""){
        showError(eFirstName) 
    }
})
lastName.addEventListener('blur', (e)=>{
    if(document.getElementById('id_last_name').value == ""){
        showError(eLastName)
    }
})
email.addEventListener('blur',(e)=>{
    val = document.getElementById('id_email').value
    if(! re.test(String(val).toLowerCase())){   
        showError(eEmail)
       }
    }  
)

username.addEventListener('blur', (e)=>{
    if(document.getElementById('id_username').value == ""){
        showError(eUsername) 
    }
})
password1.addEventListener('blur', (e)=>{
    pass1 = document.getElementById('id_new_password1').value
    if(pass1.length < 8){
        showError(ePassword1) 
    }
})  
password2.addEventListener('blur', (e)=>{
    pass1 = document.getElementById('id_new_password1').value
    pass2 = document.getElementById('id_new_password2').value
    if(pass1 != pass2){
        showError(ePassword2) 
    }
})  



form.addEventListener('submit', (e)=>{
    e.preventDefault()
    
        if(document.getElementById('id_first_name').value == ""){
            showError(eFirstName) 
            err++
        }
    
        if(document.getElementById('id_last_name').value == ""){
            showError(eLastName)
            err++
        }
        val = document.getElementById('id_email').value
        if(! re.test(String(val).toLowerCase())){   
            showError(eEmail)
            err++
           }
        
    
    
        if(document.getElementById('id_username').value == ""){
            showError(eUsername) 
            err++
        }
    
    
        pass1 = document.getElementById('id_new_password1').value
        if(pass1.length < 8){
            showError(ePassword1) 
            err++
        }
        pass1 = document.getElementById('id_new_password1').value
        pass2 = document.getElementById('id_new_password2').value
        if(pass1 != pass2){
            showError(ePassword2) 
            err++
        }
        e.preventDefault
    
        if(err === 0){
            document.querySelector('.form_button-submit').submit()
        }
    
})



