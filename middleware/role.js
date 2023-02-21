const roleCheck = (role)=>(req,res,next)=>
!role.includes(req.user.userRole)
? res.send(401).json({msg:'Forbiden'})
: next();

module.exports=roleCheck


