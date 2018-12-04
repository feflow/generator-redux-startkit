import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../reducers/reducers';
import thunk from 'redux-thunk';

const finalCreateStore = compose(applyMiddleware(thunk))(createStore);


export default function configureStore(initialState) {
    const store = finalCreateStore(
        rootReducer,
        initialState,
        // https://github.com/zalmoxisus/redux-devtools-extension#usage
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    if (module.hot) {
        console.log('module.hot', module.hot)
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers/reducers', () => {
            console.log('what happend')
            const nextRootReducer = require('../reducers/reducers');
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
