const express = require('express')
const app = express()
app.all('/', (req, res) => {
    res.send('Server is running, thanks!')
})

app.post('/postdata', function(req, res) {
  try{
    console.log('Whole body :  ',req.body);
    console.log(req.body["em"],req.body["ps"])
    res.send('HTTP ERROR : Server busy ');}
    catch(e){
      console.log(e)
    }
});

app.listen(process.env.PORT || 3000)
