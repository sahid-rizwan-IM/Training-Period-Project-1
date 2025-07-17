const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const registeredUsersController = require('../express_controller/registeredusers_controller');


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '..', 'uploads', 'admin_users_logo'));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${req.body.collegeCode}-${file.originalname}`);
  }
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = ['image/jpeg', 'image/png'];
  if (allowedTypes.includes(file.mimetype)) cb(null, true);
  else cb(new Error('Only JPG or PNG files allowed'), false);
};

const upload = multer({ storage, fileFilter });

router.get('/get-user/:id', registeredUsersController.getUserById);
router.get('/get-all-users', registeredUsersController.getAllUsers);
router.post('/add-user', upload.single('logofile'), registeredUsersController.addUser);
router.put('/update-user/:id', upload.single('logofile'), registeredUsersController.updateUser);
router.delete('/delete-user/:id', registeredUsersController.deleteUser);

module.exports = router;
