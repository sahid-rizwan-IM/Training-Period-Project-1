const express = require('express');
const adminRouter = express.Router();
const path = require('path');
// const adminUsersValidator = require('../middleware/event_validation');
const adminUsersController = require('../express_controller/adminusers_controller');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '..', 'uploads', 'admin_users_logo'));
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png'];
    if (allowedTypes.includes(file.mimetype)) cb(null, true);
    else cb(new Error('Only JPG, JPEG or PNG are allowed'), false);
};

const upload = multer({ storage, fileFilter });

adminRouter.get('/get-adminuser/:id', adminUsersController.getSingleAdminUser);
adminRouter.get('/get-alladminusers', adminUsersController.getAllAdminUsers);
adminRouter.post('/add-adminuser',upload.single('file'),  adminUsersController.addAdminUser);
adminRouter.delete('/delete-adminuser/:id', adminUsersController.deleteAdminUser);
adminRouter.put('/update-adminuser/:id', adminUsersController.updateAdminUser);

module.exports = adminRouter;