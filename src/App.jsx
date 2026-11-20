
import './index.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import LandingPage from './pages/LandingPage'
import Home from './sections/Home'
import CreateYourOwnSet from './sections/CreateYourOwnSet'
import FinalQuiz from './sections/FinalQuiz'
import Help from './sections/Help'
import HOTSQuestions from './sections/HOTSQuestions'
import IndependentPractices from './sections/IndependentPractices'
import LearningCompetencies from './sections/LearningCompetencies'
import Lessons from './sections/Lessons'
import Motivation from './sections/Motivation'
import Objective from './sections/Objective'
import PerformanceTask from './sections/PerformanceTask'
import RealLifeScenarios from './sections/RealLifeScenarios'
import Reflection from './sections/Reflection'
import TermsDefinitions from './sections/TermsDefinitions'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />


        <Route
          path="/lessons"
          element={<Navigate to="/lessons/1" replace />}
        />
        <Route
          path="/lessons/:lessonId"
          element={<Lessons />}
        />

        <Route path="/terms" element={<TermsDefinitions />} />
        <Route path="/learning-competencies" element={<LearningCompetencies />} />
        <Route path="/independent-practices" element={<IndependentPractices />} />
        <Route path="/real-life-scenarios" element={<RealLifeScenarios />} />
        <Route path="/performance-task" element={<PerformanceTask />} />
        <Route path="/hots-questions" element={<HOTSQuestions />} />
        <Route path="/create-your-own-set" element={<CreateYourOwnSet />} />
        <Route path="/objective" element={<Objective />} />
        <Route path="/motivation" element={<Motivation />} />
        <Route path="/reflection" element={<Reflection />} />
        <Route path="/final-quiz" element={<FinalQuiz />} />
        <Route path="/help" element={<Help />} />


        {/* Redirect unknown routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
