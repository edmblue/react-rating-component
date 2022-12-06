import { useState } from 'react';
import BackPage from './components/BackPage';
import FrontPage from './components/FrontPage';

function App() {
  const [score, setScore] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="flex h-screen items-center justify-center">
      {submitted ? (
        <BackPage score={score} />
      ) : (
        <FrontPage setScore={setScore} setSubmitted={setSubmitted} />
      )}
    </div>
  );
}

export default App;
