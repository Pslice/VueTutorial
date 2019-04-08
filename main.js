
var app = new Vue({
    el: '#app',
    data: {
        brand: "Vue Mastery",
        product: "Socks",
        selectedVariant: 0,
        details:['80% cotton','20% polyester','Gender-neutral'],
        variants: [
            {
                variantID: 2204,
                variantColor: "green",          
                variantImage: './assets/vmSocks-green.jpg',
                variantQuantity: 10,
            },
            {
                variantID: 2205,
                variantColor: "DarkBlue",
                variantImage: './assets/vmSocks-blue.jpg',
                variantQuantity: 0,
            }
        ],
        cart: 0,
    },
    methods: {
        addToCart: function(){
            this.cart +=1;
        },
        updateProduct: function(index){
            this.selectedVariant = index;
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        }
    }
    
});
Vue.component('product', {
    template: `
    <div></div>
    `,
    data(){
        return {
            
        }
    }
})