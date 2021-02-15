const PROXY_CONFIG = {
  "/data/*": {
		"target": "http://api.openweathermap.org",
		"secure": false,
		"logLevel": "debug",
		"changeOrigin": true
		}
		
};
module.exports = PROXY_CONFIG;
