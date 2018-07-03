//秒杀倒计时

if(document.querySelector(".s")!==null){
        function countTime(){
        if(m==undefined,h==undefined,s==undefined){
            h=0,m=0,s=0
        }
        var date = new Date();
        var now = date.getTime();
        var str = "2019/6/21 15:12:00";
        var endDate = new Date(str);
        var end = endDate.getTime();
        var leftTime = end - now;
        var d, h, m, s;
        if (leftTime >= 0) {
            d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
            h = Math.floor(leftTime / 1000 / 60 / 60 % 24);
            m = Math.floor(leftTime / 1000 / 60 % 60);
            s = Math.floor(leftTime / 1000 % 60);
        }
        document.querySelector(".s").innerHTML = h;
        document.querySelector(".f").innerHTML = m;
        document.querySelector(".m").innerHTML = s;
        setTimeout(countTime, 1000);
    }
        countTime();
}  

//首页广告图

    var gg=document.querySelector(".gg-bg");
    var ii=document.querySelector(".gg>span");
 if(ii!==null){
    if(sessionStorage.hh==1){
        gg.style.display="none"
    }else{
        gg.style.display="block"
    }
   
        ii.onclick=function(){
            gg.style.display="none"
            sessionStorage.hh=1;
        }
        var r=0;
    
        r=setInterval(function(){
            var span=document.querySelector(".gg>p>span");
            var zz=span.innerHTML;
            zz--;
            if(zz===0){
                gg.style.display="none";
                clearInterval(r)
            }
            span.innerHTML=zz;
                
        },1000)
    }
    

    //倒计时
    
    
        


//首页广告图

//返回顶部



