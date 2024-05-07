const express=require('express')
const app=express()
const PORT=3000

const products={
    "electronics":[
        {
            id:1,
            name:"Laptop",
            rating: 4.5,
            price:1000,
            discount:0
        },
        {
            id:2,
            name:"Smartphone",
            rating: 4.2,
            price:800,
            discount:10
        },
    ]
};

app.get('http://20.244.56.144/test/companies/:companyname/categories/:categoryname/products?top=n&minPrice=p&maxPrice=q',(req,res)=>{
    const {categoryname}=req.params;
    let {n,rating,price,discount,page,limit}=req.query;
    n=pareseInt(n)||10;
    page=parseInt(page)||1;
    limit=parseInt(limit)||10;
    let categoryProducts=products[categoryname];
    if(!categoryProducts){
        return res.status(404).json({error:'Category not found'})
    }
    if(rating){
        categoryProducts=categoryProducts.sort((a,b)=>b.rating-a.rating);
    }
    if(price){
        categoryProducts=categoryProducts.sort((a,b)=>b.price-a.price);
    }
    if(discount){
        categoryProducts=categoryProducts.filter(product=>product.discount>0);
    }
    
    //pagination
    const startIndex=(page-1)*limit;
    const endIndex=page*limit;
    const paginatedProducts=categoryProducts.slice(startIndex,endIndex);
    res.json(paginatedProducts)
});

app.get('/categories/:categoryname/products/:productid',(req,res)=>{
    const {categoryname,productid}=req.params;
    const categoryProducts=products[categoryname];
    if(!categoryProducts){
        return res.status(404).json({error:'Category not found'})
    }
    const product=categoryProducts.find(product=>product.id===pareseInt(productid))
    if(!product){
        return res.status(404).json({error:'Product not found'})
    }
    res.json(product)
});

app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}`)
})