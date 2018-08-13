import * as HomeApiUtil from '../util/home_api_utli';

export const RECEIVE_HOMES = 'RECEIVE_HOMES';
export const RECEIVE_HOME = 'RECEIVE_HOME';

export const receiveHomes = (homes) => ({
    type: RECEIVE_HOMES,
    homes
});

export const fetchHomes = () => dispatch => (
    HomeApiUtil.fetchHomes()
    .then(homes => dispatch(receiveHomes(homes)))
);