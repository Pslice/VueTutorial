
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
            },
            {
                variantID: 2,
                variantColor: "blue",
            }
        ]
    }
});
