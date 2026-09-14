pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                echo 'Building DevSecOps GitOps application...'
            }
        }

        stage('Docker') {
            steps {
                echo 'Docker image build stage'
            }
        }

        stage('Security Scan') {
            steps {
                echo 'Trivy security scan stage'
            }
        }

        stage('Deploy') {
            steps {
                echo 'GitOps deployment stage'
            }
        }
    }

    post {
        success {
            echo 'DevSecOps GitOps Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}