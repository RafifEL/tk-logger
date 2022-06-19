const logger = require('winston');
require('winston-logstash');

logger.add(logger.transports.Logstash, {
  port: 18444,
  host: 'ec68a414-7931-4676-9bd9-881897ea65db-ls.logit.io',
  ssl_enable: true,
  max_connect_retries: -1,
});

export default logger;
