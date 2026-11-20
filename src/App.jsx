
import './index.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import LandingPage from './pages/LandingPage'
import Home from './sections/Home'
import FinalQuiz from './sections/FinalQuiz'
import Help from './sections/Help'
import Lessons from './sections/Lessons'
import Motivation from './sections/Motivation'
import Objective from './sections/Objective'
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
