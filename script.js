const passwordInput = document.getElementById('password-input');
const strengthBar = document.getElementById('strength-bar');
const strengthText = document.getElementById('strength-text');
const conditions = {
    length: document.getElementById('length-condition'),
    uppercase: document.getElementById('uppercase-condition'),
    number: document.getElementById('number-condition'),
    special: document.getElementById('special-condition'),
};

passwordInput.addEventListener('input', () => {
    const password = passwordInput.value;
    const strength = checkPasswordStrength(password);
    updateStrengthBar(strength);
    updateConditions(password);
});

function checkPasswordStrength(password) {
    let strength = 0;

    // طول رمز عبور
    if (password.length >= 8) strength += 25;

    // حروف بزرگ و کوچک
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength += 25;

    // اعداد
    if (/\d/.test(password)) strength += 25;

    // کاراکترهای خاص
    if (/[!@#$%^&*]/.test(password)) strength += 25;

    return strength;
}

function updateStrengthBar(strength) {
    strengthBar.style.width = `${strength}%`;

    if (strength < 50) {
        strengthBar.style.backgroundColor = '#e74c3c';
        strengthText.textContent = 'ضعیف';
    } else if (strength < 75) {
        strengthBar.style.backgroundColor = '#e67e22';
        strengthText.textContent = 'متوسط';
    } else {
        strengthBar.style.backgroundColor = '#2ecc71';
        strengthText.textContent = 'قوی';
    }
}

function updateConditions(password) {
    conditions.length.classList.toggle('valid', password.length >= 8);
    conditions.uppercase.classList.toggle('valid', /[a-z]/.test(password) && /[A-Z]/.test(password));
    conditions.number.classList.toggle('valid', /\d/.test(password));
    conditions.special.classList.toggle('valid', /[!@#$%^&*]/.test(password));
}