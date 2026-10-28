document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM loaded cleanly");

    const form = document.getElementById("trailForm");
    const msg = document.getElementById("confirmationMessage");

    console.log("Form element:", form);
    console.log("Msg element:", msg);

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            console.log("Form submit caught!");

            const nameField = document.getElementById("fullName");
            const nameVal = nameField ? nameField.value : "Hiker";

            alert("Thank you, " + nameVal + "! Your spot has been successfully booked.");

            if (msg) {
                msg.style.display = "block";
                msg.style.visibility = "visible";
                msg.innerText = "Thank you, " + nameVal + "! Your spot has been successfully booked.";
            }

            form.reset();
        });
    } else {
        console.error("Could not find element with id='trailForm'");
    }
});