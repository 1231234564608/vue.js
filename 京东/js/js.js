
        setInterval(function(){
            x();
        },2000);
        setInterval(function(){
            e();
        },2800);
        function x(){
            $(".news .center .center-p p").css({"transform":"translateY(-25px)","transition":"1s"});
        }
        function e(){
            $(".news .center .center-p p").css({"transform":"translateY(0px)","transition":"0s"});
            $(".news .center .center-p p").eq(0).appendTo(".news .center .center-p");
        }


var mySwiper = new Swiper ('.banner', {
//    direction:horizontal,
        loop: true,
    //注：horizontal：横向切换（默认）；vertical：竖向切换
    //   loop：循环切换
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    }
  }) 


//京东直播

var swiper = new Swiper('.zhibo', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });


//
//        
////倒计时
//function fun(){
//        var dateTarget=new Date("2019-6-1 20:30:00");//        目标时间
//        var newdate=new Date();//当前时间
//        var dateTargettime=dateTarget.getTime();//目标时间戳
//        var newdatetime=newdate.getTime()//当前时间戳
//        var jian=dateTargettime-newdatetime;
////        console.log(jian)
//        
//        var days=Math.floor(jian/(1000*60*60*24));
//        var daysYu=jian%(1000*60*60*24);
//            
//            
//        var hours=Math.floor(daysYu/(1000*60*60));
//        var hoursYu=daysYu%(1000*60*60);
//            
//            
//        var mintues=Math.floor(hoursYu/(1000*60));
//        var miantuesYU=hoursYu%(1000*60);
//            
//            
//        var seconds=Math.floor(miantuesYU/(1000));
//            
//        var s=document.querySelector(".miao-top .left .s");            
//        var f=document.querySelector(".miao-top .left .f");            
//        var m=document.querySelector(".miao-top .left .m");
//    
//    
//        s.innerHTML=(hours)
//        f.innerHTML=(mintues)
//        m.innerHTML=(seconds)
//}
//        
//        fun();
//        setInterval(function(){
//            fun();
//        },1000)
//




//首页京东秒杀部分的效果（倒计时）

var zxx = {
    $: function(id){
        return document.getElementById(id);
    },
    futureDate: Date.UTC(2018, 5, 1, 8),
    obj: function(){
        return {
            sec: zxx.$("sec"),
            mini: zxx.$("mini"),
            hour: zxx.$("hour"),
            day: zxx.$("day"),
            month: zxx.$("month"),
            year: zxx.$("year")
        }
    }
};

//fnTimeCountDown(zxx.futureDate, zxx.obj());


//返回顶部消失和搜索栏背景颜色
var topp=document.querySelector(".topp");
var sousuo=document.querySelector(".search")
        var gb=document.querySelector(".gb")
window.onscroll=function(){
    if(sousuo !=null){
        if(document.body.scrollTop>100){
            gb.style.display="none";
        sousuo.style.backgroundColor="black";
         topp.style.display="inline-block"
    }else{
            gb.style.display="block";
        sousuo.style.backgroundColor="transparent";
        topp.style.display="none"
    }
    }
    
}

//  window.onscroll=function(){
//        
//        if(document.body.scrollTop>530){
//           
//        }else{
//            
//        }
//    }
      


//vue部分（猜你喜欢）



