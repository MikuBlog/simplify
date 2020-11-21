/**
 * @description 保存会话数据
 * @param {String} key 
 * @param {String | Object | Number | Boolean} data 
 */
function setMemorySes(key, data) {
    sessionStorage.setItem(key, JSON.stringify(data))
}

/**
 * @description 获取会话数据
 * @param {String} key 
 * @returns {String | Object | Number | Boolean}
 */
function getMemorySes(key) {
    return JSON.parse(sessionStorage.getItem(key))
}

/**
 * @description 长久保存数据
 * @param {String} key 
 * @param {String | Object | Number | Boolean} data 
 */
function setMemoryPmt(key, data) {
    localStorage.setItem(key, JSON.stringify(data))
}

/**
 * @description 获取长久数据
 * @param {String} key 
 * @returns {String | Object | Number | Boolean}
 */
function getMemoryPmt(key) {
    return JSON.parse(localStorage.getItem(key))
}

export default {
    setMemorySes,
    getMemorySes,
    setMemoryPmt,
    getMemoryPmt
}