<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>index.jsp</title>
<script src="object.js"></script>
</head>
<body>
    <form action="index.html" onsubmit="submitFunc()">
        id: <input type="text" id="uid" value="user1"><br>
        pw: <input type="password" id="upw" value="1234"><br>
        <input type="submit" value="로그인">
    </form>

    <div id="show"></div>
    <script>
        

        function submitFunc(){
            event.preventDefault(); // form 기본기능차단.
            console.log('submitFunc() call.');

            //엘리먼트 선택하는데 id속성을 엘리먼ㅌ를 선택

            let id = document.getElementById('uid').value;
            let pw = document.getElementById('upw').value;

            let pTag = document.createElement('p');
            let txt =  document.createTextNode('id는 ' + id + ', 비번은 ' + pw);
            
            pTag.appendChild(txt);
            console.log(txt);
            
            pTag.onclick = function(){
                console.log(this.remove());
            }

            document.getElementById('show').appendChild(pTag);
            
        }

        function saveFnc(){
        // document.write('<p>Hello, world</p>')
        //dom 요소생성
        let pTag = document.createElement('p'); // <p></p>
        let txt = document.createTextNode('Hello, world');
        pTag.appendChild(txt);
        console.log(txt)

        let show = document.getElementById('show');
        show.appendChild(pTag);
        console.log(show);
        }
        
    </script>
</body>
</html>