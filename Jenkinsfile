def repoName = "<%= name %>"
def version = env.BRANCH_NAME

pipeline {
  agent any
  environment {
    CI = 'true'
  }
  stages {
    stage("Git Checkout") {
      steps {
        checkout scm
      }
    }
    stage("Bootstrap && Build") {
      agent {
        docker {
          image 'node:12.22.7-alpine3.14' 
          args '-e HOME=/tmp -e NPM_CONFIG_PREFIX=/tmp/.npm'
          reuseNode true
        }
      }
      steps {
        sh 'npm config set registry https://registry.npm.taobao.org'
        sh 'npm install'
        sh 'npm run build'
      }
    }
    stage("Deploy") {
        steps {
          sh 'echo "Deploy"'
        }
      }
  }
}