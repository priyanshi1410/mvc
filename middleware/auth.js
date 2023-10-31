const finduser = async (req,res,next) => {
    let {id}=req.cookies
    if(id){
        let data = await UserActivation.findbyid(id);
        return next()
    }
    if(data.username=="node"){

    }
    else{
        return res.send("you are not allowed to get")
    }
}

module.exports={finduser}
