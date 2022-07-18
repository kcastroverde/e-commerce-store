const express = require('express')
const bcrypt = require('bcrypt')
const User = require('../models/User')
const {sendResponseError} = require('../middleware/middleware')
const {checkPassword, newToken} = require('../utils/utility.function')

const signUpUser = async (req, res) => {
  const store = await req.params.storeId;
  const {email, fullName, password} = req.body;
  try {
    const hash = await bcrypt.hash(password, 8)

    await User.create({...req.body, password: hash, storeId: store})
    res.status(201).send('Sucessfully account opened ')
    return
  } catch (err) {
    console.log('Eorror : ', err)
    sendResponseError(500, 'Something wrong please try again', res)
    return
  }
}

const signInUser = async (req, res) => {
  const {password, email} = req.body;
  const storeId = req.params.storeId;
  console.log(req.body)
  try {
    const user = await User.findOne({email})
    if (!!!user) {
      sendResponseError(400, 'You have to Sign up first !', res)
    }

    const same = await checkPassword(password, user.password)
    if (same) {
      let token = newToken(user, storeId)
      res.status(200).send({status: 'ok', token})
      return
    }
    sendResponseError(400, 'InValid password !', res)
  } catch (err) {
    console.log('EROR', err)
    sendResponseError(500, `Error ${err}`, res)
  }
}

const getUser = async (req, res) => {
  res.status(200).send({user: req.user})
}

const updateUser = async (req, res) => {

  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})
    if(user.id === req.user.id){  
      res.json(user)
    }
  } catch (err) {
    console.log('EROR', err)
    sendResponseError(500, `Error ${err}`, res)
  }
}

module.exports = {signUpUser, signInUser, getUser, updateUser}
