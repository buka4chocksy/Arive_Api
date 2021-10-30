import Hobby from './hobby.schema';

describe('schema test fro hobby', () => {
    it('should fail on invalid data for parsing', async () => {
        const result =  Hobby.validate({name : "test", passionLevel : "aadfdfa"});
        expect(result.error).not.toBeNull()
    })
    it('should pass on valid data for parsing', async () => {
        const result =  Hobby.validate({name : "test", passionLevel : "LOW", year : 2020});
        expect(result.error).toBeUndefined()
    })
})