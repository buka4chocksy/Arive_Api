import { RequestHandler } from 'express';
import UserService from '../services/user.service';
import { sendResponse } from '../utils/response';

const userService = new UserService();
class UserController{
    createUser: RequestHandler = async (req,res)=>{
        console.log(req.body)
        const data = await userService.createUser(req.body.name, req.body.hobbies)
        return sendResponse({
			res,
			statusCode: 201,
			data: { data },
			message: 'user details created successfully'
		});
    }

       getAllUsers: RequestHandler = async (req,res)=>{
        const data = await userService.getAllUsers()
        return sendResponse({
			res,
			statusCode: 201,
			data: { data },
			message: 'users fetched successfully'
		});
    }

    getSingleUser: RequestHandler = async (req,res)=>{
      const data = await userService.getSingleUser(req.params.id)
      return sendResponse({
    res,
    statusCode: 201,
    data: { data },
    message: 'user fetched successfully'
  });
  }

  deleteUser: RequestHandler = async (req,res)=>{
    const data = await userService.deleteUser(req.params.id)
    return sendResponse({
  res,
  statusCode: 201,
  data: { data },
  message: 'user deleted successfully'
});
}

editUser: RequestHandler = async (req,res)=>{
  const data = await userService.editUser(req.body)
  return sendResponse({
res,
statusCode: 201,
data: { data },
message: 'user updated successfully'
});
}


editUserHobby: RequestHandler = async (req,res)=>{
  const data = await userService.editUserHobby(req.body)
  return sendResponse({
res,
statusCode: 201,
data: { data },
message: 'user hobby updated successfully'
});
}
}
export default UserController;