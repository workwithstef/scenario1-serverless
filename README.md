# Project Scenario 1 + serverless

Here's a revised project challenge that includes serverless architecture on AWS:

## Project Name: Automating the Deployment of a Highly-Available Web Application with Serverless Architecture on AWS

### Project Description:
You are tasked with automating the deployment of a highly-available web application on AWS using serverless architecture. The web application consists of a frontend that is hosted on an S3 bucket, behind an Amazon CloudFront distribution, and a backend that is built using AWS Lambda and DynamoDB. Your goal is to automate the deployment of this web application using Ansible, Terraform, and serverless architecture on AWS.

### Project Requirements:

- Use Terraform to provision the necessary infrastructure on AWS, which includes an S3 bucket, a CloudFront distribution, a Lambda function, and a DynamoDB table.
- Use Ansible to deploy and configure the Lambda function with the necessary code and environment variables for the web application.
- Use Ansible to create the DynamoDB table with the necessary schema for the web application.
- Implement autoscaling for the Lambda function based on the load of the web application.
- Implement backup and restore procedures for the DynamoDB table.

### Deliverables:

- Terraform code that provisions the necessary infrastructure on AWS.
- Ansible playbook(s) that automate the deployment and configuration of the Lambda function and DynamoDB table.
- Documentation that explains how to run the Terraform code and Ansible playbook(s).
- A demonstration of the fully automated deployment of the web application.
Note: This project challenge assumes that you have prior experience working with AWS, Ansible, Terraform, and serverless architecture.