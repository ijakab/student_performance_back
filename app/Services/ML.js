const Config = use('Config')
const allFeatures = Config.get('ML.allFeatures')
const trackedFeatures = Config.get('ML.trackedFeatures')
const url = Config.get('ML.url')
const got = require('got')
const Env = use('Env')
const apiKey = Env.getOrFail('ML_API_KEY')

class MLService {
    static createResponseObject(userDetails) {
        if(!userDetails) userDetails = {}
        let finalObj = {}
        for(let trackedFeature of trackedFeatures) {
            finalObj[trackedFeature] = userDetails[trackedFeature] || ''
        }
        return finalObj
    }
    
    static buildBodyFromDetails(userDetails) {
        let body = {Inputs: {input1: { ColumnNames: [], Values: [[]] }}, GlobalParameters: {}}
        for(let feature of allFeatures) {
            body.Inputs.input1.ColumnNames.push(feature)
            let value = userDetails[feature] || ''
            body.Inputs.input1.Values[0].push(value)
        }

        return body
    }
    
    static async callMLService(body) {
        try {
            let res = await got(url, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + apiKey,
                    'Accept': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(body)
            })
            res = JSON.parse(res.body)
            return res
        } catch (e) {
            console.log(e.body)
            throw e
        }
    }
    
    static async predictFromDetails(userDetails) {
        let body = MLService.buildBodyFromDetails(userDetails)
        let response = await MLService.callMLService(body)
        let values = response.Results.output1.value.Values[0]
        return values[values.length-1]
    }
}

module.exports = MLService
