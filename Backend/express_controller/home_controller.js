const frontendData = require('../dataModels/frontendData');
const homeNavController = {
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
    }
}

// const

module.exports = homeNavController;