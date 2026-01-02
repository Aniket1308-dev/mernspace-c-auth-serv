import { DataSource } from 'typeorm'
import { AppDataSource } from '../../src/config/data-source'

describe('POST /auth/login', () => {
    let connection: DataSource

    beforeAll(async () => {
        //Initialize the database connection
        connection = await AppDataSource.initialize()
    })

    beforeEach(async () => {
        //Database truncate
        await connection.dropDatabase()
        await connection.synchronize()
    })

    afterAll(async () => {
        //Close database connection
        await connection.destroy()
    })

    describe('Given all fields', () => {
        it.todo('should login the user')
    })
})
