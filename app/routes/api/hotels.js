import { Router } from "express";
const router = Router();
import isEmpty from 'lodash/isEmpty';
import axios from 'axios';
import { HOTELS_API_ENDPOINT } from '../../config/keys';
import { searchByName, searchByCity, searchByPriceRange, searchByAvailability, sortBy } from '../../utils';

let Hash = {};
const key = '__hotels__';

const availableSearchCriteria = {
    name: searchByName,
    city: searchByCity,
    price: searchByPriceRange,
    date: searchByAvailability,
    sort: sortBy,
}

// support single and multi search
const filterResults = (params, list) => {
    const data = Object.keys(params).reduce((acc, key) => {
        if (acc.length > 0) {
            list = acc;
        }
        const filterData = availableSearchCriteria[key](params[key], list);
        acc = [...filterData];
        return acc;
    }, []);
    return data;
}

const getHotels = () => {
    return axios.get(HOTELS_API_ENDPOINT);
}

router.get('/', async (req, res) => {
    let results = [];
    const queryParams = Object.keys(req.query);

    if (!isEmpty(queryParams) && !isEmpty(Hash[key])) { // only for searching
            console.log("inside hash");
            const results = filterResults(req.query, Hash[key]);
            res.success(results);
    } else {
        console.log('inside call')
        try {
            const response = await getHotels();
            results = response.data;
            Hash[key] = results.hotels;
            res.success(results.hotels);
    } catch (error) {
        console.log(error);
        res.error(error);
    }
    }
    
});

export default router;