const config = require('config');
const DB_URL = config.get('DB_CONFIG.url')
const NOTE = config.get('Annotations.note')
const JWT_KEY = config.get('jwt.key')

module.exports = {
    DB_URL,
    NOTE,
    JWT_KEY
}