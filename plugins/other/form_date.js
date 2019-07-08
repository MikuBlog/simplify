/**
 * 日期格式化
 * @param {Date | String} dateTime 要格式化的日期
 * @param {Boolean} isAccurate 是否返回准确时间（时、分、秒）
 */
const formDate = (dateTime, isAccurate) => {
    (Object(dateTime) instanceof Boolean && dateTime == true) ? (dateTime = "", isAccurate = true) : dateTime = ""
    let nowDate = new Date()
    let time = "", date =  dateTime 
    ? new Date(dateTime) 
    : new Date(nowDate.getTime() - (nowDate.getTimezoneOffset() * 60000))
    let newDate = date.toISOString().split("T")[0]
    isAccurate 
    && (newDate = `${date.toISOString().split("T")[0]} ${date.toISOString().split("T")[1].split('.')[0]}`)
    return newDate
}

/**
 * 日期差
 * @param {Date | String} sDate1 
 * @param {Date | String} sDate2 
 * @returns {Number} 
 */
const dateDiff = (sDate1,  sDate2) => {   
    const iDays = sDate1 < sDate2 
    ? (new Date(sDate2) - new Date(sDate1)) 
    : (new Date(sDate1) - new Date(sDate2))
    return iDays / 1000 / 60 / 60 / 24 
}

export default {
    formDate,
    dateDiff
}