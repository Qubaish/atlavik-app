import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import server from '../app/bin/www';
// Configure chai
chai.use(chaiHttp);
chai.should();

const name = 'Rotana Hotel';
const city = 'cairo';

describe("Routes", () => {
    describe("GET /", () => {
        it("should get all hotels", (done) => {
            chai.request(server)
                .get('/api/v1/hotels')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    expect(res.body.status.code).equal(0);
                    done();
                 });
        });
        it("should give message when provide wrong endpoint", (done) => {
            chai.request(server)
                .get('/api/v1/test')
                .end((err, res) => {
                    res.body.should.be.a('object');
                    expect(res.body.errors.message).equal('Not Found'); // Route not found
                    done();
                 });
        });
        it("should get hotels when filter with name", (done) => {
            chai.request(server)
                .get(`/api/v1/hotels?name=${name}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    expect(res.body.status.code).equal(0);
                    expect(res.body.data[0].name).equal(name); // checking exact hotel
                    done();
                 });
        });
        it("should not get hotels when filter with wrong name", (done) => {
            chai.request(server)
                .get('/api/v1/hotels?name=test')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    expect(res.body.status.code).equal(0);
                    expect(res.body.data).that.eql([]);
                    done();
                });
        });
        it("should get hotels when filter with city", (done) => {
            chai.request(server)
                .get(`/api/v1/hotels?city=${city}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    expect(res.body.status.code).equal(0);
                    expect(res.body.data[0].city).equal(city); // checking exact hotel
                    done();
                 });
        });
        it("should get hotels when filter with price", (done) => {
            chai.request(server)
                .get('/api/v1/hotels?price=70:150')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    expect(res.body.status.code).equal(0);
                    res.body.data.should.be.a('array');
                    done();
                });
        });
        it("should get hotels when filter with date", (done) => {
            chai.request(server)
                .get('/api/v1/hotels?date=10-10-2020:19-10-2020')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    expect(res.body.status.code).equal(0);
                    res.body.data.should.be.a('array');
                    done();
                });
        });
        it("should get hotels when sort by name or pride", (done) => {
            chai.request(server)
                .get('/api/v1/hotels?sort=name')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    expect(res.body.status.code).equal(0);
                    res.body.data.should.be.a('array');
                    done();
                });
        });
    });
});