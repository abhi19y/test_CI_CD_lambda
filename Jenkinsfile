pipeline {
    agent any
    stages {
        stage('checkout') {
            steps {
              // get code from our Git repository
			 git branch: 'master' ,
			 url: 'https://github.com/abhi19y/test_CI_CD_lambda',
			 credentialsId: 'ebcefbc6-d6f6-4e11-b2d4-bfabeb724dd4'
            }
        }
		stage('run') { // Compile 
			steps {
				// run Validate
				echo "hello world"
			}
		}
	}
}
