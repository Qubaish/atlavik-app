import {
    searchByName,
    searchByCity,
    searchByPriceRange,
    searchByAvailability,
    sortBy,
} from '../app/utils';
import { expect } from 'chai';

const mockHotels = [
    {name: 'a', city: 'b', price: 1, availability: [{"from": "10-10-2020","to": "12-10-2020"}]},
    {name: 'aa', city: 'bb', price: 10, availability: [{"from": "25-10-2020","to": "28-10-2020"}]}
]

describe("Utils Functions", () => {
    it("searchByName should return matching hotels with name", (done) => {
        const result = searchByName('a', mockHotels);
        expect(result).to.be.an('array');
        expect(result[0]).to.deep.equal(mockHotels[0]);
        done();
    });
    it("searchByName should return empty hotels with wrong name", (done) => {
        const result = searchByName('ab', mockHotels);
        expect(result).to.be.an('array');
        expect(result).that.eql([]);
        done();
    });
    it("searchByCity should return matching hotels with city", (done) => {
        const result = searchByCity('b', mockHotels);
        expect(result).to.be.an('array');
        expect(result[0]).to.deep.equal(mockHotels[0]);
        expect(result).to.have.nested.property('[0].city');;
        done();
    });
    it("searchByPriceRange should return matching hotels with price", (done) => {
        const result = searchByPriceRange('0:10', mockHotels);
        expect(result).to.be.an('array');
        expect(result).to.deep.equal(mockHotels);
        expect(result).to.have.lengthOf(2);
        done();
    });
    it("searchByPriceRange should return empty hotels with wrong price range", (done) => {
        const result = searchByPriceRange('11:20', mockHotels);
        expect(result).to.be.an('array').that.is.empty;
        done();
    });
    it("searchByAvailability should return matching hotels with date", (done) => {
        const result = searchByAvailability('10-10-2020:12-10-2020', mockHotels);
        expect(result).to.be.an('array');
        expect(result[0]).to.deep.equal(mockHotels[0]);
        expect(result).to.have.lengthOf(1);
        done();
    });
    it("searchByAvailability should return empty hotels with wrong date range", (done) => {
        const result = searchByPriceRange('15-10-2020:16-10-2020', mockHotels);
        expect(result).to.be.an('array').that.is.empty;
        done();
    });
    it("sortBy should return sorting hotels by name", (done) => {
        const result = sortBy('name', mockHotels);
        const sortName = result.map(h => h.name);
        expect(result).to.be.an('array');
        expect(result).to.have.lengthOf(2);
        expect(sortName).to.have.ordered.members(['a', 'aa']);
        done();
    });
    it("sortBy should return sorting hotels by price", (done) => {
        const result = sortBy('price', mockHotels);
        const sortName = result.map(h => h.price);
        expect(result).to.be.an('array');
        expect(result).to.have.lengthOf(2);
        expect(sortName).to.have.ordered.members([1, 10]);
        done();
    });
})