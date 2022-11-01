//dom2.js

document.addEventListener('DOMContentLoaded',domLoadedFunc);

function domLoadedFunc(){
	let data = `[{"id":1,"first_name":"Ealasaid","last_name":"Elldred","email":"eelldred0@washington.edu","gender":"Female","salary":1220},
            {"id":2,"first_name":"Orv","last_name":"Leyre","email":"oleyre1@loc.gov","gender":"Male","salary":5629},
            {"id":3,"first_name":"Gabriello","last_name":"Jeremaes","email":"gjeremaes2@miitbeian.gov.cn","gender":"Male","salary":3475},
            {"id":4,"first_name":"Kane","last_name":"Sandiford","email":"ksandiford3@hugedomains.com","gender":"Male","salary":2423}
            ]`;

    let result = JSON.parse(data); // json => object타입으로 바꿔주는..
 
    
 //확장 for
        //table
        let table = document.createElement('table');
        let show = document.getElementById('show');
        show.appendChild(table);

        let titles = ['아이디','이름','이메일','성별','급여','삭제'];
        let thead = document.createElement('thead');
        let tr = document.createElement('tr');
        let checkbox = document.createElement('input');
        checkbox.setAttribute('type','checkbox')
        checkbox.addEventListener('change',function(){
        document.querySelectorAll('#show input[type="checkbox"]').forEach(function(check){
                check.checked = checkbox.checked;
            });
        });
        for(let title of titles){
        let idTag = document.createElement('th');
        let idTxt = document.createTextNode(title); // <th>아이디</th>
        idTag.appendChild(idTxt);
        tr.appendChild(idTag);
        }
//전체선택
        let td = document.createElement('th');
        td.appendChild(checkbox);
        tr.appendChild(td);
//전체선택 리스너
        thead.appendChild(tr);
        table.appendChild(thead);
//tbody
        let tbody = document.createElement('tbody');
        table.appendChild(tbody);
        let fields = ['id', 'first_name', 'email', 'gender', 'salary']
        for (let obj of result){      

            let tr = makeTr(obj);
            tbody.appendChild(tr);
        }

//추가버튼에 이벤트 등록.
        document.querySelector('button[type="button"]').addEventListener('click',function(){
            console.log('추가버튼.........');
            let id = document.getElementById('id').value;
            let fn = document.getElementById('fname').value;
            let em = document.getElementById('email').value;
            let sa = document.getElementById('salary').value;
            let gn = document.getElementById('gender').value;
            let newRow = {
                id: id,
                first_name: fn,
                email: em,
                salary: sa,
                gender: gn
            }
            document.querySelector('#show>table>tbody').appendChild(makeTr(newRow));
        });

//end of for ( let obj of result)

//수정
        document.querySelectorAll('button[type="button"]')[1].addEventListener('click',updateFunction);
        function updateFunction(){
            let trs = document.querySelectorAll('#show>table>tbody>tr');
                for(let i=0; i<trs.length; i++){
                    if(document.getElementById('id').value==trs[i].children[0].textContent){
                        trs[i].children[4].textContent = document.getElementById('salary').value
                    }
                }
        };
//선택삭제
        document.querySelectorAll('button[type="button"]')[2].addEventListener('click',deleteFunction);


function makeTr(row){
        //데이터 건수만큼 반복.
        let tr = document.createElement('tr');
        tr.addEventListener('mouseover',showDetailFunction);
        tr.addEventListener('click',showDetailClickFunction);
        tr.addEventListener('mouseout',function(){
            this.style.background=null;

        });
        for(let field of fields){
            
            //항목만큼 반복
            let td = document.createElement('td');
            let txt = document.createTextNode(row[field]);
            td.appendChild(txt);
            tr.appendChild(td);
        }        
        //삭제버튼. <td><button>삭제</button></td>

        let td = document.createElement('td');
        let btn = document.createElement('button');
        btn.addEventListener('click',function(){
            console.log(this);
            this.parentElement.parentElement.remove();
        });
        let txt = document.createTextNode('삭제');

        td.appendChild(btn);
        btn.appendChild(txt);
        tr.appendChild(td);
//선택버튼 checkbox
        td = document.createElement('td');
        let check = document.createElement('input');
        check.setAttribute('type','checkbox');
        td.appendChild(check);
        tr.appendChild(td);

        return tr;
    } // end of makeTr();
    function showDetailFunction(){
        this.style.backgroundColor='yellow';
        
        
}function showDetailClickFunction(){
    this.style.backgroundColor='yellow';
    
    document.getElementById('id').setAttribute('value',this.children[0].textContent);
    document.getElementById('fname').setAttribute('value',this.children[1].textContent);
    document.getElementById('email').setAttribute('value',this.children[2].textContent);
    document.getElementById('salary').setAttribute('value',this.children[4].textContent);
    
}

function allselectFunction(){
    console.log('hello');
}
function deleteFunction(){
    console.log('28..');
    let trs = document.querySelectorAll('#show>table>tbody>tr');
        for(let i=0; i<trs.length; i++){
            if(trs[i].children[6].firstElementChild.checked==true){
                trs[i].children[6].parentElement.remove();
            }
        }
        let ths = document.querySelector('#show>table>thead');
    
//전체삭제

        if(ths.children[6].checked==true){
            for(let i=0; i<trs.length; i++){
            trs[i].children[6].parentElement.remove();
            }
        }
};
} //end of 