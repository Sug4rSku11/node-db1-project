const db = require('../../data/db-config')

const getAll = async () => {
  const rows = await db('accounts')
  return rows
}

async function getById(id) {
  const [ record ] = await db('accounts')
  .select('id', 'name', 'budget')
  .where('id', id)
  return record
}

async function create(account) {
  const [id] = await db('accounts').insert(account)
  const newAccount = await getById(id)
  return newAccount
}

async function updateById(id, account) {
  await db('accounts')
  .update(account)
  .where('id', id)
  const updated = await getById(id)
  return updated
}

async function deleteById(id) {
  await db('account')
  .delete()
  .where('id', id)
  return ` the account with id ${id} has been deleted`
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