var topp=document.querySelector(".topp")
console.log(topp!==null);
if(topp!==null){
    function smoothscroll(){
        var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 0) {
             window.requestAnimationFrame(smoothscroll);
             window.scrollTo (0,currentScroll - (currentScroll/5));
        }
    }
    topp.addEventListener("click",function(){
        smoothscroll();
    })
    
    

    //返回顶部消失
    
    
    
    var topp=document.querySelector(".topp");
    window.onscroll=function(){
        if(document.body.scrollTop>150){
            topp.style.display="inline-block";
        }else{
            topp.style.display="none";
        }
    }

}






   new Vue({
    el:"#list",
    data:{
        list0:[
            {img:"img/fenlei/tuijian/1.jpg",price:"吉武国"},
            {img:"img/fenlei/tuijian/2.jpg",price:"T恤"},
            {img:"img/fenlei/tuijian/3.jpg",price:"休闲衬衫"},
            {img:"img/fenlei/tuijian/4.jpg",price:"卫衣"},
            {img:"img/fenlei/tuijian/5.jpg",price:"水柔棉"},
            {img:"img/fenlei/tuijian/6.jpg",price:"牛津纺"},
            {img:"img/fenlei/tuijian/7.jpg",price:"夹克"},
            {img:"img/fenlei/tuijian/8.jpg",price:"针织衫"},
            {img:"img/fenlei/tuijian/9.jpg",price:"外套"},
            {img:"img/fenlei/tuijian/10.jpg",price:"童装"},
            {img:"img/fenlei/tuijian/11.jpg",price:"大衣"},
            {img:"img/fenlei/tuijian/12.jpg",price:"棉服"},
            {img:"img/fenlei/tuijian/13.jpg",price:"羽绒服"},
            {img:"img/fenlei/tuijian/14.jpg",price:"休闲裤"},
            {img:"img/fenlei/tuijian/15.jpg",price:"牛仔裤"},
            {img:"img/fenlei/tuijian/16.jpg",price:"帆布鞋"},
            {img:"img/fenlei/tuijian/17.jpg",price:"布鞋"},
            {img:"img/fenlei/tuijian/18.jpg",price:"拖鞋"},
            {img:"img/fenlei/tuijian/1.jpg",price:"吉武国"},
            {img:"img/fenlei/tuijian/2.jpg",price:"T恤"},
            {img:"img/fenlei/tuijian/3.jpg",price:"休闲衬衫"},
            {img:"img/fenlei/tuijian/4.jpg",price:"卫衣"},
            {img:"img/fenlei/tuijian/5.jpg",price:"水柔棉"},
            {img:"img/fenlei/tuijian/6.jpg",price:"牛津纺"},
            {img:"img/fenlei/tuijian/7.jpg",price:"夹克"},
            {img:"img/fenlei/tuijian/8.jpg",price:"针织衫"},
            {img:"img/fenlei/tuijian/9.jpg",price:"外套"},
            {img:"img/fenlei/tuijian/10.jpg",price:"童装"},
            {img:"img/fenlei/tuijian/11.jpg",price:"大衣"},
            {img:"img/fenlei/tuijian/12.jpg",price:"棉服"},
            {img:"img/fenlei/tuijian/13.jpg",price:"羽绒服"},
            {img:"img/fenlei/tuijian/14.jpg",price:"休闲裤"},
            {img:"img/fenlei/tuijian/15.jpg",price:"牛仔裤"},
            {img:"img/fenlei/tuijian/16.jpg",price:"帆布鞋"},
            {img:"img/fenlei/tuijian/17.jpg",price:"布鞋"},
            {img:"img/fenlei/tuijian/18.jpg",price:"拖鞋"}
        ],
        list1:[
            {img:"img/fenlei/nanzhuang/1.jpg",price:"免烫衬衫"},
            {img:"img/fenlei/nanzhuang/2.jpg",price:"休闲衬衫"},
            {img:"img/fenlei/nanzhuang/3.jpg",price:"卫衣"},
            {img:"img/fenlei/nanzhuang/4.jpg",price:"T恤"},
            {img:"img/fenlei/nanzhuang/5.jpg",price:"POLO衫"},
            {img:"img/fenlei/nanzhuang/6.jpg",price:"短袖衬衫"},
            {img:"img/fenlei/nanzhuang/7.jpg",price:"水柔棉"},
            {img:"img/fenlei/nanzhuang/8.jpg",price:"麻衬衫"},
            {img:"img/fenlei/nanzhuang/9.jpg",price:"针织衫"},
            {img:"img/fenlei/nanzhuang/10.jpg",price:"外套"},
            {img:"img/fenlei/nanzhuang/11.jpg",price:"西服"},
            {img:"img/fenlei/nanzhuang/12.jpg",price:"大衣"},
            {img:"img/fenlei/nanzhuang/13.jpg",price:"皮肤衣"},
            {img:"img/fenlei/nanzhuang/14.jpg",price:"休闲裤"},
            {img:"img/fenlei/nanzhuang/15.jpg",price:"牛仔裤"},
            {img:"img/fenlei/nanzhuang/16.jpg",price:"针织裤"},
            {img:"img/fenlei/nanzhuang/17.jpg",price:"羽绒服"},
            {img:"img/fenlei/nanzhuang/1.jpg",price:"免烫衬衫"},
            {img:"img/fenlei/nanzhuang/2.jpg",price:"休闲衬衫"},
            {img:"img/fenlei/nanzhuang/3.jpg",price:"卫衣"},
            {img:"img/fenlei/nanzhuang/4.jpg",price:"T恤"},
            {img:"img/fenlei/nanzhuang/5.jpg",price:"POLO衫"},
            {img:"img/fenlei/nanzhuang/6.jpg",price:"短袖衬衫"},
            {img:"img/fenlei/nanzhuang/7.jpg",price:"水柔棉"},
            {img:"img/fenlei/nanzhuang/8.jpg",price:"麻衬衫"},
            {img:"img/fenlei/nanzhuang/9.jpg",price:"针织衫"},
            {img:"img/fenlei/nanzhuang/10.jpg",price:"外套"},
            {img:"img/fenlei/nanzhuang/11.jpg",price:"西服"},
            {img:"img/fenlei/nanzhuang/12.jpg",price:"大衣"},
            {img:"img/fenlei/nanzhuang/13.jpg",price:"皮肤衣"},
            {img:"img/fenlei/nanzhuang/14.jpg",price:"休闲裤"},
            {img:"img/fenlei/nanzhuang/15.jpg",price:"牛仔裤"},
            {img:"img/fenlei/nanzhuang/16.jpg",price:"针织裤"},
            {img:"img/fenlei/nanzhuang/17.jpg",price:"羽绒服"}
        ],
        list2:[
            {img:"img/fenlei/nvzhuang/1.jpg",price:"卫衣"},
            {img:"img/fenlei/nvzhuang/2.jpg",price:"水柔棉"},
            {img:"img/fenlei/nvzhuang/3.jpg",price:"T恤"},
            {img:"img/fenlei/nvzhuang/4.jpg",price:"休闲衬衣"},
            {img:"img/fenlei/nvzhuang/5.jpg",price:"麻衬衫裙"},
            {img:"img/fenlei/nvzhuang/6.jpg",price:"针织衫"},
            {img:"img/fenlei/nvzhuang/7.jpg",price:"外套"},
            {img:"img/fenlei/nvzhuang/8.jpg",price:"皮肤衣"},
            {img:"img/fenlei/nvzhuang/9.jpg",price:"运动速干"},
            {img:"img/fenlei/nvzhuang/10.jpg",price:"牛仔裤"},
            {img:"img/fenlei/nvzhuang/11.jpg",price:"针织裤"},
            {img:"img/fenlei/nvzhuang/12.jpg",price:"休闲裤"},
            {img:"img/fenlei/nvzhuang/1.jpg",price:"卫衣"},
            {img:"img/fenlei/nvzhuang/2.jpg",price:"水柔棉"},
            {img:"img/fenlei/nvzhuang/3.jpg",price:"T恤"},
            {img:"img/fenlei/nvzhuang/4.jpg",price:"休闲衬衣"},
            {img:"img/fenlei/nvzhuang/5.jpg",price:"麻衬衫裙"},
            {img:"img/fenlei/nvzhuang/6.jpg",price:"针织衫"},
            {img:"img/fenlei/nvzhuang/7.jpg",price:"外套"},
            {img:"img/fenlei/nvzhuang/8.jpg",price:"皮肤衣"},
            {img:"img/fenlei/nvzhuang/9.jpg",price:"运动速干"},
            {img:"img/fenlei/nvzhuang/10.jpg",price:"牛仔裤"},
            {img:"img/fenlei/nvzhuang/11.jpg",price:"针织裤"},
            {img:"img/fenlei/nvzhuang/12.jpg",price:"休闲裤"},
        ],
        list3:[
            {img:"img/fenlei/nanxie/1.jpg",price:"帆布鞋"},
            {img:"img/fenlei/nanxie/2.jpg",price:"休闲鞋"},
            {img:"img/fenlei/nanxie/3.jpg",price:"复古跑"},
            {img:"img/fenlei/nanxie/4.jpg",price:"皮鞋"},
        ],
        list4:[
            {img:"img/fenlei/nvxie/1.jpg",price:"帆布鞋"},
            {img:"img/fenlei/nvxie/2.jpg",price:"休闲鞋"},
            {img:"img/fenlei/nvxie/3.jpg",price:"复古跑"},
        ],
        list5:[
            {img:"img/fenlei/wapin/1.jpg",price:"连裤袜"},
            {img:"img/fenlei/wapin/2.jpg",price:"打底袜"},
            {img:"img/fenlei/wapin/3.jpg",price:"棉袜"},
        ],
        list6:[
            {img:"img/fenlei/jiaju/1.jpg",price:"床品"},
            {img:"img/fenlei/jiaju/2.jpg",price:"床单"},
            {img:"img/fenlei/jiaju/3.jpg",price:"被子"},
            {img:"img/fenlei/jiaju/4.jpg",price:"家居毯"},
            {img:"img/fenlei/jiaju/5.jpg",price:"枕头"},
            {img:"img/fenlei/jiaju/6.jpg",price:"围巾"},
            {img:"img/fenlei/jiaju/7.jpg",price:"背心"},
            {img:"img/fenlei/jiaju/8.jpg",price:"睡袍"},
            {img:"img/fenlei/jiaju/9.jpg",price:"箱包"},
            {img:"img/fenlei/jiaju/10.jpg",price:"钱包"},
            {img:"img/fenlei/jiaju/11.jpg",price:"拖鞋"},
            {img:"img/fenlei/jiaju/1.jpg",price:"床品"},
            {img:"img/fenlei/jiaju/2.jpg",price:"床单"},
            {img:"img/fenlei/jiaju/3.jpg",price:"被子"},
            {img:"img/fenlei/jiaju/4.jpg",price:"家居毯"},
            {img:"img/fenlei/jiaju/5.jpg",price:"枕头"},
            {img:"img/fenlei/jiaju/6.jpg",price:"围巾"},
            {img:"img/fenlei/jiaju/7.jpg",price:"背心"},
            {img:"img/fenlei/jiaju/8.jpg",price:"睡袍"},
            {img:"img/fenlei/jiaju/9.jpg",price:"箱包"},
            {img:"img/fenlei/jiaju/10.jpg",price:"钱包"},
            {img:"img/fenlei/jiaju/11.jpg",price:"拖鞋"}
        ],
        list7:[
            {img:"img/fenlei/tongzhuang/1.jpg",price:"卫衣"},
            {img:"img/fenlei/tongzhuang/2.jpg",price:"男童"},
            {img:"img/fenlei/tongzhuang/3.jpg",price:"女童"},
            {img:"img/fenlei/tongzhuang/4.jpg",price:"皮肤衣"},
        ],
        list8:[
            {img:"img/fenlei/neiyi/1.jpg",price:"秋衣"},
            {img:"img/fenlei/neiyi/2.jpg",price:"打底裤"},
            {img:"img/fenlei/neiyi/3.jpg",price:"内衣"},
        ]
    }
})
  

