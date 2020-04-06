import moment from 'moment';
import { DATE_FORMAT } from '../config/keys';

export const searchByName = (name, list) => {
    return name ? list.filter(h => h.name.includes(name)) : list;
}

export const searchByCity = (city, list) => {
    return city ? list.filter(h => h.city === city) : list;
}

export const searchByPriceRange = (priceRange, list) => {
    const range = priceRange.split(':');
    return priceRange ? list.filter(h => {
        return h.price >= range[0] && h.price <= range[1];
    }) : list;
}

export const searchByAvailability = (dateRange, list) => {
    const range = dateRange.split(':');
    const rangeFrom = moment(range[0], DATE_FORMAT);
    const rangeTo = moment(range[1], DATE_FORMAT);

    return dateRange ? list.filter(h => (
        h.availability.some(dates => (
            moment(dates.from, DATE_FORMAT).isSame(rangeFrom, 'day') && moment(dates.to, DATE_FORMAT).isSame(rangeTo, 'day')
        ))
    )) : list;
}

export const sortBy = (type, list) => {
    if( type === 'price') {
        return list.sort((a, b) => a.price - b.price);
    }
    if( type === 'name') {
        return list.sort((a, b) => {
            const nameA = a.name.toUpperCase(); // ignore upper and lowercase
            const nameB = b.name.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            // names must be equal
            return 0;
          });
    }
}