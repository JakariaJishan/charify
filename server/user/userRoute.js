const router = require('express').Router();

router.get('/login', (req, res) => {
    res.send('login page');
})
router.get('/logout', (req, res) => {
    res.send('lut page');
})
module.exports = router;