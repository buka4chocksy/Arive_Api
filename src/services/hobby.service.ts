import hobbyModel, {HobbyType} from '../models/hobby.model';
import {PassionLevel} from '../models/hobby.model'
type editHobbyType = {
    id: string;
    name?: string;
    passion_level: PassionLevel;
    year?:number;
}

class HobbyService{
    async create(name:string ,passion_level:string, year:number ):Promise<any> {
       let checkExist = await hobbyModel.findOne({name:name})
        if (checkExist) return ({ statusCode: 400, msg: 'hobby already exists' })
        let data = {name, passion_level,year}
        let createHobby = await hobbyModel.create(data)
        return createHobby;
    }

    async getAllHobbies():Promise<any> {
        let getAll = await hobbyModel.find({})
        return getAll;
    }
    
    async findOne(name:string):Promise<any> {
        let checkExist = await hobbyModel.findOne({name:name})
        return checkExist;
    }

    async getSingleHobby(id:string):Promise<any> {
        let singleHobby = await hobbyModel.findById({_id:id});
        if (!singleHobby) return ({ statusCode: 400, msg: 'hobby does not exist' })
        return singleHobby;
    }

    async deleteHobby(id:string):Promise<any> {
        let deleteHobby = await hobbyModel.findByIdAndDelete({_id:id});
        return deleteHobby;
    }

    async editHobby(data: editHobbyType): Promise<any> {
        try {
            const editedHobby = await hobbyModel.findByIdAndUpdate({ _id: data.id }, { name: data.name, PassionLevel:data.passion_level, year:data.year }, {new:true})
            return editedHobby;
        } catch (error) {
            return error;
        }
    }

}

export default HobbyService;
