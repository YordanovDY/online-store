import moment from 'moment';

export function shortDateFormat(timestamp) {
    return moment(timestamp).format('Do MMM YYYY hh:mm A');
}

export function longDateFormat(timestamp) {
    return moment(timestamp).format('Do MMMM YYYY hh:mm:ss A');
}

export function onlyDateFormat(timestamp) {
    return moment(timestamp).format('Do MMMM YYYY, dddd');
}