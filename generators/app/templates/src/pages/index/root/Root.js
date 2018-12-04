if ('production' !== process.env.NODE_ENV) {
    // add vconsole or eruda here if you want to do so
    // use it for hot reload
    module.exports = require('./Root.hot');
} else {
    module.exports = require('./Root.prod');
}
