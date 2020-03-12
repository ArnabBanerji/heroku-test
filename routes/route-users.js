exports.getUserById = function (req, res) {
    let userID = req.params.id || 'NONE';
    res.send(`<div>Req for USER ID: ${userID}</div>`)
};