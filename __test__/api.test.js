'use strict';

const {server} = require('../src/server');

const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server);

describe('Checking the api routes', ()=>{
    let consoleSpy;
    beforeEach(()=> {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    });

    afterEach(()=> {
        consoleSpy.mockRestore();
    });

    it('To check that we can sign up a new user', async()=>{
        let user = {
            username: 'user1',
            password: 'user1234'
        }
        return await mockRequest.post('/signup').send(user).then(record=>{
            console.log(record.username);
            expect(record.status).toEqual(200);
        })
    })

    it('check that we can logged in into an existed user', async()=>{
        let user = {
            username: 'user1',
            password: 'user1234'
        }
        return await mockRequest.post('/signup').send(user).then(async (record)=>{
            return await mockRequest.post('/signin').auth(user.username, user.password).then(data=>{
                expect(data.status).toEqual(200);
            })
        })
    })

    it('to get all users from the database', async()=>{
        let user = {
            username: 'user1',
            password: 'user1234'
        }
        return await mockRequest.post('/signup').send(user).then(async (record)=>{
            return await mockRequest.get('/users').then(data=>{
                expect(data.status).toEqual(200);
            })
        })
    })
})