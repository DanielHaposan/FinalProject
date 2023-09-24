

function formSubmitted(event){
   

  
    let usernameTxt = document.getElementById('nameTxt')
    
    let username = usernameTxt.value 
   

    let email = document.getElementById('emailTxt').value 
    let phone = document.getElementById('phoneTxt').value 
    let country = document.getElementById('countryTxt').value 
    let checkBox = document.getElementById('checkBox').checked

    
    if (username.length <= 5){
        alert('Username must be more than 5 in characters length')
    }
   
    else if (!email.endsWith('@yahoo.co.id') && !email.endsWith('@gmail.com')){
        alert('Email must ends with @gmail.com or @yahoo.co.id')
    }
    else if(phone.length <= 10){
        alert('Number must be atleast 10 digit')


    }
 

    
    else if (!country.endsWith('Malaysia') && !country.endsWith('Indonesia') && !country.endsWith('Singapore') ) {
        alert('Country must be Indonesia,Malaysia or Singapore')
    }
    
    else if (!checkBox){
        alert('You must agree with the terms and conditions')
    }
    alert(`register successfull and the gender is ${Name}`)


    event.preventDefault()  
}

