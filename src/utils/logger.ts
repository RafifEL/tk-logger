const logger = require('winston');
require('winston-logstash');

logger.add(logger.transports.Logstash, {
  port: 13299,
  host: '2f357c18-6f29-4201-91e1-2883e9a45764-ls.logit.io',
  ssl_enable: true,
  max_connect_retries: -1,
});

export default logger;
