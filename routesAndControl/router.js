const express = require(`express`)
const router = express.Router()
const Suggestion = require('../model/model')

router.get('/', (req, res)=>{
    Suggestion.find().exec((err,doc)=>{
        res.render('homepage.ejs',{data:doc})
    })
    
})
router.get('/addImformation', (req, res)=>{
    res.render('form.ejs')
})
router.get('/manage', (req, res)=>{
    Suggestion.find().exec((err, doc)=>{
        res.render('manage.ejs', {data:doc})
     })
 })
 router.get('/delete/:id', (req, res)=>{
    Suggestion.findByIdAndDelete(req.params.id,{useFindAndModify:false}).exec(err=>{
        if(err) console.log(err)
        res.redirect('/manage')
    })
})
router.post('/insert', (req, res)=>{
    const Timestamp = Math.floor(Date.now() / 1000)/60
    let data = new Suggestion({
        name:req.body.name,
        lastname:req.body.lastname,
        email:req.body.email,
        suggestion:req.body.suggestion,
        timestamp:Timestamp
    })
    console.log(req.body)
    //Call Model And Use saveInformation to Save In Database
    Suggestion.saveInformation(data,(err)=>{
        if(err) console.log(err)
        res.redirect('/')
    })
})

//Export Router 
module.exports = router