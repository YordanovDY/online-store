import moment from 'moment';

export function shortDateFormat(timestamp) {
    return moment(timestamp).format('Do MMM YYYY hh:mm A');
}