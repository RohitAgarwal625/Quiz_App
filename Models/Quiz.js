const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  title: { type: String, required: true },
  questions: [
    {
      questionText: { type: String, required: true },
      options: [String],
      correctAnswer: { type: Number, required: true }
    }
  ]
});

const Quiz = mongoose.model('Quiz', quizSchema);
module.exports = Quiz;
