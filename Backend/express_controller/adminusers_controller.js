const fs = require('fs');
const path = require('path');
// const myEvents = require('../Model/events');
const adminUserDataPath = path.join(__dirname, '..', 'Model', 'clg-admins.json');

const adminUserController = {
    getSingleAdminUser(req,res){
        try{
            const adminUserId = paresInt(req.params.id);
            const rawData = fs.readFileSync(adminUserDataPath);
            let adminUsers = JSON.parse(rawData);
            const singleAdminUser = adminUsers.filter(user => user.id === adminUserId);

            res.status(200).json({
                success: true,
                data: singleAdminUser,
                error: null,
                status: 200
            });
        } catch(err){
            res.status(500).json({
                success: false,
                data: null,
                error: err.message,
                status: 500
            });
        }
    },
    getAllAdminUsers(req, res) {
        try {
            const rawData = fs.readFileSync(adminUserDataPath);
            const adminUsers = JSON.parse(rawData)
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

    addAdminUser(req, res) {
        try {
            const { collegeCode, collegeName, email, password} = req.body;
            // const fileInfo = req.file ? req.file.filename : null;

            const newAdminUser = {
                id: new Date().getTime(),
                collegeCode,
                collegeName,
                email,
                password,
            };

            if (req.file) {
                newAdminUser.file = req.file.filename;
            }

            let adminUsers = [];
            if (fs.existsSync(adminUserDataPath)) {
                const rawData = fs.readFileSync(adminUserDataPath);
                adminUsers = JSON.parse(rawData);
            }

            if(newAdminUser.collegeCode in adminUsers){
                res.status(500).json({
                    success: false,
                    data: null,
                    error: "user already exists",
                    status: 500
                });
            } else{
                adminUsers.push(newAdminUser);
                fs.writeFileSync(adminUserDataPath, JSON.stringify(adminUsers, null, 2));
            }

            res.status(200).json({
                success: true,
                data: newAdminUser,
                message: 'New User added successfully',
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

    deleteAdminUser(req, res) {
        try {
            const adminUserId = parseInt(req.params.id);
            const rawData = fs.readFileSync(adminUserDataPath);
            let adminUsers = JSON.parse(rawData);

            const filteredUsers = adminUsers.filter(user => user.id !== adminUserId);

            fs.writeFileSync(adminUserDataPath, JSON.stringify(filteredUsers, null, 2));
            res.status(200).json({
                success: true,
                message: "Event deleted successfully",
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

    // updateEvent(req, res) {
    //     try {
    //         const adminUserId = parseInt(req.params.id);
    //         const eventBody = req.body;
    //         const fileInfo = req.file ? req.file.filename : null;

    //         const rawData = fs.readFileSync(adminUserDataPath);
    //         let events = JSON.parse(rawData);

    //         const eventIndex = events.findIndex(event => event.id === adminUserId);

    //         if (eventIndex === -1) {
    //             return res.status(404).json({
    //                 success: false,
    //                 error: "Event not found",
    //                 status: 404
    //             });
    //         }

    //         const updatedEvent = {
    //             id: adminUserId,
    //             ...eventBody
    //         };
    //         if (fileInfo) updatedEvent.file = fileInfo;

    //         events[eventIndex] = updatedEvent;
    //         fs.writeFileSync(adminUserDataPath, JSON.stringify(events, null, 2));

    //         res.status(200).json({
    //             success: true,
    //             message: "Event updated successfully",
    //             status: 200
    //         });

    //     } catch (err) {
    //         res.status(500).json({
    //             success: false,
    //             error: err.message,
    //             status: 500
    //         });
    //     }
    // }
}

module.exports = adminUserController;