const Config = use('Config')
const allFeatures = Config.get('ML.allFeatures')
const trackedFeatures = Config.get('ML.trackedFeatures')

class MLService {
    static createResponseObject(userDetails) {
        if(!userDetails) userDetails = {}
        let finalObj = {}
        for(let trackedFeature of trackedFeatures) {
            finalObj[trackedFeature] = userDetails[trackedFeature] || ''
        }
        return finalObj
    }
}

module.exports = MLService
