const {Router} = require('express');
const router = Router();

// routes
router.get("/test", (req, res) => {

    const data = {
        "name": "Omar",
        "lastName": "Morales"
    }
    res.json(data)
});

module.exports = router;