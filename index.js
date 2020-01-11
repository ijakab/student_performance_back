const got = require('got')

async function bla() {
    try {
        let data = {
            "Inputs": {
                "input1": {
                    "ColumnNames": [
                        "school",
                        "sex",
                        "age",
                        "address",
                        "famsize",
                        "Pstatus",
                        "Medu",
                        "Fedu",
                        "Mjob",
                        "Fjob",
                        "reason",
                        "guardian",
                        "traveltime",
                        "studytime",
                        "failures",
                        "schoolsup",
                        "famsup",
                        "paid",
                        "activities",
                        "nursery",
                        "higher",
                        "internet",
                        "romantic",
                        "famrel",
                        "freetime",
                        "goout",
                        "Dalc",
                        "Walc",
                        "health",
                        "absences",
                        "G1",
                        "G2",
                        "G3"
                    ],
                    "Values": [
                        [
                            "value",
                            "value",
                            "0",
                            "value",
                            "value",
                            "value",
                            "0",
                            "0",
                            "value",
                            "value",
                            "value",
                            "value",
                            "0",
                            "0",
                            "0",
                            "value",
                            "value",
                            "value",
                            "value",
                            "value",
                            "value",
                            "value",
                            "value",
                            "0",
                            "0",
                            "0",
                            "0",
                            "0",
                            "0",
                            "0",
                            "0",
                            "0",
                            "0"
                        ],
                        [
                            "value",
                            "value",
                            "0",
                            "value",
                            "value",
                            "value",
                            "0",
                            "0",
                            "value",
                            "value",
                            "value",
                            "value",
                            "0",
                            "0",
                            "0",
                            "value",
                            "value",
                            "value",
                            "value",
                            "value",
                            "value",
                            "value",
                            "value",
                            "0",
                            "0",
                            "0",
                            "0",
                            "0",
                            "0",
                            "0",
                            "0",
                            "0",
                            "0"
                        ]
                    ]
                }
            },
            "GlobalParameters": {}
        }
    
        let res = await got('https://ussouthcentral.services.azureml.net/workspaces/7ead72a1a47b41ef8af974222279c00d/services/347ce2286dfa4efba0ac352f27452a26/execute?api-version=2.0&details=true', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer NbAfsidEhGmq0RaUgeflC8wrgkO+bX+9dSnSgmZEFBfPxqjG4tsSMsrYCsSudYV/e17B6i/mKOkS2ZYMRAt1gw==',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        res = JSON.parse(res.body)
        return res
    } catch (e) {
        console.log(e)
    }
}

bla()
