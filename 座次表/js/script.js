




new Vue({
    el:"#xues",
    data:{
        zus:[
            {img:"img/images/2_07.jpg",price:"10",price1:"学员"},
            {img:"img/images/2_07.jpg",price:"9",price1:"学员"},
            {img:"img/images/2_07.jpg",price:"8",price1:"学员"},
            {img:"img/images/2_07.jpg",price:"7",price1:"学员"},
            {img:"img/images/2_07.jpg",price:"6",price1:"学员"},
            {img:"img/images/2_07.jpg",price:"5",price1:"学员"},
            {img:"img/images/2_07.jpg",price:"4",price1:"学员"},
            {img:"img/images/2_07.jpg",price:"3",price1:"学员"},
            {img:"img/images/2_07.jpg",price:"2",price1:"学员"},
            {img:"img/images/2_07.jpg",price:"1",price1:"学员"},
        ],
        zus2:[
            {img:"img/images/2_07.jpg",price:"11",price1:"学员",price3:"zhanng"},
            {img:"img/images/2_07.jpg",price:"12",price1:"学员",price3:"zhanng"},
            {img:"img/images/2_07.jpg",price:"13",price1:"学员",price3:"zhanng"},
            {img:"img/images/2_07.jpg",price:"14",price1:"学员",price3:"zhanng"},
            {img:"img/images/2_07.jpg",price:"15",price1:"学员",price3:"zhanng"},
            {img:"img/images/2_07.jpg",price:"16",price1:"学员",price3:"zhanng"},
            {img:"img/images/2_07.jpg",price:"17",price1:"学员",price3:"zhanng"},
            {img:"img/images/2_07.jpg",price:"18",price1:"学员",price3:"zhanng"},
            {img:"img/images/2_07.jpg",price:"19",price1:"学员",price3:"zhanng"},
            {img:"img/images/2_07.jpg",price:"20",price1:"学员",price3:"zhanng"},
           
        ],
        zus3:[
            {img:"img/images/2_07.jpg",price:"30",price1:"学员",price3:"zhanng"},
            {img:"img/images/2_07.jpg",price:"29",price1:"学员",price3:"zhanng"},
            {img:"img/images/2_07.jpg",price:"28",price1:"学员",price3:"zhanng"},
            {img:"img/images/2_07.jpg",price:"27",price1:"学员",price3:"zhanng"},
            {img:"img/images/2_07.jpg",price:"26",price1:"学员",price3:"zhanng"},
            {img:"img/images/2_07.jpg",price:"25",price1:"学员",price3:"zhanng"},
            {img:"img/images/2_07.jpg",price:"24",price1:"学员",price3:"zhanng"},
            {img:"img/images/2_07.jpg",price:"23",price1:"学员",price3:"zhanng"},
            {img:"img/images/2_07.jpg",price:"22",price1:"学员",price3:"zhanng"},
            {img:"img/images/2_07.jpg",price:"21",price1:"学员",price3:"zhanng"},
           
        ],
        zus4:[
            {img:"img/images/2_07.jpg",price:"31",price1:"学员",price3:"zhanng"},
            {img:"img/images/2_07.jpg",price:"32",price1:"学员",price3:"zhanng"},
            {img:"img/images/2_07.jpg",price:"33",price1:"学员",price3:"zhanng"},
            {img:"img/images/2_07.jpg",price:"34",price1:"学员",price3:"zhanng"},
            {img:"img/images/2_07.jpg",price:"35",price1:"学员",price3:"zhanng"},
            {img:"img/images/2_07.jpg",price:"36",price1:"学员",price3:"zhanng"},
            {img:"img/images/2_07.jpg",price:"37",price1:"学员",price3:"zhanng"},
            {img:"img/images/2_07.jpg",price:"38",price1:"学员",price3:"zhanng"},
            {img:"img/images/2_07.jpg",price:"39",price1:"学员",price3:"zhanng"},
            {img:"img/images/2_07.jpg",price:"40",price1:"学员",price3:"zhanng"},
           
        ],
    }
})



var zus=document.querySelectorAll(".zus .zuss");
var is=document.querySelectorAll(".zuss p");
for(var z=0;z<zus.length;z++){
    zus[z].name=z;
    zus[z].onclick=function(){
            if(this.style.background==""){
                zus[this.name].style.background="#4183c4";
                is[this.name].style.color="#fff";
            }else{
                zus[this.name].style.background="";
                is[this.name].style.color="";
            }
       
    }
}



var appear=document.querySelector(".appear")
var disappear=document.querySelector(".disappear")

appear.onclick=function(){
    if(disappear.className=="disappear"){
        disappear.setAttribute("class","appear")
    }else{
        disappear.setAttribute("class","disappear")
    }
}

















