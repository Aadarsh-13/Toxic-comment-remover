from flask import Flask, request, jsonify
import pickle

app = Flask(__name__)

# Load model and vectorizer
with open('models/vectorizer.pkl', 'rb') as f:
    vectorizer = pickle.load(f)
with open('models/model.pkl', 'rb') as f:
    model = pickle.load(f)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    comment = data['comment']
    tfidf = vectorizer.transform([comment])
    prediction = model.predict(tfidf)
    probability = model.predict_proba(tfidf).max()
    return jsonify({'is_toxic': bool(prediction[0]), 'probability': probability})

if __name__ == '__main__':
    app.run(debug=True)
