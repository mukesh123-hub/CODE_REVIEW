require('dotenv').config()
const app=require('./src/app')

app.listen(2000,()=>{
    console.log('Server is listing on http://localhost:2000');
})