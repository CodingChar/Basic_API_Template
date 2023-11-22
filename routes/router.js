const {Router}  = require('express')
const router = Router()

router.get('/router', (request, response) => {
    response.send('Hello From the Router.')
})



module.exports = router;