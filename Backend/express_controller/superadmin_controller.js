const userModel = require('../Model/registeredusers');
const superAdminModel = require('../Model/super_admin');

const renderSuperAdminDashboard = async (req, res) => {
  try {
    const users = await userModel.find();
    const collegeAdmins = users.filter(u => u.role === 'college admin');
    const students = users.filter(u => u.role === 'student');

    res.render('superadmin_dashboard', {
      collegeAdmins,
      students
    });
  } catch (err) {
    res.status(500).send("Error loading dashboard");
  }
};

const superAdminLogin = async (req, res) => {
  const { email, passcode } = req.body;
  try {
    const admin = await superAdminModel.findOne({ email, passcode });
    if (!admin) return res.status(401).json({ success: false, message: "Invalid credentials" });

    res.status(200).json({ success: true, redirectUrl: '/superadmin/dashboard' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const approveUser = async (req, res) => {
  try {
    const user = await userModel.findByIdAndUpdate(req.params.id, {
      isApproved: true
    }, { new: true });
    if (!user) return res.status(404).json({ success: false, message: "User not found" });

    res.status(200).json({ success: true, message: "User approved" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const deleted = await userModel.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ success: false, message: "User not found" });

    res.status(200).json({ success: true, message: "User deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports = {
  renderSuperAdminDashboard,
  superAdminLogin,
  approveUser,
  deleteUser
};
