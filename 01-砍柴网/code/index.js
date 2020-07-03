let list1 = document.getElementById('list1')
let img0 = document.getElementById('img0')
img0.onmouseover = function(){
    list1.style.display = 'block';
}
img0.onmouseout = function(){
    list1.style.display = 'none'
}
list1.onmouseover=function(){
    list1.style.display = "block";
}
list1.onmouseout=function(){
    list1.style.display = 'none'
}

let li2_input = document.getElementById('li2-input')
li2_input.onfocus = function(){
    li2_input.classList.remove('input-2')
    li2_input.classList.add('input-1')
}
li2_input.onblur = function(){
    li2_input.classList.remove('input-1')
    li2_input.classList.add('input-2')
}

// 轮播图
let bannnerlist = document.getElementById('bannnerlist');
let btn_l = document.getElementById('btn_l');
let btn_r = document.getElementById('btn_r');
let circlelist = document.getElementById('circlelist');
let bannner = document.getElementById('bannner');
let imgwidth = document.getElementById('bannnerlist').children[0].offsetWidth;
let k = 0;
let setint;
let settime;
console.log(imgwidth)
function  setintFun(){
    setint = setInterval(function() {
        k++;
        k%=5;
        bannnerlist.style.left = -k*imgwidth+"px";
        for(let i=0;i<bannnerlist.children.length;i++){
            circlelist.children[i].classList.remove('circlechoose');
        }
        circlelist.children[k].classList.add('circlechoose');
    }, 1000);
}
setintFun();

btn_r.onclick = function(){
    clearInterval(setint)
    clearInterval(settime)
    k++;
    k%=5;
    bannnerlist.style.left = -k*imgwidth+"px";
    console.log(1234);
    for(let i=0;i<bannnerlist.children.length;i++){
        circlelist.children[i].classList.remove('circlechoose');
    }
    circlelist.children[k].classList.add('circlechoose');
    settime = setTimeout(function(){
        console.log(5678)
        setintFun();
    }, 1000)
}

btn_l.onclick = function(){
    clearInterval(setint)
    clearInterval(settime)
    if(k==0){
        k=5;
    }
    k--;
    k%=5;
    bannnerlist.style.left = -k*imgwidth+"px";
    for(let i=0;i<bannnerlist.children.length;i++){
        circlelist.children[i].classList.remove('circlechoose');
    }
    circlelist.children[k].classList.add('circlechoose');
    settime = setTimeout(function(){
        setintFun();
    }, 1000)
}

for(let i=0;i<bannnerlist.children.length;i++){
    circlelist.children[i].onclick = function(){
        clearInterval(setint);
        clearInterval(settime);
        k=i;
        bannnerlist.style.left = -k*imgwidth+"px";
        for(let i=0;i<bannnerlist.children.length;i++){
            circlelist.children[i].classList.remove('circlechoose');
        }
        circlelist.children[k].classList.add('circlechoose');
    
        settime = setTimeout(function(){
            setintFun();
        }, 1000)
    }

}


// 推荐
let midson2_item3_top = document.getElementById('midson2_item3_top')
let midson2_item3_span = document.getElementsByClassName("midson2_item3_span")
let item3_item = document.getElementsByClassName('item3_item')

for (let i=0;i<midson2_item3_span.length;i++){
    item3_item[0].classList.add('apper')
    midson2_item3_span[i].onclick = function(){
        for(let k=0;k<midson2_item3_span.length;k++){
            midson2_item3_span[k].classList.remove('midson2_item3_span_click');
            item3_item[k].classList.remove('apper')

        }
        midson2_item3_span[i].classList.add('midson2_item3_span_click');
        item3_item[i].classList.add('apper')
    }
}

// 人物
let famous_top_right_span = document.getElementsByClassName('famous_top_right_span')
let page = document.getElementsByClassName('page')
for(let i=0;i<famous_top_right_span.length;i++){
    page[0].classList.add('apper');
    famous_top_right_span[0].classList.add('famous_top_right_point_click')
    famous_top_right_span[i].onclick = function(){
        for(let j=0;j<famous_top_right_span.length;j++){
            famous_top_right_span[j].classList.remove('famous_top_right_point_click')
            page[j].classList.remove('apper')
        }
        famous_top_right_span[i].classList.add('famous_top_right_point_click')
        page[i].classList.add('apper')
    }
}
let QRcode = document.getElementsByClassName('QRcode')[0]
let QRcode1 = document.getElementsByClassName('QRcode1')[0]


QRcode.onmouseover=function(){
    QRcode1.classList.add('disapper')
}
QRcode.onmouseout = function(){
    QRcode1.classList.remove('disapper')
}

let gotop = document.getElementsByClassName('gotop')[0]
let scrollTop = document.body.scrollTop;
  
gotop.onclick = function(){
    scrollTo(0,0);
}
