pipeline {
    agent any
    
    stages {
        stage('Checkout')
        {
            steps {
                // Checkout the code from your Git repository
                git 'https://github.com/JeetashaArora/discussionForum.git'
            }
        }
        stage('Build') {
            steps {
                // Use Maven for building
               echo 'Buiding using Maven'    
            }
        }
        stage('Unit and Integration Tests') {
            steps {
                echo 'Using JUnit for unit testing and Selenium for integration testing '  
                emailext attachLog: true, body: 'Unit and integration testing', subject: 'Unit and integration testing', to: 'jeetasha4796.be22@chitkara.edu.in'
            }
        }
        stage('Code Analysis') {
            steps {
                // Use tools like SonarQube, Checkstyle, PMD, FindBugs
                echo 'Using SonarQube for Code quality analysis'  
            }
        }
        stage('Security Scan') {
            steps {
                echo 'Scanning using OWASP Dependency Checker' 
                emailext attachLog: true, body: 'Security Scan', subject: 'Security scan', to: 'jeetasha4796.be22@chitkara.edu.in'
            }
        }
        stage('Deploy to Staging') {
            steps {
                // Use tools like AWS CLI, Ansible, Docker
                echo 'Deploying to the staging area using Docker Compose'  
            }
        }
        stage('Integration Tests on Staging') {
            steps {
                // Run integration tests on staging environment
                echo 'Using JUnit for unit testing and Selenium for integration testing'
                emailext attachLog: true, body: 'Unit and integration testing on staging server', subject: 'Unit and integration testing on staging server', to: 'jeetasha4796.be22@chitkara.edu.in'
            }
        }
        stage('Deploy to Production') {
            steps {
                // Deploy to production environment
                echo 'Deploying to production on Amazon EC2 instance'  
            }
        }
    }
}
