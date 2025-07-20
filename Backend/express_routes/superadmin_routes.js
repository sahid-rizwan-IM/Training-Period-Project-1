const express = require('express');
const router = express.Router();
const superAdminController = require('../express_controller/superadmin_controller');

// router.get('/dashboard', superAdminController.renderSuperAdminDashboard);
// router.post('/login', superAdminController.superAdminLogin);

router.put('/approve-user/:id', superAdminController.approveUser);
router.delete('/delete-user/:id', superAdminController.deleteUser);

module.exports = router;

