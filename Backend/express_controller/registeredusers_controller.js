const UserModel = require('../Model/registeredusers');

const registeredUsersController = {
  
  async getUserById(req, res) {
    try {
      const user = await UserModel.findById(req.params.id);
      if (!user) {
        return res.status(404).json({ 
          success: false, 
          error: "User not found" 
        });
      }
      res.status(200).json({ success: true, data: user });
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }
  },

  async getAllUsers(req, res) {
    try {
      const users = await UserModel.find();
      res.status(200).json({ success: true, data: users });
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }
  },

  async addUser(req, res) {
  try {
    const { role } = req.body;

    let newUserData = {
      role,
      collegeCode : req.body.collegeCode,
      email: req.body.email,
      password: req.body.password,
    };

    if (role === 'college admin') {
      newUserData.collegeName = req.body.collegeName;
      newUserData.affiliationNumber = req.body.affiliationNumber;
      newUserData.location = req.body.location;

      if (req.file) {
        newUserData.logofile = req.file.filename;
      }
      
    } else if (role === 'student') {
      newUserData.studentName = req.body.studentName;
      newUserData.registerNumber = req.body.registerNumber;
    }

    const user = new UserModel(newUserData);
    await user.save();
    console.log("BODY:", req.body);
    console.log("FILE:", req.file);
    res.status(201).json({ success: true, message: "User registered successfully", data: user });
  } catch (err) {
    console.error("Error in addUser:", err);
    res.status(500).json({ success: false, message: "Registration failed", error: err.message });
  }
},
  async deleteUser(req, res) {
    try {
      const userId = req.params.id;
      const deleted = await UserModel.findByIdAndDelete(userId);
      if (!deleted) {
        return res.status(404).json({
          success: false,
          error: "User not found"
        });
      }
      res.status(200).json({
        success: true,
        message: "User deleted successfully"
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        error: err.message
      });
    }
  },

  async updateUser(req, res) {
  try {
    const userId = req.params.id;
    const updateFields = { ...req.body };


    if (req.file) {
      updateFields.logoFile = req.file.filename;
    }


    if (updateFields.role === 'student') {
      delete updateFields.collegeName;
      delete updateFields.logoFile;
      delete updateFields.affiliationNumber;
      delete updateFields.location;
    } 
    else if (updateFields.role === 'college admin') {
        delete updateFields.studentName;
        delete updateFields.registerNumber;
    }

    const updatedUser = await UserModel.findByIdAndUpdate(userId, updateFields, {
      new: true,
      runValidators: true
    });

    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        error: "User not found",
        status: 404
      });
    }

    res.status(200).json({
      success: true,
      data: updatedUser,
      message: "User updated successfully",
      status: 200
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
      status: 500
    });
  }
}

}

module.exports = registeredUsersController;