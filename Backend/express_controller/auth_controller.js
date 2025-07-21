const RegisteredUser = require('../Model/registeredusers');
// const bcrypt = require('bcrypt');

const authController = {
  async loginUser (req, res){
  try {
    const { email, collegeCode, password } = req.body;

    console.log("Login received:", req.body);

    // First, find by email only
    const user = await RegisteredUser.findOne({ email });
    console.log("Found user by email:", user);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (String(user.collegeCode) !== String(collegeCode)) {
      return res.status(401).json({ message: "Incorrect college code" });
    }

    if (!user.isApproved) {
      return res.status(403).json({ message: "Your account is not approved yet. Please contact Super Admin." });
    }

    // password1= String(password);
    // const isPasswordValid = await bcrypt.compare(password1, user.password);
    // console.log(user.password);
    if (password !== user.password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    req.session.userId = user._id;
    req.session.user = user;

    res.status(200).json({
      success: true,
      userid: user._id,
      role: user.role,
      message: "Login successful"
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ success: false, message: 'Server error', error: err.message });
  }
},

async logoutUser (req, res) {
    req.session.destroy(err => {
        if (err) return res.status(500).send("Logout failed");
        res.redirect('/login'); // or send JSON
    })
}

}

module.exports = authController;