'use strict'
const Route = use('Route')

module.exports = Route.group(() => {
    
    /**
     * @api {post} api/user/filter Filter user
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
     * @api {post} api/user/get/:id Filter user
     * @apiGroup User
     * @apiVersion 1.0.0
     *
     * @apiSuccessExample {json} Success
     *
     *
     */
    
    Route.get('/get/:id', 'UserController.single').middleware([
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
    
    /**
     * @api {delete} api/user/delete/:id Delete user
     * @apiGroup User
     * @apiVersion 1.0.0
     *
     *
     */
    
    Route.delete('/delete/:id', 'UserController.delete').middleware([
        'checkToken',
        'scoperCreator:User/Admin,adminUserScoper'
    ])
    
    /**
     * @api {post} api/user/addDetails/:id Add user details
     * @apiGroup User
     * @apiVersion 1.0.0
     *
     * @apiParamExample {json} Sample
     * {
	"age": "2",
	"sex": "no"
}
     *
     * @apiSuccessExample {json} Success
     * {
    "data": {
        "id": 1,
        "username": "admin",
        "email": "ivan.jakab0@gmail.com",
        "firstname": "Ivan",
        "lastname": "Jakab",
        "role": "admin",
        "created_at": "2020-01-12T17:45:27.000Z",
        "details": {
            "age": "2",
            "sex": "no",
            "address": "",
            "famsize": "",
            "Pstatus": "",
            "Medu": "",
            "Fedu": "",
            "Mjob": "",
            "Fjob": "",
            "traveltime": "",
            "studytime": "",
            "activities": "",
            "higher": "",
            "internet": "",
            "romantic": "",
            "freetime": "",
            "goout": "",
            "Dalc": "",
            "Walc": "",
            "absences": "",
            "G3": ""
        }
    },
    "message": "",
    "code": "",
    "debug": {
        "untranslatedMsg": ""
    }
}
     * @apiDescription Everything is string
     */
    
    Route.post('/addDetails/:id', 'UserController.addDetails').middleware([
        'checkToken',
        'scoperCreator:UserDetails/User,userDetailsScoper,id'
    ])
    
})
