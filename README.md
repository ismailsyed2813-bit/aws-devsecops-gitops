\# End-to-End DevSecOps GitOps CI/CD Pipeline on AWS Kubernetes



\## 📌 Project Overview



This project demonstrates an end-to-end DevSecOps and GitOps workflow for deploying a containerized application on Amazon EKS.



The project integrates CI/CD, security scanning, containerization, infrastructure as code, Kubernetes, GitOps, and monitoring.



\## 🏗️ Architecture



Developer → GitHub → Jenkins → Security Checks → Docker → Amazon ECR → Argo CD → Amazon EKS



Terraform is used to provision AWS infrastructure.



Prometheus and Grafana are used for monitoring and observability.



\## 🛠️ Tools \& Technologies



\- AWS

\- Terraform

\- Git

\- GitHub

\- Jenkins

\- SonarQube

\- Trivy

\- Docker

\- Amazon ECR

\- Kubernetes

\- Amazon EKS

\- Argo CD

\- Helm

\- Prometheus

\- Grafana

\- Linux



\## 📂 Project Structure



```text

aws-devsecops-gitops/

├── app/

├── terraform/

├── kubernetes/

├── argocd/

├── monitoring/

├── screenshots/

├── Dockerfile

├── Jenkinsfile

└── README.md

🚀 Application



The application is a Node.js Express application.



Endpoints:



/ — Application status

/health — Health check

🐳 Docker



The application is containerized using Docker and the image is pushed to Amazon ECR.



☁️ AWS Infrastructure



Terraform was used to provision:



VPC

Public and private subnets

Internet Gateway

NAT Gateway

Route tables

IAM roles

Amazon EKS cluster

EKS managed node group

☸️ Kubernetes



The application was deployed to Amazon EKS using:



Deployment

Service

Horizontal Pod Autoscaler (HPA)

Readiness probe

Liveness probe

Resource requests and limits

🔄 GitOps with Argo CD



Argo CD continuously monitors the GitHub repository and synchronizes Kubernetes manifests with the EKS cluster.



The application was verified as:



Healthy

Synced

🔐 DevSecOps



The Jenkins pipeline includes stages for:



Source checkout

Application build

Docker

Security scanning

GitOps deployment



SonarQube and Trivy were included as security tooling in the project workflow.



📊 Monitoring



Prometheus and Grafana were deployed using Helm for Kubernetes monitoring and observability.



🔁 CI/CD Workflow

Developer

&#x20;  ↓

GitHub

&#x20;  ↓

Jenkins

&#x20;  ↓

Security Checks

&#x20;  ↓

Docker

&#x20;  ↓

Amazon ECR

&#x20;  ↓

GitOps Repository

&#x20;  ↓

Argo CD

&#x20;  ↓

Amazon EKS

&#x20;  ↓

Application

&#x20;  ↓

Prometheus + Grafana

📸 Project Screenshots

GitHub Repository



Jenkins Pipeline



Amazon ECR



Amazon EKS



Argo CD



Kubernetes Pods



HPA



Prometheus



Grafana



Application Running



👨‍💻 Author



Syed Ismail



DevOps / Cloud Engineer

