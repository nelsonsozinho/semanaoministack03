const Dev = require('../models/Dev')

module.exports = {

    async store(req, resp) {
        console.log(req.params.devId);
        console.log(req.headers.user);

        const {user} = req.headers;
        const {devId} = req.params;

        const loggedDev = await Dev.findById(user);
        let targetDev = null;

        try {
            targetDev = await Dev.findById(devId);
        } catch(error) {
            return resp.status(400).json({error: 'Dev not exist'});
        }

        if(targetDev.likes.includes(loggedDev._id)) {
            const loggedSocket = req.connectedUsers[user];
            const targetSocket = req.connectedUsers[devId];

            if(loggedSocket) {
                req.io.to(loggedSocket).emmit('match', targetDev);
            }

            if(targetSocket) {
                req.io.to(targetSocket).emmit('match', loggedDev);
            }
        }

        loggedDev.likes.push(targetDev._id);
        
        await loggedDev.save();

        return resp.json(loggedDev);
    }

}