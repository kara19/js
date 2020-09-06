import React, { useEffect, useState } from 'react';
import ReactMd from 'react-md-file';

const Report = ({ match }) => {
  const kmom = 'kmom0' + match.params.kmom;
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch(`./README.md`)
      .then(res => res.json())
      .then(res => setQuestions(res));
  });

  const QuestionsList = () =>
    questions.map((question, index) => (
      <div className="question" key={index}>
        <p>
          <strong>{question.question}</strong>
        </p>
        <p>{question.answer}</p>
      </div>
    ));

  return (
    <main>
      <h2>{kmom}</h2>
      <QuestionsList />
    </main>
  );
};

export default Report;