var vm = new Vue({
	el : '#v-order',
	data : {
		items : [
			{ id : '0', name : 'a'},
			{ id : '1', name : 'b'},
			{ id : '2', name : 'c'},
			{ id : '3', name : 'd'},
			{ id : '4', name : 'e'},
			{ id : '5', name : 'f'}
		],
		formData : {
			name : '',
			sex : '',
			interest : [],
			identity : ''
		},
		parentMessage : '滴滴',
		didis : [
			{ msg : '滴滴顺风车' },
			{ msg : '滴滴专车' }
		],
		persons : {
			FirstName : 'DIDI',
			LastName : 'FE',
			Age : 4
		},
		objectValues : {
			one : {
				id : 'D1',
				msg : 'Hello'
			},
			two : {
				id : 'D2',
				msg : 'DIDI FE'
			}
		},
		field : 'tag',
		reverse : false,
		users : [
			{ name : '快车', tag : 3},{ name : '出租车', tag : 2},{ name : '顺风车', tag : 1},{ name : '专车', tag : 4}
		]
	}
});