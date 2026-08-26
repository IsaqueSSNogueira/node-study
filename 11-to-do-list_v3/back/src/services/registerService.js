import User from "./../models/User.js"

export const existUser = async (inputUser) => {

  return await User.findOne({name:inputUser})
}

export const createNewUser = async (inputUser, inputPassword) => {
  
  await User.create({
    name:inputUser,
    password:inputPassword
  })
}