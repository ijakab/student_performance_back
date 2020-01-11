'use strict'
const Route = use('Route')

module.exports = Route.group(() => {
    
    /**
     * @api {post} /api/auth/login Login
     * @apiGroup Auth
     *
     * @apiDescription Login route. Call this to fetch JWT access token together with refresh token.
     *
     * @apiParam {string} username Send username or email as username
     * @apiParam {string} password Password for this username/email
     *
     */
    Route.post('/login', 'AuthController.login')
    

    /**
     * @api {post} /api/auth/checkUsername Check username
     * @apiGroup Auth
     *
     * @apiDescription Checks if username is existing
     *
     * @apiParam {string} username Username to check
     *
     */
    Route.post('/checkUsername', 'AuthController.checkUsername')

    /**
     * @api {post} /api/auth/checkEmail Check email
     * @apiGroup Auth
     *
     * @apiDescription Checks if email is existing
     *
     * @apiParam {string} email Email to check
     *
     */
    Route.post('/checkEmail', 'AuthController.checkEmail')
    
})

