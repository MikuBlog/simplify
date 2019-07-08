/**
 * 添加类、移除类
 * @param {DOM Object} element 
 * @param {String} name 
 */
function addClass(element, name) {
    element.classList.add(name)
}

function removeClass(element, name) {
    element.classList.remove(name)
}

/**
 * 获取类
 * @param {DOM Object} element 
 * @returns {String} 
 */
function getClassName(element) {
    return element.getAttribute('className')
}

export default {
    addClass,
    removeClass,
    getClassName
}