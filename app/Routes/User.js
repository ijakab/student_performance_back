'use strict'
const Route = use('Route')

module.exports = Route.group(() => {
    
    /**
     * @api {post} api/user/create Create user
     * @apiGroup User
     * @apiVersion 1.0.0
     *
     * @apiParamExample {json} Sample
     *{
	"filters": [
		{
			"key": "role",
			"value": "admin"
		}
	]
}
     *
     * @apiSuccessExample {json} Success
     *{
    "data": {
        "pagination": {
            "total": 1,
            "perPage": 10,
            "page": 1,
            "lastPage": 1
        },
        "data": [
            {
                "id": 1,
                "username": "admin",
                "email": "ivan.jakab0@gmail.com",
                "firstname": "Ivan",
                "lastname": "Jakab",
                "role": "admin",
                "created_at": "2020-01-12T11:23:35.000Z"
            }
        ]
    },
    "message": "",
    "code": "",
    "debug": {
        "untranslatedMsg": ""
    }
}
     *
     */
    
    Route.post('/filter', 'UserController.filter').middleware([
        'checkToken'
    ])
    
    /**
     * @api {post} api/user/create Create user
     * @apiGroup User
     * @apiVersion 1.0.0
     *
     * @apiParamExample {json} Sample
     * {
	"username": "teacher",
	"password": "teacher",
	"email": "teacher@teacher.com",
	"role": "teacher",
	"firstname": "teacher",
	"lastname": "teacher"
}
     *
     * @apiSuccessExample {json} Success
     * {
    "data": {
        "id": 11,
        "username": "teacher",
        "email": "teacher@teacher.com",
        "firstname": "teacher",
        "lastname": "teacher",
        "role": "teacher",
        "created_at": "2020-01-12T15:03:25.000Z"
    },
    "message": "",
    "code": "",
    "debug": {
        "untranslatedMsg": ""
    }
}
     *
     */
    
    Route.post('/create', 'UserController.create').middleware([
        'checkToken',
        'scoperCreator:User/Admin,adminUserScoper'
    ])
    
    /**
     * @api {patch} api/user/update/:id Update user
     * @apiGroup User
     * @apiVersion 1.0.0
     *
     * @apiParamExample {json} Sample
     * {
	"username": "teacher",
	"password": "teacher",
	"email": "teacher@teacher.com",
	"role": "teacher",
	"firstname": "teacher",
	"lastname": "teacher"
}
     *
     * @apiSuccessExample {json} Success
     * {
    "data": {
        "id": 11,
        "username": "teacher",
        "email": "teacher@teacher.com",
        "firstname": "teacher",
        "lastname": "teacher",
        "role": "teacher",
        "created_at": "2020-01-12T15:03:25.000Z"
    },
    "message": "",
    "code": "",
    "debug": {
        "untranslatedMsg": ""
    }
}
     *
     */
    
    Route.patch('/update/:id', 'UserController.update').middleware([
        'checkToken',
        'scoperCreator:User/Admin,adminUserScoper'
    ])
    
})
