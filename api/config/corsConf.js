if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const CorsConf = {
    option: {
        origin: [`${process.env.ALLOW_CLIENT1}`],
        credentials: true
    }
}

module.exports = CorsConf;