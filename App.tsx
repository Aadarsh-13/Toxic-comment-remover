import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
    const [comment, setComment] = useState('');
    const [result, setResult] = useState(null);

    const handleSubmit = async () => {
        const response = await axios.post('http://localhost:5000/predict', { comment });
        setResult(response.data);
    };

    return (
        <div>
            <h1>Toxic Comment Remover</h1>
            <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Enter your comment here"
            />
            <button onClick={handleSubmit}>Check Comment</button>
            {result && (
                <div>
                    <p>{`Toxic: ${result.is_toxic}`}</p>
                    <p>{`Probability: ${result.probability}`}</p>
                </div>
            )}
        </div>
    );
};

export default App;
