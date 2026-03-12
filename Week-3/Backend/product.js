import exp from 'expression'
const product=exp()
product.use(exp.json())
const port=3000
product.listen(port,()=>console.log(`server listening po port ${port}...`))