//左右滚动条
 var height1= document.documentElement.clientHeight || document.body.clientHeight;
     var xs3=document.querySelector(".classify .row .col-xs-3");
     var xs9=document.querySelector(".classify .row .col-xs-9");
 if(xs3 !==null){
     xs3.style.height=height1-60+"px"
     xs9.style.height=height1-100+"px"
 }
     



//    猜你喜欢
    
    
  new Vue({
    el:"#like",
    data:{
        arrs:[
            {img:"img/shopping/1.jpg",price1:"凡客卫衣 暖绒连帽 熊本熊 S2",price3:"￥121.80",price4:"￥190.80"},
            {img:"img/shopping/2.jpg",price1:"打底裤 蕾丝竖拼 女款",price3:"￥20.80",price4:"￥29.80"},
            {img:"img/shopping/3.jpg",price1:"T恤 水柔棉 蝙蝠hhhhhhh 女款",price3:"￥189.80",price4:"￥200.80"},
            {img:"img/shopping/11.jpg",price1:"凡客家居鞋 全包华夫格防滑款",price3:"￥68.80",price4:"￥89.80"},
            {img:"img/shopping/6.jpg",price1:"凡客卫衣 暖绒连帽 熊本熊 S2",price3:"￥121.80",price4:"￥190.80"},
            {img:"img/shopping/7.jpg",price1:"凡客卫衣 暖绒连帽 熊本熊 S2",price3:"￥121.80",price4:"￥190.80"},
            {img:"img/shopping/8.jpg",price1:"凡客卫衣 暖绒连帽 熊本熊 S2",price3:"￥121.80",price4:"￥190.80"},
            {img:"img/shopping/9.jpg",price1:"凡客卫衣 暖绒连帽 熊本熊 S2",price3:"￥121.80",price4:"￥190.80"},
            {img:"img/shopping/10.jpg",price1:"凡客卫衣 暖绒连帽 熊本熊 S2",price3:"￥121.80",price4:"￥190.80"},
            {img:"img/shopping/11.jpg",price1:"凡客卫衣 暖绒连帽 熊本熊 S2",price3:"￥121.80",price4:"￥190.80"},
            {img:"img/shopping/xie6.jpg",price1:"凡客卫衣 暖绒连帽 熊本熊 S2",price3:"￥121.80",price4:"￥190.80"},
            {img:"img/shopping/ku1.jpg",price1:"凡客卫衣 暖绒连帽 熊本熊 S2",price3:"￥121.80",price4:"￥190.80"},
            {img:"img/shopping/pin7.jpg",price1:"凡客卫衣 暖绒连帽 熊本熊 S2",price3:"￥121.80",price4:"￥190.80"},
            {img:"img/shopping/xiong3.jpg",price1:"凡客卫衣 暖绒连帽 熊本熊 S2",price3:"￥121.80",price4:"￥190.80"},
            {img:"img/shopping/zhuang2.jpg",price1:"凡客卫衣 暖绒连帽 熊本熊 S2",price3:"￥121.80",price4:"￥190.80"},
            {img:"img/shopping/xie1.jpg",price1:"凡客卫衣 暖绒连帽 熊本熊 S2",price3:"￥121.80",price4:"￥190.80"},
            {img:"img/shopping/xiong5.jpg",price1:"凡客卫衣 暖绒连帽 熊本熊 S2",price3:"￥121.80",price4:"￥190.80"},
            {img:"img/shopping/xiong7.jpg",price1:"凡客卫衣 暖绒连帽 熊本熊 S2",price3:"￥121.80",price4:"￥190.80"},
            {img:"img/shopping/ku7.jpg",price1:"凡客卫衣 暖绒连帽 熊本熊 S2",price3:"￥121.80",price4:"￥190.80"},
            {img:"img/shopping/pin7.jpg",price1:"凡客卫衣 暖绒连帽 熊本熊 S2",price3:"￥121.80",price4:"￥190.80"},
            
            
        ]
    }
})


