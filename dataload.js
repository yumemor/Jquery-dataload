$.fn.extend({
	dataload: function(data) {
		for (var k in data) {
			var node = this.find("*[data-name='" + k + "']");
			if (node.length){
				var nodeType = node[0].tagName;
				if(nodeType == "INPUT"){
					node.eq(0).val(data[k]);
				}else{
					node.eq(0).text(data[k]);
				}
			}
		}
	}
});