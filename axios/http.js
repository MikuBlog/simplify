
	import axios from 'axios'
	import { Loading, Message } from 'element-ui'
	import 'element-ui/lib/theme-chalk/index.css';

	// 添加拦截提示	
	function justifyStatus(result) {
		switch(result) {
			case 404: Message({
				showClose: true,
				message: "找不到该接口，请联系程序员进行修复",
				type: 'error'
			});break;
			case 401: Message({
				showClose: true,
				message: "权限不足",
				type: 'error'
			});break;
			case 0: Message({
				showClose: true,
				message: "请登录",
				type: 'error'
			});break;
			case 500: 
			default: Message({
				showClose: true,
				message: "服务器出错，请联系程序员进行修复",
				type: 'error'
			});
		}
	}
	
	// 添加拦截器函数
	function addInterceptors(obj) {
		obj.interceptors.request
			.use(config => {
				loading = Loading.service({ fullscreen: true })
				return config
			}, err => {
				justifyStatus('none')
				loading.close()
				return Promise.reject(err)
			})
			
		obj.interceptors.response
			.use(response => {
				loading.close()
				return response;
			}, err => {
				justifyStatus(err.response.status)
				loading.close()
				return Promise.reject(err)
			})
	}
	
	let loading
	
	// 给所有的实例配置请求根路径
	axios.defaults.baseURL = 'http://myinterface.xuanzai.top/'
	
	// 给所有的实例配置跨域携带cookie
	axios.defaults.withCredentials = true
        
        // 配置请求时限
	axios.defaults.timeout = 3000 

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
	
	// 添加拦截器
	addInterceptors(myAxios_1)
	
	addInterceptors(myAxios_2)
	
	addInterceptors(myAxios_3)
	
	export default {
		myAxios_1,
		myAxios_2,
		myAxios_3
	}

