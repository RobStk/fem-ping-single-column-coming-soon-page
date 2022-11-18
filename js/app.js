const form = document.querySelector('.email-subscribe');
form.addEventListener("submit", validateEmail);

function validateEmail(event) {
    event.preventDefault();

    const errorEmpty = "Whoops! It looks like you forgot to add your email";
    const errorStruct = "Please provide a valid email address";

    const input = event.target.querySelector('input[type=email]');
    const inputValue = input.value;

    const isValid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(inputValue);


    if (!isValid) {
        if (inputValue === "") showError(input, errorEmpty);
        else showError(input, errorStruct);
        return;
    }

    resetErrors(input);
    console.log("Email validation success");
}

function showError(input, msg) {
    const container = input.parentElement;
    container.classList.add('error');
    container.setAttribute("data-error", msg);
}

function resetErrors(input) {
    const container = input.parentElement;
    container.classList.remove('error');
    container.removeAttribute("data-error");
}