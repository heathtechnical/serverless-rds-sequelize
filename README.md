# serverless-rds-sequelize

Serverless project that demonstrates RDS CloudFormation with NodeJS + Sequelize

## Prerequisites

* NodeJS
* Serverless Framework
* AWS account & [credentials](https://serverless.com/framework/docs/providers/aws/guide/credentials)

## Installation

Clone repo:

    $ git clone https://github.com/heathtechnical/serverless-rds-sequelize.git
    
Deploy:

    $ cd serverless-rds-sequelize
    $ serverless deploy
    
Test:

    $ curl -X GET https://XXXXXXXXXX.execute-api.us-east-1.amazonaws.com/dev/hello
    Database connection successful
