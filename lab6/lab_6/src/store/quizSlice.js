import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk for loading questions from db.json
export const loadQuestionsFromDB = createAsyncThunk(
  'quiz/loadQuestionsFromDB',
  async () => {
    try {
      const response = await fetch('/db.json');
      const data = await response.json();
      return data.questions;
    } catch (error) {
      throw new Error('Failed to load questions from database');
    }
  }
);

// Async thunk for checking answers
export const checkAnswers = createAsyncThunk(
  'quiz/checkAnswers',
  async (_, { getState }) => {
    const { quiz } = getState();
    const { questions, userAnswers } = quiz;
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Calculate results
    const results = questions.map((question, index) => {
      const userAnswer = userAnswers[index];
      const isCorrect = userAnswer === question.correctAnswer;
      return {
        questionIndex: index,
        isCorrect,
        userAnswer,
        correctAnswer: question.correctAnswer
      };
    });
    
    const totalCorrect = results.filter(result => result.isCorrect).length;
    const score = (totalCorrect / questions.length) * 100;
    
    return { results, score, totalCorrect, totalQuestions: questions.length };
  }
);

const initialState = {
  questions: [],
  userAnswers: {},
  results: null,
  score: null,
  isLoading: false,
  error: null,
  showResults: false
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    addQuestion: (state, action) => {
      const { question, options, correctAnswer } = action.payload;
      state.questions.push({
        id: Date.now(),
        question,
        options,
        correctAnswer
      });
    },
    addQuestionDirect: (state, action) => {
      state.questions.push(action.payload);
    },
    selectAnswer: (state, action) => {
      const { questionIndex, answerIndex } = action.payload;
      state.userAnswers[questionIndex] = answerIndex;
    },
    clearQuiz: (state) => {
      state.questions = [];
      state.userAnswers = {};
      state.results = null;
      state.score = null;
      state.showResults = false;
    },
    toggleResults: (state) => {
      state.showResults = !state.showResults;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadQuestionsFromDB.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loadQuestionsFromDB.fulfilled, (state, action) => {
        state.isLoading = false;
        state.questions = action.payload;
        state.userAnswers = {};
        state.results = null;
        state.score = null;
        state.showResults = false;
      })
      .addCase(loadQuestionsFromDB.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(checkAnswers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(checkAnswers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.results = action.payload.results;
        state.score = action.payload.score;
        state.showResults = true;
      })
      .addCase(checkAnswers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { addQuestion, addQuestionDirect, selectAnswer, clearQuiz, toggleResults } = quizSlice.actions;
export default quizSlice.reducer; 