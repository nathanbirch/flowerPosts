import * as _chai from 'chai';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../src/server');
const should = chai.should();

chai.use(chaiHttp);
describe('Posts', () => {
  describe('/GET', () => {
    it('it should GET all the posts', (done) => {
      chai
        .request(server)
        .get('/posts')
        .end((err: any, res: any) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.above(10);
          done();
        });
    });
  });
  describe('/GET/:id', () => {
    it('it should GET single post by id', (done) => {
      chai
        .request(server)
        .get('/posts/7')
        .end((err: any, res: any) => {
          res.should.have.status(200);
          res.body.should.be.an('object');
          res.body.id.should.be.eql(7);
          done();
        });
    });
  });
  describe('/PUT/:id', () => {
    it('it should update single post by id', (done) => {
      const userTitle = 'This is an awesome new tested title';
      const post = {
        title: userTitle,
        body: 'This is a really fun project. This is also a body.',
      };
      chai
        .request(server)
        .put('/posts/7')
        .send(post)
        .end((err: any, res: any) => {
          res.should.have.status(200);
          res.body.should.be.an('object');
          res.body.id.should.be.eql(7);
          res.body.title.should.be.eql(userTitle);
          done();
        });
    });
  });
  describe('/DELETE/:id', () => {
    it('it should delete a post by id', (done) => {
      const userId = 1;
      chai
        .request(server)
        .delete(`/posts/${userId}`)
        .end((err: any, res: any) => {
          res.should.have.status(200);
          res.body.should.be.an('object');
          res.body.should.have
            .property('message')
            .eql('post deleted successfully');
          done();
        });
    });
  });
  describe('/POST/:id', () => {
    it('it should create a single post', (done) => {
      const userId = 1;
      const userTitle = 'This is a brand new tested title';
      const userBody = 'This is a really fun project. This is also a body.';
      const post = {
        userId: userId,
        title: userTitle,
        body: userBody,
      };
      chai
        .request(server)
        .post('/posts')
        .send(post)
        .end((err: any, res: any) => {
          res.should.have.status(200);
          res.body.should.be.an('object');
          res.body.userId.should.be.eql(userId);
          res.body.title.should.be.eql(userTitle);
          res.body.body.should.be.eql(userBody);
          done();
        });
    });
  });
});
