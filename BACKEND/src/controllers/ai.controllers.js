const aiService = require('../services/ai.services');

module.exports.getReview = async (req, res) => {
    // Support both JSON body and query parameter
    const code = req.body.code|| req.query.prompt;
    if (!code) {
        return res.status(400).send('Prompt is required');
    }
    try {
        const response = await aiService(code);
        res.send(response);
    } catch (error) {
        res.status(500).send('Error generating response');
    }
}