function formValidation(){
    console.log("odbuebfuebfe");
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    
    let isValid = true;
    console.log(name);

    if(String(name).trim() === ""){
    isValid = false;
    document.getElementById("namemessage").innerHTML = "<p>enter valid name !!!</p>";
}
else{
    document.getElementById("namemessage").innerHTML = "";
    
    }
    
    const validemail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!validemail.test(email)){
        isValid = false;
        document.getElementById("emailmessage").innerHTML = "<p>enter valid email !!!</p>";
    }
    else{
        document.getElementById("emailmessage").innerHTML = "";

    }
    
    if(isNaN(age) || age<=18){
        isValid = false;
        document.getElementById("agemessage").innerHTML = "<p>age must be greater than 18 !!!</p>";
    }
    else{
        document.getElementById("agemessage").innerHTML = "";
        
    }
    
    
    if(gender === ""){
        isValid = false;
        document.getElementById("gendermessage").innerHTML = "<p>selct a valid gender !!!</p>";
        
    }
    else{
        document.getElementById("gendermessage").innerHTML = "";

    }
    
    if (isValid) {
        const formData = {
            name: name,
            email: email,
            age: age,
            gender: gender
        };
        localStorage.setItem('formData'+name, JSON.stringify(formData));
        alert('Form submitted successfully!');
        location.reload();
    }

    return isValid;
    
}