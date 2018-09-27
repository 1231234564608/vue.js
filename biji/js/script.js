
Vue.component('wen',{
    props:['nods'],
    template:`
    <div class="card">
        <div class="card-body" >
            <h1 class="card-title">{{bt ||'笔记标题'}}</h1>
            <textarea class="form-control" rows="3" v-model="nods.pp" @keyup="key">内容</textarea>
            <p>{{nods.pp.length}}字   时间:{{shijian}}</p>
            <button @click="del">删除</button>
        </div>
    </div>`,
    computed:{
        //笔记内容的长度 字数
        bt:function(){
            return _.truncate(this.nods.pp, {'length': 24});
        },
        //笔记编辑的时间
        shijian:function(){
            return moment(this.nods.time).fromNow();
        },

    },
    methods:{
        del:function(){

            //删除笔记
           app.area.splice(this._uid - 1, 1);
            console.log(this._uid-1)
            localStorage.setItem('notes', JSON.stringify(app.area))
        },
        key:function(){

            app.area[this._uid-1].pp=this.nods.pp;

            app.area[this._uid-1].time=Date.parse(new Date());

            localStorage.setItem('notes', JSON.stringify(app.area))
        }
    }
})


var app=new Vue({
    el:'#biji',
    data:{
        area:[
            {pp:"花落知多少",time:1511771530000},
            {pp:"花落知多少",time:1511771630000},
            {pp:"花落知多少",time:1511777777770}
        ]
    },
    methods:{
        btn:function(){
            //添加笔记
            this.area.unshift({pp:"",time:Date.parse(new Date())})

            //光标自动定位到第一个
            document.querySelector("textarea").focus();
            localStorage.setItem('notes', JSON.stringify(this.area))
        }
    },

    created:function(){
        if(localStorage.getItem('notes')!==null){
            this.area=JSON.parse(localStorage.getItem('notes'))
        }

    }

})






























