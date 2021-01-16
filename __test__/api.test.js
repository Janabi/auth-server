'use strict';

const {server} = require('../src/server');
const basicAuth = require('../src/auth/middleware/basic');
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
            password: 'user1234',
            role: "administrator"
        }
        return await mockRequest.post('/signup').send(user).then(record=>{
            expect(record.status).toEqual(200);
        })
    })

    it('give 404 error if we insert a non existing route', async()=>{
        let user = {
            username: 'user1',
            password: 'user1234',
            role: "administrator"
        }
        return await mockRequest.post('/sigup').send(user).then(record=>{
            expect(record.status).toEqual(404);
        })
    })

    it('check that we can logged in into an existed user', async()=>{
        let user = {
            username: 'user1',
            password: 'user1234',
            role: "administrator"
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
            password: 'user1234',
            role: "administrator"
        }
        return await mockRequest.post('/signup').send(user).then(async (record)=>{
            return await mockRequest.get('/users').then(data=>{
                expect(data.status).toEqual(200);
            })
        })
    })

    it('authorize into any route after the user logged in', async()=>{
        let user = {
            username: 'user1',
            password: 'user1234',
            role: "administrator"
        }
        return await mockRequest.post('/signup').send(user).then(async (record)=>{
            return await mockRequest.post('/signin').auth(user.username, user.password).then(async (data)=>{
                return await mockRequest.get('/secret').set({'Authorization': `Bearer ${data.body.token}`}).then(result=>{
                    expect(result.status).toEqual(200);
                })
            })
        })
    })

    it('not authorize (error500) into any route after a fake user logged in', async()=>{
        let user = {
            username: 'user1',
            password: 'user1234',
            role: "administrator"
        }
        return await mockRequest.post('/signup').send(user).then(async (record)=>{
            return await mockRequest.post('/signin').auth('user', user.password).then(async (data)=>{
                return await mockRequest.get('/secret').set({'Authorization': `Bearer ${data.body.token}`}).then(result=>{
                    expect(result.status).toEqual(500);
                })
            })
        })
    })

    it('authorize to read a post based on the role of the user', async()=>{
        let user = {
            username: 'user1',
            password: 'user1234',
            role: "administrator"
        }
        return await mockRequest.post('/signup').send(user).then(async (record)=>{
            return await mockRequest.post('/signin').auth(user.username, user.password).then(async (data)=>{
                return await mockRequest.get('/read').set({'Authorization': `Bearer ${data.body.token}`}).then(result=>{
                    expect(result.status).toEqual(200);
                })
            })
        })
    })

    it('authorize to create a post based on the role of the user', async()=>{
        let user = {
            username: 'user1',
            password: 'user1234',
            role: "administrator"
        }
        return await mockRequest.post('/signup').send(user).then(async (record)=>{
            return await mockRequest.post('/signin').auth(user.username, user.password).then(async (data)=>{
                return await mockRequest.post('/add').set({'Authorization': `Bearer ${data.body.token}`}).then(result=>{
                    expect(result.status).toEqual(200);
                })
            })
        })
    })

    it('authorize to update a post based on the role of the user', async()=>{
        let user = {
            username: 'user1',
            password: 'user1234',
            role: "administrator"
        }
        return await mockRequest.post('/signup').send(user).then(async (record)=>{
            return await mockRequest.post('/signin').auth(user.username, user.password).then(async (data)=>{
                return await mockRequest.put('/change').set({'Authorization': `Bearer ${data.body.token}`}).then(result=>{
                    expect(result.status).toEqual(200);
                })
            })
        })
    })

    it('authorize to delete a post based on the role of the user', async()=>{
        let user = {
            username: 'user1',
            password: 'user1234',
            role: "administrator"
        }
        return await mockRequest.post('/signup').send(user).then(async (record)=>{
            return await mockRequest.post('/signin').auth(user.username, user.password).then(async (data)=>{
                return await mockRequest.delete('/remove').set({'Authorization': `Bearer ${data.body.token}`}).then(result=>{
                    expect(result.status).toEqual(200);
                })
            })
        })
    })
})