# Toxic-comment-remover
 This project uses NLP and Machine Learning to automatically detect and filter toxic comments such as hate speech and harassment. By employing TF-IDF for feature extraction and Logistic Regression for classification, it provides real-time moderation with a web application that blocks toxic comments based on a customizable threshold.
This project implements an automated Toxic Comment Remover using Natural Language Processing (NLP) and Machine Learning. It aims to detect and filter harmful online content, such as hate speech, personal attacks, harassment, and inflammatory language, in real-time. The system leverages TF-IDF (Term Frequency-Inverse Document Frequency) for feature extraction and Logistic Regression for classification, enabling it to efficiently identify toxic comments.

The model is trained on a labeled dataset and achieves strong performance metrics, including high accuracy, precision, recall, and F1-score. Additionally, the system is deployed as a web application, where users can input comments, and the model provides a toxicity score to determine whether the comment should be allowed or blocked based on a predefined threshold.

# Features:

Detects and classifies toxic comments using NLP techniques.
Uses TF-IDF for feature extraction and Logistic Regression for classification.
Real-time toxicity score generation through a web-based interface.
Blocks comments deemed toxic based on a customizable toxicity threshold.
Demonstrates high accuracy (93%), precision (82%), and recall (84%) in toxic comment detection.
Technologies Used:

Python (for model training and web server).
TF-IDF (for text feature extraction).
Logistic Regression (for toxicity classification).
Flask (for serving the model through a web API).
React.js (for frontend development).
Model Performance:

Accuracy: 93%
Precision: 82%
Recall: 84%
F1-Score: 88%
Installation:

Clone the repository: git clone https://github.com/your-username/toxic-comment-remover.git
Install dependencies: pip install -r requirements.txt
Train the model: python rain.py
Run the web server: python server.py
Open the app: Access localhost:5000 in your browser.


Snapshots



Basic UI
![image](https://github.com/user-attachments/assets/ba6da4f5-0771-4456-94de-46f45b7d648e)



 Nice comment
![image](https://github.com/user-attachments/assets/98a68c5e-951e-4b11-b129-c3e2f6b56285)


 Submit nice comment
![image](https://github.com/user-attachments/assets/1610a862-f4e5-4c99-8e0f-09c0679b8ab6)



 Toxic comment
![image](https://github.com/user-attachments/assets/a3459249-75d1-457d-8f39-b9bae9070c1a)



 Submit toxic comment
![image](https://github.com/user-attachments/assets/f438ee4d-c1be-40ee-895e-a7f2b02f92ec)

 

 Toxic keyword
![image](https://github.com/user-attachments/assets/64da6403-2caa-4bf2-9ba6-ea7442e64a35)


 Positive comment that is using the toxic keyword
![image](https://github.com/user-attachments/assets/a9f838b9-b13b-43d8-bd7f-fc876bc67576)

We are able to post positive comments that have a toxic keyword
