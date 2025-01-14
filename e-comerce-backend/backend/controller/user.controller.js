const express = require('express')
const bcrypt = require('bcrypt')
const User = require('../models/User')
const Store = require('../models/Store')
const {sendResponseError} = require('../middleware/middleware')
const {checkPassword, newToken} = require('../utils/utility.function')

const signUpUser = async (req, res) => {

  const {email, fullName, password, storeId} = req.body;
  try {
    const userExist = await User.findOne({email, storeId})
    if (userExist) {
      return res.status(400).json({message: 'User already exist'})
    }
    const hash = await bcrypt.hash(password, 8)

    const user = await User.create({...req.body, password: hash})
    let token = newToken(user, storeId)
    console.log('User created')
    return res.status(200).send({status: 'ok', token, user})
    
  } catch (err) {
    console.log('Error : ', err)
    return sendResponseError(500, 'Something wrong please try again', res)
  }
}

const signInUser = async (req, res) => {
  const {password, email, storeId} = req.body;

  try {
    const user = await User.findOne({email})

    if (!!!user) {
     return sendResponseError(400, 'You have to Sign up first !', res)
    }

    const same = await checkPassword(password, user.password)

    if (same) {
      if(!storeId){
        return sendResponseError(400, 'Store error!', res)
      }
      if(user.storeId == storeId){
      let token = newToken(user, storeId)
      console.log("signed in")
      return res.status(200).send({status: 'ok', token, user})
      }
        return sendResponseError(400, 'You are not authorized to access this store', res)
      
    }
    return sendResponseError(400, 'InValid password !', res)
  } catch (err) {
    console.log('EROR', err)
    return sendResponseError(500, `Error ${err}`, res)
  }
}

const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.user._id, {password: 0})
    if(user.id == req.user.id){  
      console.log("user get")
     return res.status(200).send(user)
    }
  }
  catch (err) {
    console.log('Error : ', err)
    return sendResponseError(500, `Error ${err}`, res)
  }


}

const updateUser = async (req, res) => {

  try {
    const {_id, role} = req.body;
    console.log('userId', req.body)
    const user = await User.findByIdAndUpdate( _id, {role}, {new: true})
    
      console.log("user update")
    const users = await User.find({storeId: req.user.storeId})
     return res.status(200).send(users)
    
  } catch (err) {
    console.log('EROR', err)
    return sendResponseError(500, `Error ${err}`, res)
  }
}

const createUser = async (req, res) => {
  const {email, password, role, storeId} = req.body;
  try {
    const hash = await bcrypt.hash(password, 8)
    const user = await User.create({...req.body, password: hash})
    console.log("user created")
    return res.status(201).send(user)
  } catch (err) {
    console.log('EROR', err)
    return sendResponseError(500, `Error ${err}`, res)
  }
}

const createFirstUser = async (req, res) => {
  const {email, password} = req.body;
  try {
    const hash = await bcrypt.hash(password, 8)
    const userLength = await User.countDocuments()
    if(userLength === 0){
      const store = await Store.create({name: 'Store Admin'})
      const user = await User.create({...req.body, password: hash, role: 'superAdmin', storeId: store._id})
      let token = newToken(user, store._id)
      console.log("user created")
      return res.status(201).send({status: 'ok', token})
    }else{
      return sendResponseError(400, 'Admin exist !', res)
    }
  } catch (err) {
    if(password === undefined){
      return sendResponseError(400, 'Password is required !', res)
    }
    console.log('error', err)
    return sendResponseError(500, `Error ${err}`, res)
  }
}

const getUsersByStore = async (req, res) => {
  try {
    const users = await User.find({storeId: req.user.storeId})
    console.log("user get")
    return res.status(200).send(users)
  } catch (err) {
    console.log('error', err)
    return sendResponseError(500, `Error ${err}`, res)
  }
}



module.exports = {signUpUser, signInUser, getUser, updateUser, createUser, createFirstUser, getUsersByStore}
