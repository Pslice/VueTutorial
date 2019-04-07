
var app = new Vue({
    el: '#app',
    data: {
        product: "Socks",
        image:'./assets/vmSocks-green.jpg',
        inventory:8,
        inStock:true,
        details:['80% cotton','20% polyester','Gender-neutral'],
        variants: [
            {
                variantID: 1,
                variantColor: "green",          
                variantImage: './assets/vmSocks-green.jpg',
            },
            {
                variantID: 2,
                variantColor: "blue",
                variantImage: './assets/vmSocks-blue.jpg',
            }
        ],
        cart: 0,
    },
    methods: {
        addToCart: function(){
            this.cart +=1;
        },
        updateProduct: function(variantImage){
            this.image = variantImage;
        }
    }
});
