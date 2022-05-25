var myCar={
    model:'520d',
    speed:60,
    color:'red',
    brake:function() {
        this.speed-=10;
        alert('속도 10감소');
    },
    accel:function() {
        this.speed+=10;
        alert('속도 10증가');
    },
    set_info:function(m, s, c) {
        this.model=m;
        this.speed=s;
        this.color=c;
    },
    get_info:function() {
        return (this.model+'<br>'+this.speed+'<br>'+this.color);
    },
    put_info:function() {
        document.write('모델은 '+this.model+'<br>속도는 '+this.speed+'<br>색은 '+this.color)
    }
};
