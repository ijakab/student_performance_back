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
                            "",
                            "",
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
    
        let res = await got('https://ussouthcentral.services.azureml.net/workspaces/7ead72a1a47b41ef8af974222279c00d/services/8e4faeca10c64df7b545c67f77f16b21/execute?api-version=2.0&details=true', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer Wj7VY1CrQcYjAyhqXIpfB3UcjL7WKoWGaJf/4h/lRlQK2nOESZAbN5K5nOwiIFIjWq6VActBs2zgD1B9VAqnyg==',
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
