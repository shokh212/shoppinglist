// var el = document.createElement("div");
// var txt= document.createTextNode(content);
// el.appendChild(txt);

function add(){
    var content = document.getElementById('list-input').value;
    var div = document.createElement("div");
    div.id = 'list-items';
    var p = document.createElement("p");
    p.id ='p';
    p.innerHTML = content;
    div.appendChild(p);
    document.body.appendChild(div);

    btn2=document.createElement("button");
    btn2.innerHTML = "Yes";
    btn2.id='ybtn';

    btn1=document.createElement("button");
    btn1.innerHTML = "No";
    btn1.id='nbtn';

    div.appendChild(btn2);
    div.appendChild(btn1);

}

