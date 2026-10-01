// Edit your caseStudies here.
export const caseStudies = {
  project1: {
    category: "CI/CD & Security",
    title: "End-to-End DevOps CI/CD Pipeline",
    tags: ["Jenkins", "SonarQube", "Trivy", "Docker"],
    problemStatement:
      "The development team faced significant challenges with manual deployments that were error-prone, time-consuming, and lacked security checks. Code quality issues were often discovered late in the development cycle, and container vulnerabilities were going undetected until production.",
    criticalThinking:
      "I analyzed the entire software delivery lifecycle and identified key pain points: lack of automated testing, no security scanning, manual deployment steps, and inconsistent environments. The solution needed to address all these while maintaining developer velocity.",
    approach: [
      {
        title: "Pipeline Architecture Design",
        desc: "Designed a multi-stage Jenkins pipeline with clear separation of build, test, scan, and deploy phases.",
      },
      {
        title: "Code Quality Integration",
        desc: "Integrated SonarQube for static code analysis with quality gates that fail builds below threshold.",
      },
      {
        title: "Container Security Scanning",
        desc: "Added Trivy scanning to detect vulnerabilities in Docker images before deployment.",
      },
      {
        title: "Automated Testing Suite",
        desc: "Implemented unit tests, integration tests, and smoke tests at appropriate pipeline stages.",
      },
    ],
    before: [
      "Manual deployments taking 2-3 hours",
      "No automated security scanning",
      "Code quality issues found in production",
      "Inconsistent deployment processes",
      "No rollback mechanism",
    ],
    after: [
      "Automated deployments in 15 minutes",
      "Security scanning at every commit",
      "Quality gates catching issues early",
      "Standardized, repeatable process",
      "One-click rollback capability",
    ],
    outcome:
      "Reduced deployment time by 85%, caught 40+ security vulnerabilities before production, and improved code quality score from C to A grade.",
  },
  project2: {
    category: "DevSecOps & GitOps",
    title: "DevSecOps Platform (K8s & GitOps)",
    tags: ["AWS EKS", "Kubernetes", "Argo CD", "GitHub Actions"],
    problemStatement:
      "The organization needed a cloud-native platform that could support rapid feature development while maintaining security compliance. Traditional deployment methods could not keep pace with the agile development team's velocity.",
    criticalThinking:
      "I evaluated multiple orchestration platforms and deployment strategies. The key insight was that GitOps would provide the auditability and consistency needed while Kubernetes would handle the scalability requirements. Security had to be baked in, not bolted on.",
    approach: [
      {
        title: "EKS Cluster Setup",
        desc: "Provisioned production-grade EKS cluster with proper networking, node groups, and security configurations.",
      },
      {
        title: "GitOps Implementation",
        desc: "Implemented Argo CD for declarative GitOps deployments with automatic sync and drift detection.",
      },
      {
        title: "CI Pipeline Design",
        desc: "Built GitHub Actions workflows for building, testing, and publishing container images.",
      },
      {
        title: "Security Hardening",
        desc: "Implemented pod security policies, network policies, and secrets management with AWS Secrets Manager.",
      },
    ],
    before: [
      "No container orchestration",
      "Manual scaling during traffic spikes",
      "Configuration drift between environments",
      "Limited audit trail for changes",
      "Long recovery time after failures",
    ],
    after: [
      "Fully orchestrated K8s workloads",
      "Auto-scaling based on metrics",
      "Git as single source of truth",
      "Complete deployment audit trail",
      "Self-healing infrastructure",
    ],
    outcome:
      "Achieved 99.9% uptime, reduced time-to-production from days to hours, and passed security audit with zero critical findings.",
  },
  project3: {
    category: "Infrastructure as Code",
    title: "Cloud-Native E-Commerce App Infrastructure",
    tags: ["Terraform", "AWS", "VPC", "EC2", "ALB", "ASG", "Docker", "MERN"],
    problemStatement:
      "The e-commerce application was running on manually configured EC2 instances with no redundancy, auto-scaling, or disaster recovery. Infrastructure changes were risky and undocumented, making it impossible to recreate the environment.",
    criticalThinking:
      "I recognized that the core issue was treating infrastructure as a series of manual tasks rather than code. By codifying every resource in Terraform, we could version control our infrastructure, review changes, and reproduce environments reliably.",
    approach: [
      {
        title: "Network Architecture",
        desc: "Designed VPC with public/private subnets across multiple AZs for high availability.",
      },
      {
        title: "Compute Layer",
        desc: "Created EC2 launch templates with ASG for automatic scaling based on CPU and request metrics.",
      },
      {
        title: "Load Balancing",
        desc: "Configured ALB with health checks, SSL termination, and path-based routing.",
      },
      {
        title: "Terraform Modules",
        desc: "Built reusable modules for network, compute, database, and monitoring components.",
      },
    ],
    before: [
      "Single EC2 instance, no redundancy",
      "Manual configuration, no documentation",
      "No auto-scaling capability",
      "Click-ops for all changes",
      "Hours to provision new environment",
    ],
    after: [
      "Multi-AZ highly available setup",
      "Complete IaC with Terraform",
      "Auto-scaling 2-10 instances",
      "PR-based infrastructure changes",
      "New environment in 15 minutes",
    ],
    outcome:
      "Reduced infrastructure costs by 30% through right-sizing, achieved 99.95% availability, and cut environment provisioning time from 8 hours to 15 minutes.",
  },
  project4: {
    category: "Deployment Strategies",
    title: "Kubernetes Blue-Green Deployment",
    tags: ["Kubernetes", "Jenkins", "RBAC", "Java"],
    problemStatement:
      "Production deployments caused significant downtime and user disruption. Rolling back failed deployments was manual and slow, leading to extended outages. The multi-tier Java application had complex dependencies that made deployments risky.",
    criticalThinking:
      "I analyzed deployment failure patterns and found that most issues were caught within the first few minutes of deployment. A blue-green strategy would allow us to validate the new version before switching traffic, eliminating downtime and enabling instant rollback.",
    approach: [
      {
        title: "Dual Environment Setup",
        desc: "Created identical blue and green deployments in Kubernetes with separate services.",
      },
      {
        title: "Traffic Switching",
        desc: "Implemented service mesh for gradual traffic shifting and instant cutover capabilities.",
      },
      {
        title: "Health Validation",
        desc: "Added comprehensive health checks and smoke tests before traffic switch.",
      },
      {
        title: "RBAC Configuration",
        desc: "Implemented role-based access control for deployment permissions and audit logging.",
      },
    ],
    before: [
      "30-60 minutes downtime per deployment",
      "Manual rollback taking 20+ minutes",
      "No pre-production validation",
      "Deployments only during off-hours",
      "High stress, error-prone process",
    ],
    after: [
      "Zero-downtime deployments",
      "Instant one-click rollback",
      "Full validation before cutover",
      "Deploy anytime with confidence",
      "Automated, stress-free releases",
    ],
    outcome:
      "Eliminated deployment-related downtime completely, increased deployment frequency from monthly to daily, and reduced failed deployment recovery time from 20 minutes to under 30 seconds.",
  },
  project5: {
    category: "AI Automation",
    title: "AI Resume & Email Automation",
    tags: ["AI/ML", "Python", "Automation", "NLP"],
    problemStatement:
      "Job seekers spend countless hours manually tailoring resumes and cover letters for each application. This repetitive process is time-consuming and often results in generic applications that don't stand out.",
    criticalThinking:
      "I identified that the key to effective job applications is matching skills and experiences to job requirements. By using NLP to analyze job descriptions and intelligently match relevant experiences, we could automate personalization at scale.",
    approach: [
      {
        title: "JD Analysis Engine",
        desc: "Built NLP pipeline to extract key requirements, skills, and preferences from job descriptions.",
      },
      {
        title: "Resume Tailoring",
        desc: "Created algorithm to dynamically reorder and emphasize relevant experiences based on JD match.",
      },
      {
        title: "Cover Letter Generation",
        desc: "Implemented template-based generation with AI-powered personalization for company and role.",
      },
      {
        title: "Email Automation",
        desc: "Built scheduling system for personalized follow-up emails with tracking.",
      },
    ],
    before: [
      "2-3 hours per application",
      "Generic, one-size-fits-all resume",
      "Manual email follow-ups forgotten",
      "Low response rate from applications",
      "Inconsistent application quality",
    ],
    after: [
      "15 minutes per application",
      "AI-tailored resume for each job",
      "Automated follow-up sequences",
      "3x higher response rate",
      "Consistently high-quality applications",
    ],
    outcome:
      "Reduced application time by 85%, increased interview callback rate from 5% to 15%, and automated follow-up process completely.",
  },
  project6: {
    category: "Full-Stack Development",
    title: "MERN E-Commerce Store",
    tags: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "JWT",
      "AWS EC2",
      "GitHub Actions",
    ],
    problemStatement:
      "A retail business needed an online presence but existing platforms were either too expensive or too limiting. They required a custom solution with specific features for their inventory management and customer experience needs.",
    criticalThinking:
      "I chose the MERN stack for its flexibility and my expertise. The architecture needed to handle product catalog, user authentication, shopping cart, payments, and order management while remaining maintainable and scalable.",
    approach: [
      {
        title: "Database Design",
        desc: "Designed MongoDB schemas for products, users, orders, and reviews with proper indexing.",
      },
      {
        title: "API Development",
        desc: "Built RESTful API with Express.js including authentication, authorization, and input validation.",
      },
      {
        title: "React Frontend",
        desc: "Created responsive React SPA with Redux for state management and optimistic UI updates.",
      },
      {
        title: "DevOps Setup",
        desc: "Configured AWS EC2 deployment with GitHub Actions CI/CD and SSL termination.",
      },
    ],
    before: [
      "No online sales channel",
      "Manual inventory tracking",
      "No customer data insights",
      "Limited reach to local area",
      "Phone/email order processing",
    ],
    after: [
      "24/7 online store",
      "Automated inventory sync",
      "Customer analytics dashboard",
      "Global customer reach",
      "Self-service ordering",
    ],
    outcome:
      "Launched store with 500+ products, achieved 1000+ users in first month, and automated 90% of order processing.",
  },
  project7: {
    category: "Big Data & Anomaly Detection",
    title: "GUI for Spectrum Analyser",
    tags: ["Python", "Data Visualization", "Signal Processing", "Big Data"],
    problemStatement:
      "Engineers analyzing radio frequency data were overwhelmed by the volume and complexity of spectrum data. Manual analysis was slow, and subtle anomalies were often missed. They needed a tool to visualize and automatically flag unusual patterns.",
    criticalThinking:
      "I realized that the key challenge was making complex signal data intuitive. By combining real-time spectrogram visualization with statistical anomaly detection, engineers could quickly identify issues that would have taken hours to find manually.",
    approach: [
      {
        title: "Data Pipeline",
        desc: "Built efficient data ingestion pipeline capable of handling high-frequency spectrum data.",
      },
      {
        title: "Spectrogram Generation",
        desc: "Implemented FFT-based spectrogram visualization with configurable time-frequency resolution.",
      },
      {
        title: "Anomaly Detection",
        desc: "Developed statistical algorithms to automatically flag frequency deviations and interference.",
      },
      {
        title: "Interactive GUI",
        desc: "Created user-friendly interface with zoom, pan, and marker capabilities for detailed analysis.",
      },
    ],
    before: [
      "Manual data analysis in spreadsheets",
      "Hours to identify anomalies",
      "No historical comparison",
      "Limited visualization capability",
      "Reactive problem detection",
    ],
    after: [
      "Real-time automated analysis",
      "Instant anomaly flagging",
      "Historical trend comparison",
      "Rich spectrogram visualization",
      "Proactive issue detection",
    ],
    outcome:
      "Reduced analysis time by 90%, improved anomaly detection accuracy by 75%, and enabled real-time monitoring of spectrum data.",
  },
  project8: {
    category: "Cybersecurity & IoT",
    title: "Network Anomaly Detection (IoT)",
    tags: [
      "Machine Learning",
      "Python",
      "IoT",
      "Real-time Dashboard",
      "2M+ Logs",
    ],
    problemStatement:
      "An IoT network with thousands of devices was generating over 2 million log entries daily. Security threats were hiding in this massive data volume, and traditional rule-based systems couldn't keep up with evolving attack patterns.",
    criticalThinking:
      "I recognized that the scale of data required machine learning rather than manual rules. The challenge was feature engineering - identifying which log attributes were most indicative of malicious activity while maintaining real-time detection capability.",
    approach: [
      {
        title: "Data Engineering",
        desc: "Built Spark pipeline to process 2M+ daily logs, extracting 50+ features for ML models.",
      },
      {
        title: "Model Development",
        desc: "Trained ensemble of Random Forest and Isolation Forest models for anomaly detection.",
      },
      {
        title: "Real-time Scoring",
        desc: "Implemented streaming architecture for sub-second anomaly detection on live traffic.",
      },
      {
        title: "Dashboard Creation",
        desc: "Built interactive dashboard showing network health, detected threats, and drill-down details.",
      },
    ],
    before: [
      "Days to detect security incidents",
      "Rule-based detection only",
      "High false positive rate",
      "No visibility into IoT traffic",
      "Reactive incident response",
    ],
    after: [
      "Real-time threat detection",
      "ML-based pattern recognition",
      "95% detection accuracy",
      "Complete network visibility",
      "Proactive threat hunting",
    ],
    outcome:
      "Detected 50+ previously unknown attack patterns, reduced incident detection time from days to seconds, and achieved 95% accuracy with only 2% false positive rate.",
  },
  project9: {
    category: "Predictive Analytics",
    title: "Flight Price Prediction",
    tags: ["Flask", "Machine Learning", "Python", "Feature Engineering"],
    problemStatement:
      "Travelers struggle to find the best time to book flights, often paying more than necessary. Flight prices are dynamic and influenced by many factors, making manual prediction nearly impossible.",
    criticalThinking:
      "I analyzed the factors affecting flight prices: booking lead time, departure time, airline, route, and seasonality. By training a model on historical price data, we could provide actionable predictions to help travelers save money.",
    approach: [
      {
        title: "Data Collection",
        desc: "Gathered historical flight price data with features like route, airline, timing, and seasonality.",
      },
      {
        title: "Feature Engineering",
        desc: "Created derived features for days until departure, time of day, day of week, and holiday proximity.",
      },
      {
        title: "Model Training",
        desc: "Trained and compared multiple regression models, selecting Random Forest for best performance.",
      },
      {
        title: "Web Application",
        desc: "Built Flask app with intuitive interface for users to input flight details and get price predictions.",
      },
    ],
    before: [
      "Guessing best booking time",
      "Often overpaying for flights",
      "No price trend visibility",
      "Checking multiple sites manually",
      "Missing price drops",
    ],
    after: [
      "Data-driven booking decisions",
      "Predicted optimal booking window",
      "Price trend visualization",
      "Single app for predictions",
      "Alerts for price changes",
    ],
    outcome:
      "Achieved 85% prediction accuracy within \xB110% of actual price, helped users save an average of 15% on flight bookings.",
  },
  project10: {
    category: "Financial Forecasting",
    title: "Gold Price Prediction",
    tags: ["Machine Learning", "Python", "Economic Analysis", "Time Series"],
    problemStatement:
      "Investors and jewelers need to make decisions about gold purchases but struggle to predict price movements. Gold prices are influenced by complex macroeconomic factors that are difficult to analyze manually.",
    criticalThinking:
      "I identified key economic indicators that historically correlate with gold prices: USD strength, inflation rates, interest rates, and market volatility. By modeling these relationships, we could provide useful price forecasts.",
    approach: [
      {
        title: "Economic Data Integration",
        desc: "Aggregated data from multiple sources: Fed rates, USD index, inflation data, and gold prices.",
      },
      {
        title: "Correlation Analysis",
        desc: "Performed statistical analysis to identify leading indicators and lag relationships.",
      },
      {
        title: "Time Series Modeling",
        desc: "Implemented LSTM neural network to capture temporal patterns in price movements.",
      },
      {
        title: "Prediction System",
        desc: "Built system providing 7-day and 30-day price forecasts with confidence intervals.",
      },
    ],
    before: [
      "No systematic price analysis",
      "Emotional buying decisions",
      "Missing market opportunities",
      "Reactive to price changes",
      "Limited economic understanding",
    ],
    after: [
      "Data-driven price forecasts",
      "Informed investment timing",
      "Proactive position management",
      "Ahead of market moves",
      "Economic indicator tracking",
    ],
    outcome:
      "Achieved 80% directional accuracy for 7-day forecasts, helping users make better-informed gold investment decisions.",
  },
  project11: {
    category: "Safety Systems & IoT",
    title: "Automatic Exhaust Fan & Gas Sensor",
    tags: ["Embedded Systems", "Sensors", "Microcontrollers", "Safety"],
    problemStatement:
      "Industrial and residential environments face risks from accumulation of harmful gases like CO, LPG, and methane. Manual ventilation response is too slow in emergencies, and existing solutions are expensive and complex.",
    criticalThinking:
      "I designed a simple, reliable, and cost-effective solution. The key was selecting sensitive gas sensors with fast response times and creating fail-safe logic that prioritizes safety over false alarm avoidance.",
    approach: [
      {
        title: "Sensor Selection",
        desc: "Evaluated and selected MQ series sensors for detecting multiple gas types with fast response.",
      },
      {
        title: "Microcontroller Programming",
        desc: "Wrote efficient firmware for real-time sensor monitoring and threshold-based triggering.",
      },
      {
        title: "Actuator Control",
        desc: "Implemented relay-based exhaust fan control with motor protection and fail-safe modes.",
      },
      {
        title: "Alert System",
        desc: "Added buzzer and LED alerts with SMS notification capability for remote monitoring.",
      },
    ],
    before: [
      "No gas detection capability",
      "Manual ventilation response",
      "Risk of gas accumulation",
      "No remote notification",
      "Expensive commercial solutions",
    ],
    after: [
      "Continuous gas monitoring",
      "Automatic ventilation activation",
      "Sub-second response time",
      "SMS alerts to phone",
      "Cost-effective DIY solution",
    ],
    outcome:
      "Created production-ready prototype at 20% cost of commercial solutions, with response time under 2 seconds for gas detection.",
  },
  project12: {
    category: "Security & Automotive IoT",
    title: "Fingerprint Car Ignition (RFID)",
    tags: ["Biometrics", "RFID", "Embedded Systems", "Security"],
    problemStatement:
      "Vehicle theft remains a significant problem, and traditional key-based ignition systems are vulnerable to hot-wiring and key theft. A more secure authentication method was needed that couldn't be easily bypassed.",
    criticalThinking:
      "I designed a dual-factor authentication system combining something you have (RFID tag) with something you are (fingerprint). This approach ensures that even if one factor is compromised, the vehicle remains secure.",
    approach: [
      {
        title: "Biometric Integration",
        desc: "Integrated fingerprint sensor with secure template storage and matching algorithms.",
      },
      {
        title: "RFID Implementation",
        desc: "Added RFID reader as second authentication factor with encrypted tag communication.",
      },
      {
        title: "Ignition Control",
        desc: "Designed relay-based ignition control with anti-tampering protection and timeout logic.",
      },
      {
        title: "Enrollment System",
        desc: "Created secure enrollment process for adding authorized users with admin controls.",
      },
    ],
    before: [
      "Single-factor key ignition",
      "Vulnerable to hot-wiring",
      "Key theft = vehicle theft",
      "No audit trail of access",
      "Shared keys for multiple drivers",
    ],
    after: [
      "Dual-factor biometric + RFID",
      "Anti-tampering protection",
      "Biometric cannot be stolen",
      "Complete access logging",
      "Individual driver profiles",
    ],
    outcome:
      "Built working prototype demonstrating significant security improvement over traditional ignition, with successful demonstrations at college tech fest.",
  },
};
