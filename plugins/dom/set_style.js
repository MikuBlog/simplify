/**
 * @description 为DOM元素设置样式
 * @param {DOM Object} el 
 * @param {String} ruleName CSS属性名
 * @param {String} value CSS属性值
 */
function setStyle(el, ruleName, value) {
	el.style[ruleName] = value
}

export default {
    setStyle
}
    