new Vue({
    el:"#cnxh",
    data:{
        arrs:[
            {img:"img/cainixihuan/lajidai.jpg",price1:"自营",price2:"【京东超市】e洁 自动收口垃圾袋加厚手提式......",price3:"￥21.80",price4:"￥19.80"},
            
            {img:"img/cainixihuan/wazi.jpg",price1:"安昕 良选男士船袜5双装 中筒棉袜商务男娃子吸汗透气短袜.....",price3:"￥59.80",price5:"看相似"},
            
            {img:"img/cainixihuan/shujuxian.jpg",price2:"苹果原装数据线iPhone7Plus/6P手机USB线.....",price3:"￥155.80",price5:"看相似"},
            
            {img:"img/cainixihuan/qianbao.jpg",price1:"真皮多卡位零钱包女士卡夹信用卡包头层牛皮驾驶证.....",price3:"￥59.80",price5:"看相似"},
            
            {img:"img/cainixihuan/wangyuanjing.jpg",price2:"QANLIIY千里鹰便携双筒望远镜高倍高清微光夜视非红军演戏....",price3:"￥138.80",price5:"看相似"},
            
            {img:"img/cainixihuan/mlik.jpg",price1:"自营",price2:"【京东超市】蒙牛（MENGNIU）成人奶粉 全脂.....",price3:"￥27.80",price5:"看相似"},
            
            {img:"img/cainixihuan/lajidai.jpg",price1:"自营",price2:"【京东超市】清风(APP）卷纸 原木纯品 3层270段卫生.....",price3:"￥18.80",price5:"看相似"},
            
            {img:"img/cainixihuan/lajidai.jpg",price1:"自营",price2:"【京东超市】绿之源360°室内装修安全卫士活性炭汽车.....",price3:"￥99.80",price5:"看相似"},
            
            {img:"img/cainixihuan/lajidai.jpg",price1:"自营",price2:"【京东超市】清风(APP）卷纸 原木纯品 3层270段卫生.....",price3:"￥18.80",price5:"看相似"},
            
            {img:"img/cainixihuan/lajidai.jpg",price1:"自营",price2:"【京东超市】绿之源360°室内装修安全卫士活性炭汽车.....",price3:"￥99.80",price5:"看相似"}
            
            
        ]
    }
})



//返回顶部

    var topp=document.querySelector(".topp");
//方法一  
//    topp.addEventListener("click",function(){
//        document.body.scrollTop=0;
//        document.documentElement.scrollTop=0;
//    })

//方法二

    topp.addEventListener("click",function(){
    
    var t=setInterval(function(){
        document.body.scrollTop=document.body.scrollTop -20;

document.documentElement.scrollTop=document.documentElement.scrollTop -20;

        if(document.body.scrollTop===0){
            clearInterval(t)
        }
    },10)
    
    
})
//方法三
//        $(".topp").click(function(){
//            $("html,body").animate({scrollTop:0},500)
//        })

//返回顶部



    




