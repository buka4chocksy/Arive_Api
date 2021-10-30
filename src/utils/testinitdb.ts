import { MongoMemoryServer } from 'mongodb-memory-server'
import mongoose from 'mongoose'


class init {
    mongod: any = undefined;

    async connect() {
        this.mongod = await MongoMemoryServer.create()
        const uri = this.mongod.getUri()
        await mongoose.connect(uri)
    }

    async closeDB() {
        await mongoose.connection.dropDatabase()
        await mongoose.connection.close()
        if (this.mongod)
            await this.mongod.stop()
    }
}

export default new init();