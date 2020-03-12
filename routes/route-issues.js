exports.getIssueByID = function (req, res) {
    let issueID = req.params.id || 'NONE';
    res.send(`<div>Req for ISSUE ID: ${issueID}</div>`)
};