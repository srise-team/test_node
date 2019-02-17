let CONFIG = {} //Make this global to use all over the application

CONFIG.app          = process.env.APP   || 'dev';
CONFIG.port         = process.env.PORT  || '3000';
CONFIG.secret       = process.env.secret  || 'justasecret';

module.exports = CONFIG;