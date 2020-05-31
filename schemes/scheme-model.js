const db = require('../db-config')

const find = async () => {
  const schemes =await db('schemes')
  return schemes
}

const findById = async (id) => {
   const scheme = await db('schemes').where({id})
   return scheme
}

const findSteps = async (id) => {
   const steps = await db('steps').where({scheme_id: id})
   return steps
}

const add = async (scheme) => {
   return await db('schemes').insert(scheme)
}

const addStep = async (stepdata) => {
    return await db('steps').insert(stepdata)
}

const update = async (changes,id) => {
    return await db('schemes').update(changes).where({id})
}

const remove = async (id) => {
    return db('schemes').where({id}).del()
}

module.exports = {
    find,
    findById,
    findSteps,
    add,
    addStep,
    update,
    remove
}