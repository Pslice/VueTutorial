Vue.component('product', {
    props: {
        premium:{

        }
    },
    template: `
    <div class="product">
    <div class="product-image">
        <img v-bind:src="image">
    </div>
    
    <div class="product-info">
        <h1>{{ title }}</h1>
        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>
        <p>Shipping: {{ shipping }}</p>
        <ul>
            <li v-for="detail in details">{{ detail }}</li>
        </ul>
        <div v-for="(variant, index) in variants" 
            :key="variantID"
            class="color-box"
            :style="{ backgroundColor: variant.variantColor }"
            @mouseover="updateProduct(index)"><!--@ is shorthand for v-on and : is a bind-->
        </div>
        <button v-on:click="addToCart" 
                :disabled="!inStock"
                :class="{ disabledButton: !inStock }"
        >Add to Cart</button>

        <div class="cart">
            <p>Cart({{cart}})</p>
        </div>
        
    </div>
</div>`,
data() {
    return {
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
    }
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
    },
    shipping() {
        if(this.premium){
            return "Free"
        }
        return 2.99
    }
}

})
var app = new Vue({
    el: '#app',
    data:{
        premium: true
    }
});