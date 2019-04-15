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
    </div>
    <product-review></product-review>
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
        ]
    }
},
methods: {
    addToCart(){
        this.$emit('add-to-cart', this.variants[this.selectedVariant].variantID);
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

});

Vue.component('product-review', {
template: `
<form class="review-form" @submit.prevent="onSubmit">
<p>
      <label for="name">Name:</label>
      <input id="name" v-model="name">
</p>
<p>
      <label for="review">Review:</label>
      <textarea id="review" v-model="review"></textarea>
</p>
<p>
      <label for="rating">Rating:</label>
      <select id="rating" v-model.number="rating">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
      </select>
</p>

      <p>
            <input type="submit" value="Submit">
      </p>
</form>
`,
data() {
    return {
        name: null,
        review: null,
        rating: null
    }
},
    methods: {
        onsubmit(){
            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating
            }
            this.$emit()
            this.name = null
            this.review = null
            this.rating = null
        }
    }
});

var app = new Vue({
    el: '#app',
    data:{
        premium: true,
        cart: []
    },
    methods: {
        updateCart(id){
            this.cart.push(id);
        }
    }
});