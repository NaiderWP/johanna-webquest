import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import TitlePage from './components/TitlePage';
import Introduction from './components/Introduction';
import Task from './components/Task';
import Process from './components/Process';
import Evaluation from './components/Evaluation';
import Conclusion from './components/Conclusion';
import WixBanner from './components/WixBanner';
import { StudentDetails, WebQuestPage, RubricScore } from './types';
import { EclipseElement } from './components/EclipseSandbox';

export default function App() {
  // Navigation State
  const [activePage, setActivePage] = useState<WebQuestPage>('title');

  // Student State
  const [studentDetails] = useState<StudentDetails>({
    studentName: '',
    teacherName: '',
    subject: '',
    date: '',
  });

  const [activity1Evidence, setActivity1Evidence] = useState<string | null>(null);
  const [activity1Prediction, setActivity1Prediction] = useState<string>('');
  const [activity2BrightSide, setActivity2BrightSide] = useState<string>('');
  const [activity2Hemisphere, setActivity2Hemisphere] = useState<string>('');
  const [sandboxElements, setSandboxElements] = useState<EclipseElement[]>([]);
  const [activity3CompareExplain, setActivity3CompareExplain] = useState<string>('');
  const [activity3SolarEffect, setActivity3SolarEffect] = useState<string>('');
  const [activity3Screenshot, setActivity3Screenshot] = useState<string | null>(null);
  const [activity4Reflection, setActivity4Reflection] = useState<string>('');

  // Activity 5: Final Mission Report Submission
  const [missionTargetName, setMissionTargetName] = useState<string>('Kepler-Prime');
  const [missionTidalSummary, setMissionTidalSummary] = useState<string>('');
  const [missionPhasesSummary, setMissionPhasesSummary] = useState<string>('');
  const [missionEclipseSummary, setMissionEclipseSummary] = useState<string>('');
  const [missionHabitabilitySummary, setMissionHabitabilitySummary] = useState<string>('');
  const [missionFinalRecommendation, setMissionFinalRecommendation] = useState<string>('');
  const [missionFinalJustification, setMissionFinalJustification] = useState<string>('');
  const [missionReportSubmitted, setMissionReportSubmitted] = useState<boolean>(false);

  // Rubric / Evaluation State
  const [rubricScore, setRubricScore] = useState<RubricScore>({
    participation: null,
    evidence: null,
    understanding: null,
    reflection: null,
  });

  const handleRubricChange = (
    criteria: keyof RubricScore,
    rating: 'Excellent' | 'Good' | 'Needs Improvement'
  ) => {
    setRubricScore((prev) => ({ ...prev, [criteria]: rating }));
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-blue-100 print:bg-white text-slate-800 pt-[50px]">
      
      {/* Wix Banner Always Visible */}
      <WixBanner />

      {/* WebQuest Classroom Header */}
      <Header />

      {/* Sticky Section Navigation */}
      <Navigation activePage={activePage} onPageChange={setActivePage} />

      {/* Page Routing Container */}
      <main className="flex-1 bg-slate-50/50 py-4">
        {activePage === 'title' && <TitlePage />}
        {activePage === 'intro' && <Introduction />}
        {activePage === 'task' && <Task />}
        {activePage === 'process' && (
          <Process
            activity1Evidence={activity1Evidence}
            onActivity1EvidenceChange={setActivity1Evidence}
            activity1Prediction={activity1Prediction}
            onActivity1PredictionChange={setActivity1Prediction}
            activity2BrightSide={activity2BrightSide}
            onActivity2BrightSideChange={setActivity2BrightSide}
            activity2Hemisphere={activity2Hemisphere}
            onActivity2HemisphereChange={setActivity2Hemisphere}
            sandboxElements={sandboxElements}
            onSandboxElementsChange={setSandboxElements}
            activity3CompareExplain={activity3CompareExplain}
            onActivity3CompareExplainChange={setActivity3CompareExplain}
            activity3SolarEffect={activity3SolarEffect}
            onActivity3SolarEffectChange={setActivity3SolarEffect}
            activity3Screenshot={activity3Screenshot}
            onActivity3ScreenshotChange={setActivity3Screenshot}
            activity4Reflection={activity4Reflection}
            onActivity4ReflectionChange={setActivity4Reflection}
            missionTargetName={missionTargetName}
            onMissionTargetNameChange={setMissionTargetName}
            missionTidalSummary={missionTidalSummary}
            onMissionTidalSummaryChange={setMissionTidalSummary}
            missionPhasesSummary={missionPhasesSummary}
            onMissionPhasesSummaryChange={setMissionPhasesSummary}
            missionEclipseSummary={missionEclipseSummary}
            onMissionEclipseSummaryChange={setMissionEclipseSummary}
            missionHabitabilitySummary={missionHabitabilitySummary}
            onMissionHabitabilitySummaryChange={setMissionHabitabilitySummary}
            missionFinalRecommendation={missionFinalRecommendation}
            onMissionFinalRecommendationChange={setMissionFinalRecommendation}
            missionFinalJustification={missionFinalJustification}
            onMissionFinalJustificationChange={setMissionFinalJustification}
            missionReportSubmitted={missionReportSubmitted}
            onMissionReportSubmittedChange={setMissionReportSubmitted}
          />
        )}
        {activePage === 'evaluation' && (
          <Evaluation score={rubricScore} onScoreChange={handleRubricChange} />
        )}
        {activePage === 'conclusion' && (
          <Conclusion
            details={studentDetails}
            score={rubricScore}
            activity1Evidence={activity1Evidence}
            activity1Prediction={activity1Prediction}
            activity2BrightSide={activity2BrightSide}
            activity2Hemisphere={activity2Hemisphere}
            sandboxElements={sandboxElements}
            activity3CompareExplain={activity3CompareExplain}
            activity3SolarEffect={activity3SolarEffect}
            activity3Screenshot={activity3Screenshot}
            activity4Reflection={activity4Reflection}
            missionTargetName={missionTargetName}
            missionTidalSummary={missionTidalSummary}
            missionPhasesSummary={missionPhasesSummary}
            missionEclipseSummary={missionEclipseSummary}
            missionHabitabilitySummary={missionHabitabilitySummary}
            missionFinalRecommendation={missionFinalRecommendation}
            missionFinalJustification={missionFinalJustification}
            missionReportSubmitted={missionReportSubmitted}
          />
        )}
      </main>

      {/* Shared Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 px-4 mt-auto text-center text-xs text-slate-400 print:hidden">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex gap-4 mx-auto">
            <button
              onClick={() => setActivePage('evaluation')}
              className="hover:text-blue-600 font-semibold transition-colors focus:outline-none"
            >
              View Grading Scale
            </button>
          </div>
        </div>
      </footer>

    </div>
  );
}
