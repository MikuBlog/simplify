// 保存数据库实例
let db
/**
 * @description 创建表格
 * @param {String} tableName 
 * @param {Object} options 
 */
function createTable(tableName, options) {
    if (!db.objectStoreNames.contains(tableName)) {
        let objectStore = db.createObjectStore(tableName, { keyPath: options.primaryKey});
        for(let keys in options.keys) objectStore.createIndex(keys, keys, { unique: true });
    }
}

/**
 * @description 插入数据
 * @param {String} tableName 
 * @param {Object} data 
 * @returns {Promise}
 */
function insert(tableName, data) {
    return new Promise((resolve, reject) => {
        let req = db.transaction([tableName], 'readwrite')
        .objectStore(tableName)
        .add(data)
        req.addEventListener('success', (event) => {
            resolve(event)
        })
        req.addEventListener('error', (event) => {
            reject(event)
        })
    })
}

/**
 * @description 查找数据
 * @param {String} tableName 
 * @param {Number} id 
 * @returns {Promise}
 */
function find(tableName, id) {
    return new Promise((resolve, reject) => {
        let req = db.transaction([tableName])
        .objectStore(tableName)
        .get(id)
        req.addEventListener('success', (event) => {
            req.result 
            ? resolve(req.result)
            : resolve(event)
        })
        req.addEventListener('error', (event) => {
            reject(event)
        })
    })
}

/**
 * @description 更新数据
 * @param {String} tableName 表名
 * @param {Number} id 表id
 * @param {Object} data 更新的数据
 * @returns {Promise}
 */
function update(tableName, id, data) {
    return new Promise((resolve, reject) => {
        data.id = id
        let req = db
        .transaction([tableName], 'readwrite')
        .objectStore(tableName)
        .put(data);
        req.addEventListener('success', (event) => {
            resolve()
        })
        req.addEventListener('error', (event) => {
            reject()
        })
    })
}

/**
 * @description 更新数据
 * @param {String} databaseName 数据库名称
 */
function connectDatabase(databaseName) {
    return new Promise((resolve, reject) => {
        let request = window.indexedDB.open(databaseName)
        request.addEventListener('success', (event) => {
            db = request.result
            resolve('浏览器数据库打开成功');
        })
        request.addEventListener('error', (event) => {
            reject('浏览器数据库打开报错');
        })
        request.addEventListener('upgradeneeded', (event) => {
            db = event.target.result;
            resolve(event)
        })
    })
}

export default {
    connectDatabase,
    createTable,
    insert,
    find,
    update
}