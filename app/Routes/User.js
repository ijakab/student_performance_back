'use strict'
const Route = use('Route')

module.exports = Route.group(() => {
    
    /**
     * @api {post} api/user/create Create user
     * @apiGroup User
     * @apiVersion 1.0.0
     *
     * @apiParamExample {json} Sample
     *
     * @apiSuccessExample {json} Success
     *
     */
    
    Route.post('/create', 'UserController.create').middleware([
        'checkToken',
        'scoperCreator:User/Admin,adminUserScoper'
    ])
    
})
