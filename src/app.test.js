//import testing modules
const request=require('supertest');
const app=require('./app');
const expect = require('chai').expect;


//Testing homepage
describe('GET /',()=>{
    //it function takes two args:a string desc test case and a function that contain test code
    it('responds with a 200 status code',async()=>{
        const res=await request(app).get('/');
        expect(res.statusCode).equal(200);
    })
})
//testing subscriber data
describe('GET /subscribers',()=>{
    it('responds with a 200 status code',async()=>{
        const res=await request(app).get('/subscribers');
        expect(res.statusCode).equal(200);
    })
})
//testing subscriber names and subscribed channels
describe('GET /subscribers/names',()=>{
    it('responds with a 200 status code',async()=>{
        const res=await request(app).get('/subscribers/names');
        expect(res.statusCode).equal(200);
    })
})
//testing subsriber data with specific ids
describe('GET /subscribers/id',()=>{
    it('responds with a 400 status code',async()=>{
        const res=await request(app).get('/subscribers/id');
        expect(res.statusCode).equal(400);
    })
})

describe('GET /subscribers/6425365382428e0c2c4a4d43',()=>{
    it('responds with a 200 status code',async()=>{
        const res=await request(app).get('/subscribers/6425365382428e0c2c4a4d43');
        expect(res.statusCode).equal(200);
    })
})