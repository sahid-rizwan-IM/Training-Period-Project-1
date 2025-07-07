const frontendData = require('../dataModels/frontendData');
const path = require('path');
const rootDir = require('../express_routes/path');
const homeController = {
    getHomeNavData(req,res){
        try{
            res.status(200).json(
                {
                    success : true,
                    data : {
                        navTitle: frontendData.navTitle,
                        navData: frontendData.navData
                    },
                    error : null,
                    status : 200
                },
            );
        }
        catch(err){
            res.status(500).json({
                success : false,
                data : null,
                error : err.message,
                status : 500
            })
        }
    },

    getHomeContent(req,res){
        try{
            res.status(200).json({
                    success : true,
                    data : {
                        homeContent : frontendData.homeContent
                    },
                    error : null,
                    status : 200
            })
        }
        catch{
            res.status(500).json({
                success : false,
                data : null,
                error : err.message,
                status : 500
            })
        }
    },

    getHomeImages(req, res){
        try{
            const imageName = req.query.name;
            const imagePath = path.join(rootDir, '..', 'Frontend', 'static', 'images', imageName);
            res.status(200).sendFile(imagePath);
            //.json({
            //     success : true,
            //     data : true,
            //     error : null,
            //     status : 200
            // })
        }
        catch(err){
            res.status(500).json({
                success : false,
                data : null,
                error : err.message,
                status : 500
            })
        }
    },

    getHomeRoles(req,res){
        try{
            res.status(200).json({
                success : true,
                data :{
                    roles : frontendData.roles,
                    cardsName : frontendData.cardsName
                },
                error: null,
                status : 200
            })
        }
        catch(err){
            res.status(500).json({
                success : false,
                data : null,
                error : err.message,
                status : 500
            })
        }
    },

    getHomeFooter(req, res) {
        try{
            res.status(200).json({
                success : true,
                data : {
                    footer : frontendData.footer
                },
                error : null,
                status : 200
            })
        }
        catch(err){
            res.status(500).json({
                success : false,
                data : null,
                error : err.message,
                status : 500
            })
        }
    }
}

module.exports = homeController;