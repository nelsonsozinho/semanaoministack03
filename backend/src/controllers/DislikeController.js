const Dev = require('../models/Dev')

module.exports = {

    async store(req, resp) {
        console.log(req.params.devId);
        console.log(req.headers.user);

        const {user} = req.headers;
        const {devId} = req.params;

        const loggedDev = await Dev.findById(user);
        const targetDev = await Dev.findById(devId);

        if(!targetDev) {
            return resp.status(400).json({error: 'Dev not exists'});
        }

        loggedDev.dislikes.push(targetDev._id)

        await loggedDev.save();

        return resp.json(loggedDev);
    }

}