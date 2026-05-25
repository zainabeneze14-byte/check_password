function checkPassword(){

    let password =
    document.getElementById("password").value;

    let strength =
    document.getElementById("strength");

    let bar =
    document.getElementById("bar");

    let score = 0;

    // LENGTH CHECK
    if(password.length >= 8){

        score++;

        document.getElementById("lengthCheck").innerText =
        " At least 8 characters";
    }

    else{

        document.getElementById("lengthCheck").innerText =
        " At least 8 characters";
    }

    // UPPERCASE CHECK
    if(/[A-Z]/.test(password)){

        score++;

        document.getElementById("upperCheck").innerText =
        " Uppercase letter";
    }

    else{

        document.getElementById("upperCheck").innerText =
        " Uppercase letter";
    }

    // NUMBER CHECK
    if(/[0-9]/.test(password)){

        score++;

        document.getElementById("numberCheck").innerText =
        " Number";
    }

    else{

        document.getElementById("numberCheck").innerText =
        " Number";
    }

    // SYMBOL CHECK
    if(/[^A-Za-z0-9]/.test(password)){

        score++;

        document.getElementById("symbolCheck").innerText =
        " Special symbol";
    }

    else{

        document.getElementById("symbolCheck").innerText =
        " Special symbol";
    }

    // STRENGTH LEVEL
    if(score <= 1){

        strength.innerText = "Weak ";

        strength.style.color = "red";

        bar.style.width = "25%";

        bar.style.background = "red";
    }

    else if(score <= 3){

        strength.innerText = "Medium ";

        strength.style.color = "orange";

        bar.style.width = "70%";

        bar.style.background = "orange";
    }

    else{

        strength.innerText = "Strong ";

        strength.style.color = "lime";

        bar.style.width = "100%";

        bar.style.background = "lime";
    }

}

function togglePassword(){

    let password =
    document.getElementById("password");

    if(password.type === "password"){

        password.type = "text";
    }

    else{

        password.type = "password";
    }
}