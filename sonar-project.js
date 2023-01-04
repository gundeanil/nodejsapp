const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'http://13.233.117.187:9000/',
       options : {
	    'sonar.projectDescription': 'Node JS application',
	    'sonar.projectName': 'anilgunde_nodejsapp',
	    'sonar.projectKey': 'anilgunde_nodejsapp',
	    'sonar.login': '1f2722a93b04c23afca79f6cdc6e59e6c3eaaa93',
            'sonar.projectVersion':'1.0',
	    'sonar.language':'js',
            'sonar.sourceEncoding':'UTF-8',
            'sonar.sources': '.',
       },
}, () => {});
