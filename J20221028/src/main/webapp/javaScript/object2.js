/**
 * object2.js 
 */
//domcontented << 모든걸 읽고나서 마지막에 실행

document.addEventListener('DOMContentLoaded',function(){
//document.getElementById('show').innerHTML = '<p>Hello, world</p>';	
	let data = `[{"id":1,"first_name":"Ealasaid","last_name":"Elldred","email":"eelldred0@washington.edu","gender":"Female","salary":1220},
{"id":2,"first_name":"Orv","last_name":"Leyre","email":"oleyre1@loc.gov","gender":"Male","salary":5629},
{"id":3,"first_name":"Gabriello","last_name":"Jeremaes","email":"gjeremaes2@miitbeian.gov.cn","gender":"Male","salary":3475},
{"id":4,"first_name":"Kane","last_name":"Sandiford","email":"ksandiford3@hugedomains.com","gender":"Male","salary":2423},
{"id":5,"first_name":"Alaine","last_name":"Clemitt","email":"aclemitt4@51.la","gender":"Genderfluid","salary":2073},
{"id":6,"first_name":"Cesare","last_name":"Lehrian","email":"clehrian5@pinterest.com","gender":"Male","salary":3474},
{"id":7,"first_name":"Dore","last_name":"Bernaldo","email":"dbernaldo6@naver.com","gender":"Male","salary":8061},
{"id":8,"first_name":"Kara-lynn","last_name":"Crotty","email":"kcrotty7@kickstarter.com","gender":"Genderqueer","salary":8534},
{"id":9,"first_name":"Mellisent","last_name":"Bonifacio","email":"mbonifacio8@elegantthemes.com","gender":"Female","salary":6722},
{"id":10,"first_name":"Raquela","last_name":"Kayzer","email":"rkayzer9@google.fr","gender":"Female","salary":4387}]`;

//json 타입 => javascript 오브젝트.

let result = JSON.parse(data);
console.log(result);
});

