import React from 'react';
import { StudentDetails, RubricScore } from '../types';
import { Award, Compass, CheckCircle2, Globe, BookOpen, PenTool, Clipboard, Printer, ShieldCheck, AlertTriangle } from 'lucide-react';
import { EclipseElement } from './EclipseSandbox';

interface ConclusionProps {
  details: StudentDetails;
  score: RubricScore;
  activity1Evidence: string | null;
  activity1Prediction: string;
  activity2BrightSide: string;
  activity2Hemisphere: string;
  sandboxElements: EclipseElement[];
  activity3CompareExplain: string;
  activity3SolarEffect: string;
  activity3Screenshot: string | null;
  activity4Reflection: string;
  missionTargetName: string;
  missionTidalSummary: string;
  missionPhasesSummary: string;
  missionEclipseSummary: string;
  missionHabitabilitySummary: string;
  missionFinalRecommendation: string;
  missionFinalJustification: string;
  missionReportSubmitted: boolean;
}

export default function Conclusion({
  details,
  score,
  activity1Evidence,
  activity1Prediction,
  activity2BrightSide,
  activity2Hemisphere,
  sandboxElements,
  activity3CompareExplain,
  activity3SolarEffect,
  activity3Screenshot,
  activity4Reflection,
  missionTargetName,
  missionTidalSummary,
  missionPhasesSummary,
  missionEclipseSummary,
  missionHabitabilitySummary,
  missionFinalRecommendation,
  missionFinalJustification,
  missionReportSubmitted,
}: ConclusionProps) {
  // Map values to points
  const getPoints = (val: 'Excellent' | 'Good' | 'Needs Improvement' | null) => {
    if (val === 'Excellent') return 4;
    if (val === 'Good') return 3;
    if (val === 'Needs Improvement') return 1;
    return 0;
  };

  const totalPoints =
    getPoints(score.participation) +
    getPoints(score.evidence) +
    getPoints(score.understanding) +
    getPoints(score.reflection);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 space-y-8">
      
      {/* Title block */}
      <div className="border-b-2 border-indigo-100 pb-4">
        <h2 className="font-sans text-2xl md:text-3xl font-bold text-slate-800 flex items-center gap-2">
          <Award className="w-7 h-7 text-indigo-600" /> Conclusion
        </h2>
        <p className="text-slate-500 text-sm mt-1">
          Your scientific inquiry is complete! Reflect on your findings and review your submitted feasibility report.
        </p>
      </div>

      {/* Conclusion Representative Image */}
      <div className="relative rounded-xl overflow-hidden shadow-md border border-slate-200">
        <img
          src="/conclusion.png"
          alt="Future settlement and research station on Kepler-Prime stabilized by Exo-Luna"
          className="w-full h-auto object-cover max-h-[360px]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent p-4 text-white">
          <p className="text-xs md:text-sm font-semibold tracking-wider uppercase font-mono text-indigo-300">Inquiry Complete: Colonization Feasibility</p>
          <p className="text-[10px] md:text-xs text-slate-200 mt-0.5">Using astronomical observations to secure our future among the stars</p>
        </div>
      </div>

      {/* Congratulations / Mission Completion Banner */}
      <div className="bg-indigo-50 border-2 border-indigo-200 text-slate-800 rounded-xl p-6 md:p-8 text-center shadow-sm relative overflow-hidden">
        <div className="flex flex-col items-center relative z-10">
          <CheckCircle2 className="w-12 h-12 text-indigo-600 mb-3" />
          <h3 className="font-sans text-xl md:text-2xl font-bold text-indigo-950 tracking-tight">
            Congratulations, Planetary Scientist!
          </h3>
          <p className="text-slate-700 text-sm md:text-base max-w-2xl mx-auto mt-2 leading-relaxed">
            You have completed the Exo-Luna investigation and submitted your feasibility report.
          </p>
        </div>
      </div>

      {/* Review What Students Learned & Closing Message */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
        <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl space-y-3">
          <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">What You Discovered</h4>
          <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
            During this investigation, you discovered how gravity shapes planetary systems, how orbital motion creates observable patterns, and how moons can influence the environments of their planets.
          </p>
        </div>
        <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl space-y-3">
          <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">Closing Reflection</h4>
          <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
            The exploration of space depends on scientists who can observe, analyze evidence, and make informed decisions. Your work as a planetary researcher contributes to humanity's understanding of worlds beyond Earth.
          </p>
        </div>
      </div>

      {/* Reflection Prompts */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4">
        <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-indigo-600" /> Reflection &amp; Inquiry Synthesis
        </h4>
        <p className="text-xs text-slate-500">
          Consider these guiding reflection questions as you finalize your academic notes or share findings with colleagues:
        </p>
        <ul className="list-decimal pl-5 space-y-3 text-xs md:text-sm text-slate-700 font-sans">
          <li className="pl-1">
            <span className="font-semibold text-slate-950">How did your understanding of the Moon change after completing this investigation?</span>
          </li>
          <li className="pl-1">
            <span className="font-semibold text-slate-950">Which scientific factor would be most important when deciding whether to colonize a planet with a moon?</span>
          </li>
          <li className="pl-1">
            <span className="font-semibold text-slate-950">How can simulations and digital resources help scientists study places humans cannot easily visit?</span>
          </li>
        </ul>
      </div>

      {/* printable report wrapper */}
      <div className="space-y-6">
        
        {/* Report submission validation */}
        {missionReportSubmitted ? (
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden" id="printable-mission-dossier">
            {/* Report Header */}
            <div className="bg-slate-900 text-white p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-indigo-600/20 text-indigo-400 rounded-lg border border-indigo-500/30">
                  <Clipboard className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-sans text-base font-bold text-slate-100">Exo-Luna Planetary Feasibility Report</h4>
                  <p className="text-xs text-slate-400 font-mono">Scientific Suitability &amp; Feasibility Assessment</p>
                </div>
              </div>
              
              <button
                onClick={handlePrint}
                className="px-4 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs rounded-lg shadow-sm flex items-center gap-1.5 transition-colors focus:outline-none print:hidden"
              >
                <Printer className="w-3.5 h-3.5" /> Print Report
              </button>
            </div>

            <div className="p-6 md:p-8 space-y-6 text-slate-700 text-xs md:text-sm">
              {/* Meta information */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-b border-slate-100 pb-5 text-left font-sans">
                <div>
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">Student Name</span>
                  <span className="font-bold text-slate-800">{details.studentName || 'Not Provided'}</span>
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">Target Planet</span>
                  <span className="font-bold text-indigo-600 font-mono uppercase">{missionTargetName}</span>
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">Academic Grade</span>
                  <span className="font-bold text-emerald-600">{totalPoints} / 16 Points</span>
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">Report Status</span>
                  <span className="inline-flex items-center gap-1 font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 mt-0.5">
                    <ShieldCheck className="w-3 h-3" /> REPORT COMPLETED
                  </span>
                </div>
              </div>

              {/* Report sections */}
              <div className="space-y-5 text-left">
                {/* Part 1 */}
                <div className="space-y-1 bg-slate-50 p-4 rounded-lg border border-slate-100">
                  <h5 className="font-bold text-slate-900 flex items-center gap-1.5 uppercase text-xs tracking-wider border-b border-slate-200/60 pb-1 mb-2">
                    <span className="w-4 h-4 rounded-full bg-slate-200 text-slate-800 text-[10px] font-mono flex items-center justify-center">1</span>
                    Part 1: Gravity, Orbits &amp; Tidal Lock Predictions
                  </h5>
                  <p className="text-slate-700 leading-relaxed font-sans italic">
                    "{missionTidalSummary}"
                  </p>
                  <div className="mt-2 text-[10px] text-slate-400 font-mono">
                    - Lock Prediction Explanation: <span className="text-slate-600 block mt-0.5 font-sans">"{activity1Prediction || 'Pending'}"</span>
                  </div>
                  {activity1Evidence && (
                    <div className="mt-3 border border-slate-200 rounded overflow-hidden max-w-[180px] bg-white p-1">
                      <img src={activity1Evidence} alt="Activity 1 Evidence" className="w-full h-auto max-h-[100px] object-cover" />
                    </div>
                  )}
                </div>

                {/* Part 2 */}
                <div className="space-y-1 bg-slate-50 p-4 rounded-lg border border-slate-100">
                  <h5 className="font-bold text-slate-900 flex items-center gap-1.5 uppercase text-xs tracking-wider border-b border-slate-200/60 pb-1 mb-2">
                    <span className="w-4 h-4 rounded-full bg-slate-200 text-slate-800 text-[10px] font-mono flex items-center justify-center">2</span>
                    Part 2: Light Cycle &amp; Hemispherical Perspective Shift
                  </h5>
                  <p className="text-slate-700 leading-relaxed font-sans italic">
                    "{missionPhasesSummary}"
                  </p>
                  <div className="mt-2 text-[10px] text-slate-400 font-mono space-y-1">
                    <div>- Q1 Bright Angle Vector: <span className="font-bold text-slate-600">{activity2BrightSide || 'Pending'}</span></div>
                    <div>- Q2 Hemisphere Assessment: <span className="font-bold text-slate-600">{activity2Hemisphere || 'Pending'}</span></div>
                  </div>
                </div>

                {/* Part 3 */}
                <div className="space-y-1 bg-slate-50 p-4 rounded-lg border border-slate-100">
                  <h5 className="font-bold text-slate-900 flex items-center gap-1.5 uppercase text-xs tracking-wider border-b border-slate-200/60 pb-1 mb-2">
                    <span className="w-4 h-4 rounded-full bg-slate-200 text-slate-800 text-[10px] font-mono flex items-center justify-center">3</span>
                    Part 3: Ray Tracing, Umbras &amp; Eclipse Frequency
                  </h5>
                  <p className="text-slate-700 leading-relaxed font-sans italic">
                    "{missionEclipseSummary}"
                  </p>
                  <div className="mt-2 text-[10px] text-slate-400 font-mono space-y-2">
                    <div>- Comparative Literature Research: <span className="text-slate-600 italic block mt-0.5 font-sans">"{activity3CompareExplain || 'Pending'}"</span></div>
                    <div>- Solar Energy Systems Impact: <span className="text-slate-600 italic block mt-0.5 font-sans">"{activity3SolarEffect || 'Pending'}"</span></div>
                  </div>
                  {activity3Screenshot && (
                    <div className="mt-3 border border-slate-200 rounded overflow-hidden max-w-[180px] bg-slate-900 p-1">
                      <img src={activity3Screenshot} alt="Eclipse Diagram Screenshot" className="w-full h-auto max-h-[100px] object-contain" />
                    </div>
                  )}
                </div>

                {/* Part 4 */}
                <div className="space-y-1 bg-slate-50 p-4 rounded-lg border border-slate-100">
                  <h5 className="font-bold text-slate-900 flex items-center gap-1.5 uppercase text-xs tracking-wider border-b border-slate-200/60 pb-1 mb-2">
                    <span className="w-4 h-4 rounded-full bg-slate-200 text-slate-800 text-[10px] font-mono flex items-center justify-center">4</span>
                    Part 4: Axial Stability &amp; Surface Reconnaissance
                  </h5>
                  <p className="text-slate-700 leading-relaxed font-sans italic">
                    "{missionHabitabilitySummary}"
                  </p>
                  <div className="mt-2 text-[10px] text-slate-400 font-mono">
                    - Spaceflight History Reflection: <span className="text-slate-600 block mt-0.5 font-sans">"{activity4Reflection || 'Pending'}"</span>
                  </div>
                </div>

                {/* Part 5 */}
                <div className="space-y-1 bg-slate-50 p-4 rounded-lg border border-indigo-200 bg-indigo-50/20">
                  <h5 className="font-bold text-indigo-950 flex items-center gap-1.5 uppercase text-xs tracking-wider border-b border-indigo-200 pb-1 mb-2">
                    <span className="w-4 h-4 rounded-full bg-indigo-600 text-white text-[10px] font-mono flex items-center justify-center">5</span>
                    Part 5: Final Colonization Recommendation
                  </h5>
                  <div className="text-xs font-semibold uppercase tracking-wider text-indigo-700 mb-1">
                    Decision: {
                      missionFinalRecommendation === 'approve' ? '☑ Approve Colonization' :
                      missionFinalRecommendation === 'precautions' ? '☑ Approve with Precautions' :
                      missionFinalRecommendation === 'more_research' ? '☑ More Research Required' :
                      'Pending'
                    }
                  </div>
                  <p className="text-slate-700 leading-relaxed font-sans italic">
                    "{missionFinalJustification || 'No justification provided.'}"
                  </p>
                </div>
              </div>

              {/* Institutional Signoff */}
              <div className="mt-8 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-[10px] text-slate-400 font-mono">
                <span>COURSE: PLANETARY MECHANICS AND CELESTIAL DYNAMICS</span>
                <span className="mt-1 sm:mt-0 uppercase">UNIVERSIDAD ESTATAL DE MILAGRO &copy; 2026</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-6 bg-amber-50 rounded-xl border border-amber-200 text-amber-800 flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div className="text-xs md:text-sm space-y-2 text-left">
              <strong className="block font-bold">FEASIBILITY REPORT PENDING SUBMISSION</strong>
              <p>
                To generate and print your completed feasibility report, please finalize and submit your work.
              </p>
              <p className="font-semibold text-amber-900">
                Please navigate to the <strong>Process</strong> tab, complete and submit your final report in <strong>Activity 5</strong> at the bottom of the page to unlock your printable report here.
              </p>
            </div>
          </div>
        )}

      </div>

    </div>
  );
}
