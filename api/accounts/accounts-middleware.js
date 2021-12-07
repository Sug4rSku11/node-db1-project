const Accounts = require('../accounts/accounts-model')

async function checkAccountPayload(req, res, next) {
  try{

  }catch{

  }
}

async function checkAccountNameUnique(req, res, next)  {
  try{

  }catch{
    
  }
}

async function checkAccountId(req, res, next){
  try{
    const action = await Accounts.getById(req.params.id)
    if(!action){
      res.status(404).json({  message: "account not found"});
    } else {
      req.action = action
      next()
      }
  }catch (err){
    console.log(err)
  }
}

module.exports = {
  checkAccountPayload,
  checkAccountNameUnique,
  checkAccountId,
};