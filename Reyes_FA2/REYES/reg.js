document.getElementById("phone").value = "09"; 

document.getElementById("phone").addEventListener("input", function(event) {
    let value = this.value.replace(/[^0-9]/g, "");

    if (!value.startsWith("09")) { 
        alert("Phone number must start with '09'.");
        this.value = "09"; 
    }

    if (value.length > 11) {
        alert("Phone number must be exactly 11 digits long.");
        this.value = value.slice(0, 11); 
    }
});

document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let fullName = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let phone = document.getElementById("phone").value;
    let gender = document.querySelector('input[name="gender"]:checked')?.value;
    let dob = document.getElementById("dob").value;
    let course = document.getElementById("course").value;
    let termsAccepted = document.getElementById("terms").checked;

    if (!gender) {
        alert("Please select a gender.");
        return;
    }

    if (!termsAccepted) {
        alert("Please accept the terms and conditions.");
        return;
    }

    if (phone.length !== 11 || !phone.startsWith("09")) {
        alert("Phone number must start with '09' and be 11 digits long.");
        return;
    }


    alert(`Registration Completed Successfully!\n\nFull Name: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nGender: ${gender}\nDate of Birth: ${dob}\nCourse: ${course}`);

    document.getElementById("registrationForm").reset();
    document.getElementById("phone").value = "09"; 
});
