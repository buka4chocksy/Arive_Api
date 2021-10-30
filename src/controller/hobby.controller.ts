import { RequestHandler } from 'express';
import HobbyService from '../services/hobby.service';
import { sendResponse } from '../utils/response';

const hobbyService = new HobbyService();
class HobbyController{
    createHobby: RequestHandler = async (req,res)=>{
       const {name,passion_level,year} = req.body
       let checkExist = await hobbyService.findOne(name)
       if(checkExist) return sendResponse({
        res,
        statusCode: 400,
        data: { checkExist },
        message: 'hobby already exists '
    });
        const data = await hobbyService.create(name, passion_level,year)
        return sendResponse({
			res,
			statusCode: 201,
			data: { data },
			message: 'hobby created successfully'
		});
    }

       getAllHobbies: RequestHandler = async (req,res)=>{
        const data = await hobbyService.getAllHobbies()
        return sendResponse({
			res,
			statusCode: 201,
			data: { data },
			message: 'hobbies fetched successfully'
		});
    }

    getSingleHobby: RequestHandler = async (req,res)=>{
      const data = await hobbyService.getSingleHobby(req.params.id)
      return sendResponse({
    res,
    statusCode: 201,
    data: { data },
    message: 'hobby fetched successfully'
  });
  }

  deleteHobby: RequestHandler = async (req,res)=>{
    const data = await hobbyService.deleteHobby(req.params.id)
    return sendResponse({
  res,
  statusCode: 201,
  data: { data },
  message: 'hobby deleted successfully'
});
}

editHobby: RequestHandler = async (req,res)=>{
  const data = await hobbyService.editHobby(req.body)
  return sendResponse({
res,
statusCode: 201,
data: { data },
message: 'hobby edited successfully'
});
}
}
export default HobbyController;