//分类子页面 


    
    
    
    

    
    
    
//分类选项卡

  new Vue({
      el:"#list",
      data:{
          list0:[
              {img1:"img/surt/re/re-1.png",name:"电风扇"},
              {img1:"img/surt/re/re-2.jpg",name:"手机"},
              {img1:"img/surt/re/re-3.png",name:"空调"},
              {img1:"img/surt/re/re-4.png",name:"充电宝"},
              {img1:"img/surt/re/re-5.jpg",name:"蓝牙耳机"},
              {img1:"img/surt/re/re-6.png",name:"蚊帐"},
              {img1:"img/surt/re/re-7.png",name:"凉席"},
              {img1:"img/surt/re/re-8.png",name:"耳机"},
              {img1:"img/surt/re/re-9.jpg",name:"电饭煲"},
              {img1:"img/surt/re/re10.png",name:"空调挂机"},
              {img1:"img/surt/re/re11.png",name:"路由器"},
              {img1:"img/surt/re/re12.png",name:"空调扇"},
              {img1:"img/surt/re/re13.png",name:"男鞋"},
              {img1:"img/surt/re/re14.png",name:"热水器"},
              {img1:"img/surt/re/re15.jpg",name:"防晒"}
          ],
          list01:[
              {img1:"img/surt/re/re16.png",name:"冰箱"},
              {img1:"img/surt/re/re17.png",name:"洗衣机"},
              {img1:"img/surt/re/re18.png",name:"电视"}
          ],
          list02:[
              {img1:"img/surt/re/re19.png",name:"华为手机"},
              {img1:"img/surt/re/re20.png",name:"小米手机"},
              {img1:"img/surt/re/re21.png",name:"苹果"}
          ],
          list1:[
              {img1:"img/surt/shu/shu-1.png",name:"小米"},
              {img1:"img/surt/shu/shu2.jpg",name:"华为"},
              {img1:"img/surt/shu/shu3.jpg",name:"荣耀"},
              {img1:"img/surt/shu/shu4.jpg",name:"iPhone"},
              {img1:"img/surt/shu/shu5.png",name:"vivo"},
              {img1:"img/surt/shu/shu6.png",name:"OPPO"},
              {img1:"img/surt/shu/shu7.jpg",name:"魅族"},
              {img1:"img/surt/shu/shu8.png",name:"三星"},
              {img1:"img/surt/shu/shu9.jpg",name:"一加"},
              {img1:"img/surt/shu/shu10.jpg",name:"360手机"},
              {img1:"img/surt/shu/shu11.jpg",name:"锤子手机"},
              {img1:"img/surt/shu/shu12.jpg",name:"努比亚手机"}
          ],
          list011:[
              {img1:"img/surt/shu/shu13.jpg",name:"老人机"},
              {img1:"img/surt/shu/shu14.jpg",name:"手机"},
              {img1:"img/surt/shu/shu15.jpg",name:"全面屏"},
              {img1:"img/surt/shu/shu16.jpg",name:"游戏手机"},
              {img1:"img/surt/shu/shu17.jpg",name:"拍照手机"},
              {img1:"img/surt/shu/shu18.jpg",name:"对讲机"},
              {img1:"img/surt/shu/shu19.jpg",name:"京东回收"},
              {img1:"img/surt/shu/shu20.jpg",name:"女性手机"},
              {img1:"img/surt/shu/shu21.jpg",name:"京东维修"},
          ],
          list012:[
              {img1:"img/surt/shu/shu22.png",name:"合约机"},
              {img1:"img/surt/shu/shu23.png",name:"选号卡"},
              {img1:"img/surt/shu/shu24.jpg",name:"办套餐"},
              {img1:"img/surt/shu/shu25.jpg",name:"京东网厅"}
          ],
          list013:[
              {img1:"img/surt/shu/shu26.jpg",name:"数据线"},
              {img1:"img/surt/shu/shu27.jpg",name:"手机储存卡"},
              {img1:"img/surt/shu/shu28.jpg",name:"充电宝"},
              {img1:"img/surt/shu/shu29.jpg",name:"手机贴膜"},
              {img1:"img/surt/shu/shu30.jpg",name:"手机耳机"},
              {img1:"img/surt/shu/shu31.jpg",name:"蓝牙耳机"},
              {img1:"img/surt/shu/shu32.jpg",name:"手机支架"},
              {img1:"img/surt/shu/shu33.jpg",name:"手机饰品"},
              {img1:"img/surt/shu/shu34.jpg",name:"车载配件"},
              {img1:"img/surt/shu/shu35.jpg",name:"充电器"},
              {img1:"img/surt/shu/shu36.jpg",name:"手机电池"},
              {img1:"img/surt/shu/shu37.jpg",name:"创意配件"},
              {img1:"img/surt/shu/shu38.jpg",name:"拍照配件"},
              {img1:"img/surt/shu/shu39.jpg",name:"苹果周边"},
              {img1:"img/surt/shu/shu40.jpg",name:"手机壳/保护套"},
              {img1:"img/surt/shu/shu41.jpg",name:"无线充电器"},
              {img1:"img/surt/shu/shu42.jpg",name:"背夹充电宝"},
              {img1:"img/surt/shu/shu43.jpg",name:"手机转接"},
          ],
          list014:[
              {img1:"img/surt/shu/shu44.jpg",name:"单反相机"},
              {img1:"img/surt/shu/shu45.jpg",name:"数码相机"},
              {img1:"img/surt/shu/shu46.jpg",name:"拍立得"},
              {img1:"img/surt/shu/shu47.jpg",name:"户外器材"},
              {img1:"img/surt/shu/shu48.jpg",name:"微单相机"},
              {img1:"img/surt/shu/shu49.jpg",name:"摄像机"},
              {img1:"img/surt/shu/shu50.jpg",name:"运动相机"},
              {img1:"img/surt/shu/shu51.jpg",name:"镜头"},
              {img1:"img/surt/shu/shu52.jpg",name:"影棚器材"},
              {img1:"img/surt/shu/shu53.png",name:"冲印服务"},
          ],
          list015:[
              {img1:"img/surt/shu/shu54.jpg",name:"无线音箱"},
              {img1:"img/surt/shu/shu55.jpg",name:"音响/音箱"},
              {img1:"img/surt/shu/shu56.jpg",name:"MP3/MP4"},
              {img1:"img/surt/shu/shu57.jpg",name:"耳机/耳麦"},
              {img1:"img/surt/shu/shu58.jpg",name:"收音机"},
              {img1:"img/surt/shu/shu59.jpg",name:"麦克风"},
              {img1:"img/surt/shu/shu60.jpg",name:"专业音频"},
          ],
          list016:[
              {img1:"img/surt/shu/shu61.jpg",name:"储存卡"},
              {img1:"img/surt/shu/shu62.jpg",name:"三脚架"},
              {img1:"img/surt/shu/shu63.jpg",name:"数码支架"},
              {img1:"img/surt/shu/shu64.jpg",name:"读卡器"},
              {img1:"img/surt/shu/shu66.jpg",name:"滤镜"},
              {img1:"img/surt/shu/shu65.jpg",name:"相机清洁"},
              {img1:"img/surt/shu/shu67.jpg",name:"镜头附件"},
              {img1:"img/surt/shu/shu68.jpg",name:"相机包"},
              {img1:"img/surt/shu/shu69.jpg",name:"闪光灯"},
              {img1:"img/surt/shu/shu70.jpg",name:"机身附件"},
              {img1:"img/surt/shu/shu71.jpg",name:"充电器"},
          ],
          list2:[
              {img1:"img/surt/chu/chu1.jpg",name:"电水壶"},
              {img1:"img/surt/chu/chu2.jpg",name:"电压力锅"},
              {img1:"img/surt/chu/chu3.jpg",name:"电饭煲"},
              {img1:"img/surt/chu/chu4.jpg",name:"电磁炉"},
              {img1:"img/surt/chu/chu5.jpg",name:"微波炉"},
              {img1:"img/surt/chu/chu6.jpg",name:"电饼铛"},
              {img1:"img/surt/chu/chu7.jpg",name:"豆浆机"},
              {img1:"img/surt/chu/chu8.jpg",name:"多用途锅"},
              {img1:"img/surt/chu/chu9.jpg",name:"料理机"},
              {img1:"img/surt/chu/chu10.jpg",name:"榨汁机"},
              {img1:"img/surt/chu/chu11.jpg",name:"电烤箱"},
              {img1:"img/surt/chu/chu12.jpg",name:"养生壶"}
          ],
          list3:[
              {img1:"img/surt/chu/chu1.jpg",name:"电水壶"},
              {img1:"img/surt/chu/chu2.jpg",name:"电压力锅"},
              {img1:"img/surt/chu/chu3.jpg",name:"电饭煲"},
              {img1:"img/surt/chu/chu4.jpg",name:"电磁炉"},
              {img1:"img/surt/chu/chu5.jpg",name:"微波炉"},
              {img1:"img/surt/chu/chu6.jpg",name:"电饼铛"},
              {img1:"img/surt/chu/chu7.jpg",name:"豆浆机"},
              {img1:"img/surt/chu/chu8.jpg",name:"多用途锅"},
              {img1:"img/surt/chu/chu9.jpg",name:"料理机"},
              {img1:"img/surt/chu/chu10.jpg",name:"榨汁机"},
              {img1:"img/surt/chu/chu11.jpg",name:"电烤箱"},
              {img1:"img/surt/chu/chu12.jpg",name:"养生壶"}
          ],
          list4:[
              {img1:"img/surt/chu/chu1.jpg",name:"电水壶"},
              {img1:"img/surt/chu/chu2.jpg",name:"电压力锅"},
              {img1:"img/surt/chu/chu3.jpg",name:"电饭煲"},
              {img1:"img/surt/chu/chu4.jpg",name:"电磁炉"},
              {img1:"img/surt/chu/chu5.jpg",name:"微波炉"},
              {img1:"img/surt/chu/chu6.jpg",name:"电饼铛"},
              {img1:"img/surt/chu/chu7.jpg",name:"豆浆机"},
              {img1:"img/surt/chu/chu8.jpg",name:"多用途锅"},
              {img1:"img/surt/chu/chu9.jpg",name:"料理机"},
              {img1:"img/surt/chu/chu10.jpg",name:"榨汁机"},
              {img1:"img/surt/chu/chu11.jpg",name:"电烤箱"},
              {img1:"img/surt/chu/chu12.jpg",name:"养生壶"}
          ],
          list5:[
              {img1:"img/surt/chu/chu1.jpg",name:"电水壶"},
              {img1:"img/surt/chu/chu2.jpg",name:"电压力锅"},
              {img1:"img/surt/chu/chu3.jpg",name:"电饭煲"},
              {img1:"img/surt/chu/chu4.jpg",name:"电磁炉"},
              {img1:"img/surt/chu/chu5.jpg",name:"微波炉"},
              {img1:"img/surt/chu/chu6.jpg",name:"电饼铛"},
              {img1:"img/surt/chu/chu7.jpg",name:"豆浆机"},
              {img1:"img/surt/chu/chu8.jpg",name:"多用途锅"},
              {img1:"img/surt/chu/chu9.jpg",name:"料理机"},
              {img1:"img/surt/chu/chu10.jpg",name:"榨汁机"},
              {img1:"img/surt/chu/chu11.jpg",name:"电烤箱"},
              {img1:"img/surt/chu/chu12.jpg",name:"养生壶"}
          ],
          list6:[
              {img1:"img/surt/chu/chu1.jpg",name:"电水壶"},
              {img1:"img/surt/chu/chu2.jpg",name:"电压力锅"},
              {img1:"img/surt/chu/chu3.jpg",name:"电饭煲"},
              {img1:"img/surt/chu/chu4.jpg",name:"电磁炉"},
              {img1:"img/surt/chu/chu5.jpg",name:"微波炉"},
              {img1:"img/surt/chu/chu6.jpg",name:"电饼铛"},
              {img1:"img/surt/chu/chu7.jpg",name:"豆浆机"},
              {img1:"img/surt/chu/chu8.jpg",name:"多用途锅"},
              {img1:"img/surt/chu/chu9.jpg",name:"料理机"},
              {img1:"img/surt/chu/chu10.jpg",name:"榨汁机"},
              {img1:"img/surt/chu/chu11.jpg",name:"电烤箱"},
              {img1:"img/surt/chu/chu12.jpg",name:"养生壶"}
          ],
          list7:[
              {img1:"img/surt/chu/chu1.jpg",name:"电水壶"},
              {img1:"img/surt/chu/chu2.jpg",name:"电压力锅"},
              {img1:"img/surt/chu/chu3.jpg",name:"电饭煲"},
              {img1:"img/surt/chu/chu4.jpg",name:"电磁炉"},
              {img1:"img/surt/chu/chu5.jpg",name:"微波炉"},
              {img1:"img/surt/chu/chu6.jpg",name:"电饼铛"},
              {img1:"img/surt/chu/chu7.jpg",name:"豆浆机"},
              {img1:"img/surt/chu/chu8.jpg",name:"多用途锅"},
              {img1:"img/surt/chu/chu9.jpg",name:"料理机"},
              {img1:"img/surt/chu/chu10.jpg",name:"榨汁机"},
              {img1:"img/surt/chu/chu11.jpg",name:"电烤箱"},
              {img1:"img/surt/chu/chu12.jpg",name:"养生壶"}
          ],
          list8:[
              {img1:"img/surt/chu/chu1.jpg",name:"电水壶"},
              {img1:"img/surt/chu/chu2.jpg",name:"电压力锅"},
              {img1:"img/surt/chu/chu3.jpg",name:"电饭煲"},
              {img1:"img/surt/chu/chu4.jpg",name:"电磁炉"},
              {img1:"img/surt/chu/chu5.jpg",name:"微波炉"},
              {img1:"img/surt/chu/chu6.jpg",name:"电饼铛"},
              {img1:"img/surt/chu/chu7.jpg",name:"豆浆机"},
              {img1:"img/surt/chu/chu8.jpg",name:"多用途锅"},
              {img1:"img/surt/chu/chu9.jpg",name:"料理机"},
              {img1:"img/surt/chu/chu10.jpg",name:"榨汁机"},
              {img1:"img/surt/chu/chu11.jpg",name:"电烤箱"},
              {img1:"img/surt/chu/chu12.jpg",name:"养生壶"}
          ],
          list9:[
              {img1:"img/surt/chu/chu1.jpg",name:"电水壶"},
              {img1:"img/surt/chu/chu2.jpg",name:"电压力锅"},
              {img1:"img/surt/chu/chu3.jpg",name:"电饭煲"},
              {img1:"img/surt/chu/chu4.jpg",name:"电磁炉"},
              {img1:"img/surt/chu/chu5.jpg",name:"微波炉"},
              {img1:"img/surt/chu/chu6.jpg",name:"电饼铛"},
              {img1:"img/surt/chu/chu7.jpg",name:"豆浆机"},
              {img1:"img/surt/chu/chu8.jpg",name:"多用途锅"},
              {img1:"img/surt/chu/chu9.jpg",name:"料理机"},
              {img1:"img/surt/chu/chu10.jpg",name:"榨汁机"},
              {img1:"img/surt/chu/chu11.jpg",name:"电烤箱"},
              {img1:"img/surt/chu/chu12.jpg",name:"养生壶"}
          ],
          list10:[
              {img1:"img/surt/chu/chu1.jpg",name:"电水壶"},
              {img1:"img/surt/chu/chu2.jpg",name:"电压力锅"},
              {img1:"img/surt/chu/chu3.jpg",name:"电饭煲"},
              {img1:"img/surt/chu/chu4.jpg",name:"电磁炉"},
              {img1:"img/surt/chu/chu5.jpg",name:"微波炉"},
              {img1:"img/surt/chu/chu6.jpg",name:"电饼铛"},
              {img1:"img/surt/chu/chu7.jpg",name:"豆浆机"},
              {img1:"img/surt/chu/chu8.jpg",name:"多用途锅"},
              {img1:"img/surt/chu/chu9.jpg",name:"料理机"},
              {img1:"img/surt/chu/chu10.jpg",name:"榨汁机"},
              {img1:"img/surt/chu/chu11.jpg",name:"电烤箱"},
              {img1:"img/surt/chu/chu12.jpg",name:"养生壶"}
          ],
          list11:[
              {img1:"img/surt/chu/chu1.jpg",name:"电水壶"},
              {img1:"img/surt/chu/chu2.jpg",name:"电压力锅"},
              {img1:"img/surt/chu/chu3.jpg",name:"电饭煲"},
              {img1:"img/surt/chu/chu4.jpg",name:"电磁炉"},
              {img1:"img/surt/chu/chu5.jpg",name:"微波炉"},
              {img1:"img/surt/chu/chu6.jpg",name:"电饼铛"},
              {img1:"img/surt/chu/chu7.jpg",name:"豆浆机"},
              {img1:"img/surt/chu/chu8.jpg",name:"多用途锅"},
              {img1:"img/surt/chu/chu9.jpg",name:"料理机"},
              {img1:"img/surt/chu/chu10.jpg",name:"榨汁机"},
              {img1:"img/surt/chu/chu11.jpg",name:"电烤箱"},
              {img1:"img/surt/chu/chu12.jpg",name:"养生壶"}
          ],
          list12:[
              {img1:"img/surt/chu/chu1.jpg",name:"电水壶"},
              {img1:"img/surt/chu/chu2.jpg",name:"电压力锅"},
              {img1:"img/surt/chu/chu3.jpg",name:"电饭煲"},
              {img1:"img/surt/chu/chu4.jpg",name:"电磁炉"},
              {img1:"img/surt/chu/chu5.jpg",name:"微波炉"},
              {img1:"img/surt/chu/chu6.jpg",name:"电饼铛"},
              {img1:"img/surt/chu/chu7.jpg",name:"豆浆机"},
              {img1:"img/surt/chu/chu8.jpg",name:"多用途锅"},
              {img1:"img/surt/chu/chu9.jpg",name:"料理机"},
              {img1:"img/surt/chu/chu10.jpg",name:"榨汁机"},
              {img1:"img/surt/chu/chu11.jpg",name:"电烤箱"},
              {img1:"img/surt/chu/chu12.jpg",name:"养生壶"}
          ],
          list13:[
              {img1:"img/surt/chu/chu1.jpg",name:"电水壶"},
              {img1:"img/surt/chu/chu2.jpg",name:"电压力锅"},
              {img1:"img/surt/chu/chu3.jpg",name:"电饭煲"},
              {img1:"img/surt/chu/chu4.jpg",name:"电磁炉"},
              {img1:"img/surt/chu/chu5.jpg",name:"微波炉"},
              {img1:"img/surt/chu/chu6.jpg",name:"电饼铛"},
              {img1:"img/surt/chu/chu7.jpg",name:"豆浆机"},
              {img1:"img/surt/chu/chu8.jpg",name:"多用途锅"},
              {img1:"img/surt/chu/chu9.jpg",name:"料理机"},
              {img1:"img/surt/chu/chu10.jpg",name:"榨汁机"},
              {img1:"img/surt/chu/chu11.jpg",name:"电烤箱"},
              {img1:"img/surt/chu/chu12.jpg",name:"养生壶"}
          ],
          list14:[
              {img1:"img/surt/chu/chu1.jpg",name:"电水壶"},
              {img1:"img/surt/chu/chu2.jpg",name:"电压力锅"},
              {img1:"img/surt/chu/chu3.jpg",name:"电饭煲"},
              {img1:"img/surt/chu/chu4.jpg",name:"电磁炉"},
              {img1:"img/surt/chu/chu5.jpg",name:"微波炉"},
              {img1:"img/surt/chu/chu6.jpg",name:"电饼铛"},
              {img1:"img/surt/chu/chu7.jpg",name:"豆浆机"},
              {img1:"img/surt/chu/chu8.jpg",name:"多用途锅"},
              {img1:"img/surt/chu/chu9.jpg",name:"料理机"},
              {img1:"img/surt/chu/chu10.jpg",name:"榨汁机"},
              {img1:"img/surt/chu/chu11.jpg",name:"电烤箱"},
              {img1:"img/surt/chu/chu12.jpg",name:"养生壶"}
          ],
          list15:[
              {img1:"img/surt/chu/chu1.jpg",name:"电水壶"},
              {img1:"img/surt/chu/chu2.jpg",name:"电压力锅"},
              {img1:"img/surt/chu/chu3.jpg",name:"电饭煲"},
              {img1:"img/surt/chu/chu4.jpg",name:"电磁炉"},
              {img1:"img/surt/chu/chu5.jpg",name:"微波炉"},
              {img1:"img/surt/chu/chu6.jpg",name:"电饼铛"},
              {img1:"img/surt/chu/chu7.jpg",name:"豆浆机"},
              {img1:"img/surt/chu/chu8.jpg",name:"多用途锅"},
              {img1:"img/surt/chu/chu9.jpg",name:"料理机"},
              {img1:"img/surt/chu/chu10.jpg",name:"榨汁机"},
              {img1:"img/surt/chu/chu11.jpg",name:"电烤箱"},
              {img1:"img/surt/chu/chu12.jpg",name:"养生壶"}
          ],
          list16:[
              {img1:"img/surt/chu/chu1.jpg",name:"电水壶"},
              {img1:"img/surt/chu/chu2.jpg",name:"电压力锅"},
              {img1:"img/surt/chu/chu3.jpg",name:"电饭煲"},
              {img1:"img/surt/chu/chu4.jpg",name:"电磁炉"},
              {img1:"img/surt/chu/chu5.jpg",name:"微波炉"},
              {img1:"img/surt/chu/chu6.jpg",name:"电饼铛"},
              {img1:"img/surt/chu/chu7.jpg",name:"豆浆机"},
              {img1:"img/surt/chu/chu8.jpg",name:"多用途锅"},
              {img1:"img/surt/chu/chu9.jpg",name:"料理机"},
              {img1:"img/surt/chu/chu10.jpg",name:"榨汁机"},
              {img1:"img/surt/chu/chu11.jpg",name:"电烤箱"},
              {img1:"img/surt/chu/chu12.jpg",name:"养生壶"}
          ],
          list17:[
              {img1:"img/surt/chu/chu1.jpg",name:"电水壶"},
              {img1:"img/surt/chu/chu2.jpg",name:"电压力锅"},
              {img1:"img/surt/chu/chu3.jpg",name:"电饭煲"},
              {img1:"img/surt/chu/chu4.jpg",name:"电磁炉"},
              {img1:"img/surt/chu/chu5.jpg",name:"微波炉"},
              {img1:"img/surt/chu/chu6.jpg",name:"电饼铛"},
              {img1:"img/surt/chu/chu7.jpg",name:"豆浆机"},
              {img1:"img/surt/chu/chu8.jpg",name:"多用途锅"},
              {img1:"img/surt/chu/chu9.jpg",name:"料理机"},
              {img1:"img/surt/chu/chu10.jpg",name:"榨汁机"},
              {img1:"img/surt/chu/chu11.jpg",name:"电烤箱"},
              {img1:"img/surt/chu/chu12.jpg",name:"养生壶"}
          ],
          list18:[
              {img1:"img/surt/chu/chu1.jpg",name:"电水壶"},
              {img1:"img/surt/chu/chu2.jpg",name:"电压力锅"},
              {img1:"img/surt/chu/chu3.jpg",name:"电饭煲"},
              {img1:"img/surt/chu/chu4.jpg",name:"电磁炉"},
              {img1:"img/surt/chu/chu5.jpg",name:"微波炉"},
              {img1:"img/surt/chu/chu6.jpg",name:"电饼铛"},
              {img1:"img/surt/chu/chu7.jpg",name:"豆浆机"},
              {img1:"img/surt/chu/chu8.jpg",name:"多用途锅"},
              {img1:"img/surt/chu/chu9.jpg",name:"料理机"},
              {img1:"img/surt/chu/chu10.jpg",name:"榨汁机"},
              {img1:"img/surt/chu/chu11.jpg",name:"电烤箱"},
              {img1:"img/surt/chu/chu12.jpg",name:"养生壶"}
          ],
          list19:[
              {img1:"img/surt/chu/chu1.jpg",name:"电水壶"},
              {img1:"img/surt/chu/chu2.jpg",name:"电压力锅"},
              {img1:"img/surt/chu/chu3.jpg",name:"电饭煲"},
              {img1:"img/surt/chu/chu4.jpg",name:"电磁炉"},
              {img1:"img/surt/chu/chu5.jpg",name:"微波炉"},
              {img1:"img/surt/chu/chu6.jpg",name:"电饼铛"},
              {img1:"img/surt/chu/chu7.jpg",name:"豆浆机"},
              {img1:"img/surt/chu/chu8.jpg",name:"多用途锅"},
              {img1:"img/surt/chu/chu9.jpg",name:"料理机"},
              {img1:"img/surt/chu/chu10.jpg",name:"榨汁机"},
              {img1:"img/surt/chu/chu11.jpg",name:"电烤箱"},
              {img1:"img/surt/chu/chu12.jpg",name:"养生壶"}
          ]
      }
  })






//   选项卡
    
    var list=document.querySelectorAll(".xxk a li");
    var Ylist=document.querySelectorAll(".fenlei .col-xs-9>div")
    //Ylist[0].style.display="block"
    for(var l=0;l<list.length;l++){
        list[l].index=l;
        list[l].onclick=function(){
            for(var y=0;y<Ylist.length;y++){
                list[y].setAttribute("class","")
                //list[y].classList.remove("")
                //去除类名的另一种写法
                Ylist[y].style.display="none";
            }
                list[this.index].setAttribute("class","re")
                Ylist[this.index].style.display="block";
                //list[y].classList.add("")
                //xiugai类名的另一种写法
        }
    }




//点击关闭广告


        var gb=document.querySelector(".gb")
        var xx=document.querySelector(".xx")
        if(sessionStorage.gb == "false"){
            gb.style.display="none";
        }else {
            gb.style.display="block";

        }
        xx.onclick=function(){
            gb.style.display="none";
            sessionStorage.gb="false"
           // sessionStorage当前网页上的存储，刷新不显示
        }

        //gb.addEventListener("keyup",function(){
        //    localStorage.name=gb;
        //})
        //gb=localStorage.name;


































































































