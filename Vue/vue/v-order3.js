var vm = new Vue({
	el : '#order3',
	data : {
		classA : 'A',
		isB : false,
		isC : true,
		someProp : 'idName',
		otherProp : 'prop',
		flag : true,
		srcUrlArr : [
				{"id" : "0","src" : "img/0.jpg"},
				{"id" : "1","src" : "img/1.jpg"},
				{"id" : "2","src" : "img/2.gif"}
		],
		srcUrl : "img/0.jpg",
		id : 0,
		indexs : 0
	},
	methods : {
		changeClass : function(){
			if(this.flag){
				this.isB = true;
				this.isC = false;
				this.flag = !this.flag;
			}else{
				this.isB = false;
				this.isC = true;
				this.flag = !this.flag;
			}		
		},
		changeImg : function(){
			this.indexs = ++this.id;
			this.srcUrl = this.srcUrlArr[this.indexs].src;
			this.id = this.srcUrlArr[this.indexs].id;
			this.id = (this.id == this.srcUrlArr.length-1 ? this.srcUrlArr[0].id-1 : this.id);
		}
	}
});