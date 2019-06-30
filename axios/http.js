	import axios from 'axios'
	
	// 给所有的实例配置请求根路径
	axios.defaults.baseURL = 'http://myinterface.xuanzai.top/'
	
	// 给所有的实例配置跨域携带cookie
	axios.defaults.withCredentials = true
	
	// 给所有的实例配置同一的返回数据格式
	axios.defaults.transformResponse = [(data) => {
		try {
			return JSON.parse(data).data 
		}catch(e) {
			return data
		}
	}]
	
		// 发送数据格式为键值对
	const myAxios_1 = axios.create({
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		transformRequest: [(data) => {
			let str = ""
			for(let key in data) {
				str += `${key}=${data[key]}&`
			}
			return str.replace(/&$/, '')
		}],
	})
	
	// 发送数据格式为JSON格式
	const myAxios_2 = axios.create({
		headers: {
			'Content-Type': 'application/json'
		},
		transformRequest: [(data) => {
			return JSON.stringify(data)
		}],
	})
	
	// 发送数据格式为文件类型
	const myAxios_3 = axios.create({
		headers: {
			'Content-Type': 'multipart/form-data'
		},
		transformRequest: [(data) => {
			const formData = new FormData()
			for(let key in data) {
				formData.append(key, data[key])
			}
			return formData
		}],
	})
	
	export default {
		myAxios_1,
		myAxios_2,
		myAxios_3
	}