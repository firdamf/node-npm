const bcrypt = require('bcryptjs');
const colors = require(`colors`)
bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash("makers", salt, function(err, hash) {
        console.log("passwordnya jadi",hash.rainbow)
        // Store hash in your password DB.
    });
});