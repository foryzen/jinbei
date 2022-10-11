total = 0
num = 1

function dis_a(total){
    document.getElementById('output').innerHTML = '¥'+total
}

function dis_b(order, type){
    if(type == 1){
        document.getElementById('type'+num).innerHTML = '普通'
    }else if(type == 2){
        document.getElementById('type'+num).innerHTML = '小盛'
    }else if(type ==3){
        document.getElementById('type'+num).innerHTML = '日替'
    }
    document.getElementById('order'+num).innerHTML = order
    num++
}



function n1(){
    total = total+680
    dis_a(total)
    dis_b('とんかつ弁当', 1)
}

function s1(){
    total = total+650
    dis_a(total)
    dis_b('とんかつ弁当', 2)
}

function n2(){
    total = total+700
    dis_a(total)
    dis_b('豚しょうが焼き弁当', 1)
}

function s2(){
    total = total+670
    dis_a(total)
    dis_b('豚しょうが焼き弁当', 2)
}

function n3(){
    total = total+680
    dis_a(total)
    dis_b('から揚げ弁当', 1)
}

function s3(){
    total = total+650
    dis_a(total)
    dis_b('から揚げ弁当', 2)
}

function n4(){
    total = total+680
    dis_a(total)
    dis_b('桜姫とりステーキ弁当', 1)
}

function s4(){
    total = total+650
    dis_a(total)
    dis_b('桜姫とりステーキ弁当', 2)
}

function n5(){
    total = total+660
    dis_a(total)
    dis_b('桜姫とりステーキ丼', 1)
}

function s5(){
    total = total+630
    dis_a(total)
    dis_b('桜姫とりステーキ丼', 2)
}

function n6(){
    total = total+640
    dis_a(total)
    dis_b('煮込みチーズハンバーグ弁当', 1)
}

function s6(){
    total = total+610
    dis_a(total)
    dis_b('煮込みチーズハンバーグ弁当', 2)
}

function n7(){
    total = total+520
    dis_a(total)
    dis_b('さば味噌', 1)
}

function s7(){
    total = total+490
    dis_a(total)
    dis_b('さば味噌', 2)
}

function n8(){
    total = total+580
    dis_a(total)
    dis_b('えび天丼', 1)
}

function s8(){
    total = total+550
    dis_a(total)
    dis_b('えび天丼', 2)
}

function n9(){
    total = total+520
    dis_a(total)
    dis_b('ハンバーグから揚げ弁当', 1)
}

function s9(){
    total = total+490
    dis_a(total)
    dis_b('ハンバーグから揚げ弁当', 2)
}



function h3(){
    total = total+580
    dis_a(total)
    dis_b('から揚げ弁当', 3)
}

function h4(){
    total = total+580
    dis_a(total)
    dis_b('桜姫とりステーキ弁当', 3)
}

function h6(){
    total = total+540
    dis_a(total)
    dis_b('煮込みチーズハンバーグ弁当', 3)
}



function c1(){
    total = total-100
    dis_a(total)
    dis_b('サービス券 １枚')
}

function c2(){
    total = total-200
    dis_a(total)
    dis_b('サービス券 ２枚')
}

function c3(){
    total = total-300
    dis_a(total)
    dis_b('サービス券 ３枚')
}
