function createLoginTracker(userInfo) {
    let attemptCount = 0;

    return (passwordAttempt) => {
        attemptCount++;

        // Too many attempts
        if (attemptCount > 3) {
            return "Account locked due to too many failed login attempts";
        }

        // Correct password and attempt is ≤ 3
        if (passwordAttempt === userInfo.password) {
            return "Login successful";
        }

        // Wrong password but attempt still ≤ 3
        return `Attempt ${attemptCount}: Login failed`;
    };
}



module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};// ----- TESTING -----
const user = {
    username: "ivy",
    password: "1234"
};

const login = createLoginTracker(user);

console.log(login("1111")); // wrong
console.log(login("2222")); // wrong
console.log(login("1234")); // correct
console.log(login("0000")); // locked
