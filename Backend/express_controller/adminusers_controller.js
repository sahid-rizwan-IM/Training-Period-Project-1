const adminUsersModels = require('../Model/clgadminusers');

const adminUsersController = {
  async getSingleAdminUser(req, res) {
    try {
      const adminUserId = req.params.id;
      const adminUser = await adminUsersModels.findOne({ _id: adminUserId });

      if (!adminUser) {
        return res.status(404).json({
          success: false,
          error: "College Admin User not found",
          status: 404
        });
      }

      res.status(200).json({
        success: true,
        data: adminUser,
        error: null,
        status: 200
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        data: null,
        error: err.message,
        status: 500
      });
    }
  },

  async getAllAdminUsers(req, res) {
  try {
    const adminUsers = await adminUsersModels.find();

    res.status(200).json({
      success: true,
      data: adminUsers,
      error: null,
      status: 200
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      data: null,
      error: err.message,
      status: 500
    });
  }
},

  async addAdminUser(req, res) {
    try {
      const { collegeCode, collegeName, email, password } = req.body;
      const logofile = req.file ? req.file.filename : null;

      const newClgAdminUser = new adminUsersModels({
        collegeCode,
        collegeName,
        email,
        password,
        logofile
      });

      await newClgAdminUser.save();

      res.status(200).json({
        success: true,
        data: newClgAdminUser,
        message: "College Admin User created successfully",
        status: 200
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        data: null,
        error: err.message,
        status: 500
      });
    }
  },

  async deleteAdminUser(req, res) {
    try {
      const adminUserId = req.params.id;
      const deleted = await adminUsersModels.findOneAndDelete({ _id: adminUserId });

      if (!deleted) {
        return res.status(404).json({
          success: false,
          error: "College Admin User not found",
          status: 404
        });
      }

      res.status(200).json({
        success: true,
        message: "College Admin User deleted successfully",
        status: 200
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        error: err.message,
        status: 500
      });
    }
  },

  async updateAdminUser(req, res) {
    try {
      const adminUserId = req.params.id;
      const updatedData = req.body;
      if (req.file) {
        updatedData.logofile = req.file.filename;
      }

      const updated = await adminUsersModels.findOneAndUpdate(
        { _id: adminUserId },
        updatedData,
        { new: true }
      );

      if (!updated) {
        return res.status(404).json({
          success: false,
          error: "College Admin User not found",
          status: 404
        });
      }

      res.status(200).json({
        success: true,
        message: "Admin User updated successfully",
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
};

module.exports = adminUsersController;
