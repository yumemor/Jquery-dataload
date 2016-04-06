#Jquery-dataload.js

## How to use ? 

html:

```html
<form class="loadForm">	
	<input type="text name='user' data-name='user'>
	<input type="text name='sex' data-name='sex'>
	<input type="text name='age' data-name='age'>
</form>
```
javascript

```javascript
var data = new Object();
data.user = 'yy';
data.sex = 'man';
data.age = 18; 
$(".loadForm").dataLoad(data);
```

---

## Description 

use `data-name` property to determine the unique。
