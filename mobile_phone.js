var phone={
    model:"default_model",
    network:"default_way",
    price:0,

    set_phone:function(m, n, p){
        this.model=m;
        this.network=n;
        this.price=p;
    },
    get_model:function(){
        return this.model;
    },
    get_network:function(){
        return this.network;
    },
    get_price:function(){
        return this.price;
    },
    put_phone:function(){
        document.write(this.model+'<br>'+this.network+'<br>'+this.price)
    }
}