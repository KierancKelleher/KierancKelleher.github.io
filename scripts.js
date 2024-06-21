document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("quoteForm");

    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        try {
            const response = await fetch(form.action, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                alert("Thank you! Your request has been sent successfully.");
                form.reset(); // Clear the form
            } else {
                alert("Oops! There was a problem submitting your form.");
            }
        } catch (error) {
            alert("There was an error submitting the form. Please try again later.");
        }
    });
});
