import {ROLES} from '../models/Role'
import User from '../models/User'


export const checkDuplicateUserorEmail = async (req, res, next)=>{

    const users = await User.findOne({username: req.body.username })


    if(users) return res.status(400).json({message: 'the user already exists'})
    
    
    const emails = await User.findOne({email: req.body.email })

    if(emails) return res.status(400).json({message: 'the email already exists'})

    next();
}

export const checkRoloesExisted = (req, res, next)=>{
    if(req.body.roles){
        for(let i=0; i< req.body.roles.length; i++){
            if(!ROLES.includes(req.body.roles[i])){
                return res.status(400).json({
                    message: 'Role ${req.body.roles[i]} does not exists'
                })
            }
        }
    }


    next()
}