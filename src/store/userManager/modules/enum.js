export default {
	state: {
		userEnableStatus:[{
			code:-1,
			name:'禁用'
		},{
			code:1,
			name:'启用'
		}]
	},
	getters: {
		getPublicStatus: (state) => (code,obj) => {
			let data=state[obj].find(item=> item.code == code);
			return data ? data.name : ''; 
		}
	},
	mutations: {
		
	},
	actions: {
	
	},
	modules: {
		
	}
}
