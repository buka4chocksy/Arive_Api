import userModel from '../models/user.model';
import {Types} from 'mongoose'


type editUserType = {
    id: string;
    name?: string;
}

type editUserHobby = {
    id: string;
    hobbies: string;
}

class UserService {
    async createUser(name: string, hobbies: string[]): Promise<any> {
        try {
            const checkUser = await userModel.findOne({ name: name })
            if (checkUser) return ({ statusCode: 400, msg: 'user already exists' })
            let data = { name, hobbies }
            let createUser = await userModel.create(data);
            return createUser;
        } catch (error) {
            return error;
        }
    }

    async getAllUsers(): Promise<any> {
        try {
            const getUser = await userModel.find({})
                .populate({
                    path: 'hobbies',
                    mode: 'Hobby'
                })
            return getUser;
        } catch (error) {
            return error;
        }
    }

    async getSingleUser(id: string): Promise<any> {
        try {
            const getUser = await userModel.findById({ _id: id })
                .populate({
                    path: 'hobbies',
                    mode: 'Hobby'
                })
            if (!getUser) return ({ statusCode: 400, msg: 'user not found' })
            return getUser;
        } catch (error) {
            return error;
        }
    }

    async deleteUser(id: string): Promise<any> {
        try {
            const deleteUser = await userModel.findByIdAndDelete({ _id: id })
            return deleteUser;
        } catch (error) {
            return error;
        }
    }

    async editUser(data: editUserType): Promise<any> {
        try {
            const editeduser = await userModel.findByIdAndUpdate({ _id: data.id }, { name: data.name })
            return editeduser;
        } catch (error) {
            return error;
        }
    }

    async editUserHobby(data: editUserHobby): Promise<any> {
        try {
            const hobbyId = new Types.ObjectId(data.hobbies);
            const findResult = await userModel.findOne({"_id":data.id});
            if(!findResult) return ({ statusCode: 400, msg: 'hobbby not found' })
            var filteredHobbies = findResult.hobbies.filter(x => x === hobbyId);
            return await userModel.findByIdAndUpdate({_id:data.id},{hobbies :filteredHobbies})
        } catch (error) {
            return error;
        }
    }
      

}

export default UserService;