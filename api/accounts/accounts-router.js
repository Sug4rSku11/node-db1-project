const router = require('express').Router()


router.get('/', (req, res, next) => {
  // DO YOUR 
  try{
    res.json('get accounts')
  } catch (err)  {
    next({status: 422, message: 'this is horrible'})

  }
})

router.get('/:id',  (req, res, next) => {
  // DO YOUR MAGIC 
  try{
    res.json('get account by id')
  } catch (err) {
    next(err)
  }
})

router.post('/', (req, res, next) => {
  // DO YOUR MAGIC 
  try{
    res.json('post account')
  } catch (err) {
    next(err)
  }
})

router.put('/:id', (req, res, next) => {
  // DO YOUR MAGIC 
  try{
    res.json('update account by id')
  } catch (err) {
    next(err)
  }
});

router.delete('/:id', (req, res, next) => {
  // DO YOUR MAGIC 
  try{
    res.json('delete by id')
  } catch (err) {
    next(err)
  }
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
  res.status(err.status || 500).json({
    message: err.message,
  })
})

module.exports = router;
