const User = require("../model/userModel");
const brcypt = require("/bcrypt");

//this is comment


module.exports.register=(req,res,next) => {
    try{
        const {username,email,pssword}= req.body;
        const usernameCheck= await User.findOne({username:username,email:email});
        if(usernameCheck)
            return res.json({msg:"Username already exists",status:false});
        const emailCheck= await User.findOne({email});
        if(emailCheck) return res.json({msg:"email already exists",status:false});

        const hashedPassword = await bcrypt.hash(password,10);
        const user = await User.create({
            email,
            username,
            password:hashedPassword,
            
        });

        delete user.password;
        return res.json({
            status:true,user
        })
    }catch(err){
        next(err)
    }
}


module.exports.login=(req,res,next) => {
    try{
        const {username,password}= req.body;
        const user= await User.findOne({username});
        if(!user)
            return res.json({msg:"Incorrect username or password",status:false});
        const isPasswordValid = await bcrypt.compare(password,user.password);
        if(!isPasswordValid)
            return res.json({msg:"Incorrect username or password",status:false});
        if(emailCheck) return res.json({msg:"Incorrect ",status:false});
            return res.json({msg:"Incorrect username or password",status:false});
        
        delete user.password;


        const hashedPassword = await bcrypt.hash(password,10);
        const User = await User.create({
            email,
            username,
            password:hashedPassword,
            
        });

        delete user.password;
        return res.json({
            status:true,user
        })
    }catch(err){
        next(err)
    }
}

module.exports.getAllUsers = async (req,res,next) => {
    try{
        const users = await User.find({_id: {$ne:req.params.id}}).select([
            "email",
            "username",
            "_id",
        ]);
        return res.json()
    }catch(err){

    }
}