//分类选项卡
    var tab=document.querySelector(".tab ul")
    var tabli=document.querySelectorAll(".tab ul a li");
    var classify=document.querySelectorAll(".classify .col-xs-9>div")
    if(classify[0]!==undefined){
        classify[0].style.display="block";
     for(var t=0;t<tabli.length;t++){
        tabli[t].index=t;
        tabli[t].onclick=function(){
            for(var c=0;c<classify.length;c++){
                tabli[c].setAttribute("class","")
                classify[c].style.display="none"
            }
            tabli[this.index].setAttribute("class","te")
            classify[this.index].style.display="block"
        }
    }
    }


         
//个人中心-功能


new Vue({
    el:"#gong",
    data:{
        tion:[
            {img:"img/me/gn1.png",price:"充值返现"},
            {img:"img/me/gn2.png",price:"我的私人订制"},
            {img:"img/me/gn3.png",price:"物流查询"},
            {img:"img/me/gn4.png",price:"退货记录"},
            {img:"img/me/gn5.png",price:"地址管理"},
            {img:"img/me/gn6.png",price:"我的礼品卡"},
            {img:"img/me/gn7.png",price:"我的优惠券"},
            {img:"img/me/gn8.png",price:"我的积分"},
            {img:"img/me/gn9.png",price:"我的评论"},
            {img:"img/me/gn10.png",price:"我的提问"},
            {img:"img/me/gn11.png",price:"投诉建议"},
            
            
        ]
    }
})



//登录选项卡



 var lis=document.querySelectorAll(".sign h3 a");
 var imgs=document.querySelectorAll(".text div");
 console.log(lis[0]);
if(lis[0]!==undefined){
    lis[0].style.borderBottom="2px #c12822 solid"
    for(var i=0;i<lis.length;i++){
        lis[i].name=i;
        lis[i].onclick=function(){
            for(var t=0;t<imgs.length;t++){
                imgs[t].setAttribute("class","disappear");
                lis[t].style.borderBottom="none";

            }
            imgs[this.name].setAttribute("class","appear");
            lis[this.name].style.borderBottom="2px #c12822 solid"
        }
    }
}
 


//搜索弹出框

var sousuo=document.querySelector(".sousuo");

var inputt=document.querySelector(".search .left input");

var fk=document.querySelector(".sousuo .fk");
    inputt.onclick=function(){
        sousuo.style.display="block";
    }

    fk.onclick=function(){
        sousuo.style.display="none";
    }




































