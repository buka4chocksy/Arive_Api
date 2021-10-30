import User from './user.service';
const userService = new User()
import dbInit from '../utils/testinitdb';

describe('user service  test for user', () => {
    beforeAll( async()=>{
      await dbInit.connect()
    })

    afterAll(async()=>{
       await dbInit.closeDB()
    })
    it('should create user', async () => {
        const result = await userService.createUser('test', ['617c7c5c98e96430751a7e00']);
        expect(result.name).toBe('test')
    })
    it('should throw error on existing user', async () => {
        const result = await userService.createUser('test', ['617c7c5c98e96430751a7e00']);
        expect(result.statusCode).toBe(400)
    })
})



