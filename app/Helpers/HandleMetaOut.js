module.exports = function (meta) {
    if(!meta) return []
    try{
        return JSON.parse(meta)
    } catch (e) {
        return []
    }
}
