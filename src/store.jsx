import { createStore } from 'redux';
import Rootred from './redux/Reducers/main';

const Store = createStore(
    Rootred
);
export default Store;