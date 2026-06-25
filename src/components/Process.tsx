import React from 'react';
import { Compass, HelpCircle, Upload, Eye, ExternalLink, Globe, BookOpen, PenTool, CheckCircle, Radio, Clipboard, Anchor, Moon, Sun, ShieldCheck } from 'lucide-react';
import MoonExperiment from './MoonExperiment';
import EclipseSandbox, { EclipseElement } from './EclipseSandbox';

interface ProcessProps {
  activity1Evidence: string | null;
  onActivity1EvidenceChange: (val: string | null) => void;
  activity1Prediction: string;
  onActivity1PredictionChange: (val: string) => void;
  activity2BrightSide: string;
  onActivity2BrightSideChange: (val: string) => void;
  activity2Hemisphere: string;
  onActivity2HemisphereChange: (val: string) => void;
  sandboxElements: EclipseElement[];
  onSandboxElementsChange: (elements: EclipseElement[]) => void;
  activity3CompareExplain: string;
  onActivity3CompareExplainChange: (val: string) => void;
  activity3SolarEffect: string;
  onActivity3SolarEffectChange: (val: string) => void;
  activity3Screenshot: string | null;
  onActivity3ScreenshotChange: (val: string | null) => void;
  activity4Reflection: string;
  onActivity4ReflectionChange: (val: string) => void;

  // Activity 5: Final Mission Synthesis Report States
  missionTargetName: string;
  onMissionTargetNameChange: (val: string) => void;
  missionTidalSummary: string;
  onMissionTidalSummaryChange: (val: string) => void;
  missionPhasesSummary: string;
  onMissionPhasesSummaryChange: (val: string) => void;
  missionEclipseSummary: string;
  onMissionEclipseSummaryChange: (val: string) => void;
  missionHabitabilitySummary: string;
  onMissionHabitabilitySummaryChange: (val: string) => void;
  missionFinalRecommendation: string;
  onMissionFinalRecommendationChange: (val: string) => void;
  missionFinalJustification: string;
  onMissionFinalJustificationChange: (val: string) => void;
  missionReportSubmitted: boolean;
  onMissionReportSubmittedChange: (val: boolean) => void;
}

export default function Process({
  activity1Evidence,
  onActivity1EvidenceChange,
  activity1Prediction,
  onActivity1PredictionChange,
  activity2BrightSide,
  onActivity2BrightSideChange,
  activity2Hemisphere,
  onActivity2HemisphereChange,
  sandboxElements,
  onSandboxElementsChange,
  activity3CompareExplain,
  onActivity3CompareExplainChange,
  activity3SolarEffect,
  onActivity3SolarEffectChange,
  activity3Screenshot,
  onActivity3ScreenshotChange,
  activity4Reflection,
  onActivity4ReflectionChange,

  // Activity 5 Props
  missionTargetName,
  onMissionTargetNameChange,
  missionTidalSummary,
  onMissionTidalSummaryChange,
  missionPhasesSummary,
  onMissionPhasesSummaryChange,
  missionEclipseSummary,
  onMissionEclipseSummaryChange,
  missionHabitabilitySummary,
  onMissionHabitabilitySummaryChange,
  missionFinalRecommendation,
  onMissionFinalRecommendationChange,
  missionFinalJustification,
  onMissionFinalJustificationChange,
  missionReportSubmitted,
  onMissionReportSubmittedChange,
}: ProcessProps) {
  const [activity3DragOver, setActivity3DragOver] = React.useState(false);

  // For Interactive Mock File Upload
  const handleEvidenceUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        onActivity1EvidenceChange(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleActivity3Upload = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      onActivity3ScreenshotChange(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleActivity3FileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleActivity3Upload(e.target.files[0]);
    }
  };

  const handleReportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onMissionReportSubmittedChange(true);
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 space-y-12">
      
      {/* Title block */}
      <div className="border-b-2 border-indigo-100 pb-4">
        <h2 className="font-sans text-2xl md:text-3xl font-bold text-slate-800 flex items-center gap-2">
          <Compass className="w-7 h-7 text-indigo-600" /> The Process
        </h2>
        <p className="text-slate-500 text-sm mt-1">
          Follow the structured scientific steps below. Each activity collects evidence for your final report.
        </p>
      </div>

      {/* ACTIVITY 1: ROTATION LOCKING & OCEANIC TIDES */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <Anchor className="w-5 h-5 text-indigo-600" />
            <h3 className="font-sans text-lg md:text-xl font-bold text-slate-800">
              Activity 1: Gravity, Rotation Locking &amp; Oceanic Tides
            </h3>
          </div>
          <span className="text-[10px] font-mono bg-slate-100 text-slate-600 px-2 py-0.5 rounded uppercase font-bold">
            Evidence Pkg 1
          </span>
        </div>

        {/* Narrative & Scientific Mission */}
        <div className="text-slate-700 text-sm leading-relaxed space-y-3 font-sans bg-slate-50/80 p-4 rounded-lg border border-slate-100">
          <h4 className="font-semibold text-slate-800 flex items-center gap-1.5 text-xs uppercase tracking-wider text-slate-500">
            Field Briefing: Mechanics of the Lock
          </h4>
          <p>
            When a moon rotates once on its axis in the exact same time it takes to complete one orbit around its planet, it is <strong>tidally locked</strong>. We only ever see one hemisphere of Earth's Moon due to this synchronous rotation. Furthermore, the moon's gravity pulls on oceans, creating tidal bulges. To predict if Exo-Luna will lock and how Kepler-Prime's tides will behave:
          </p>
          <ol className="list-decimal pl-5 space-y-1.5 text-slate-600 text-xs">
            <li>Interact with the <strong>Moon Tidal Locking Experiment</strong> simulator below. Toggle synchronization on and off to observe alignment.</li>
            <li>Use the specialized research websites below to understand gravitational pulls and spring vs. neap tides.</li>
            <li>Take a screenshot of your successful synchronous orbit, then upload it into the artifact area as scientific proof.</li>
          </ol>
        </div>

        {/* Required Resources for Activity 1 */}
        <div className="p-4 bg-indigo-50/50 rounded-xl border border-indigo-100/50 space-y-3">
          <h4 className="text-xs font-bold text-indigo-800 uppercase tracking-wider">Required Inquiry Resources</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a
              href="https://beltoforion.de/en/tides/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 bg-white border border-slate-200 hover:border-indigo-400 hover:shadow-sm rounded-lg transition-all group"
            >
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">Tides Explained Tutorial</span>
                <span className="text-[10px] text-slate-400">Gravitational cycles &amp; orbit dynamics</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-500" />
            </a>
            <a
              href="https://cdn.oceanservice.noaa.gov/oceanserviceprod/facts/springtide.gif"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 bg-white border border-slate-200 hover:border-indigo-400 hover:shadow-sm rounded-lg transition-all group"
            >
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">Spring &amp; Neap Tides Bulge GIF</span>
                <span className="text-[10px] text-slate-400">Visualizing tidal bulge alignments</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-500" />
            </a>
          </div>
        </div>

        {/* The Simulator */}
        <MoonExperiment />

        {/* Student Artifact Submission (Screenshot) */}
        <div className="p-4 border border-slate-200 rounded-lg bg-slate-50/50">
          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
            Artifact Upload: Tidal Sync Verification
          </label>

          {activity1Evidence ? (
            <div className="relative rounded-lg overflow-hidden border border-slate-300 max-w-md mx-auto">
              <img src={activity1Evidence} alt="Student Evidence" className="w-full h-auto" />
              <button
                onClick={() => onActivity1EvidenceChange(null)}
                className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded text-xs font-semibold focus:outline-none"
              >
                Clear Submission
              </button>
            </div>
          ) : (
            <div className="text-center py-6 border-2 border-dashed border-slate-300 rounded bg-white">
              <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
              <p className="text-xs text-slate-600 font-semibold mb-1">
                Drag and drop your tidal locking screenshot here
              </p>
              <p className="text-[10px] text-slate-400 mb-3">
                PNG or JPG (upload verified screenshot of perfect synchronization)
              </p>
              <label className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded font-semibold text-xs cursor-pointer inline-block transition-colors">
                Browse File
                <input
                  id="evidence-upload-input"
                  type="file"
                  accept="image/*"
                  onChange={handleEvidenceUpload}
                  className="hidden"
                />
              </label>
            </div>
          )}
        </div>

        {/* Prediction Task */}
        <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl space-y-4">
          <label className="block text-xs font-semibold text-slate-700 leading-normal">
            What relationship between orbital period and rotation period causes tidal locking? Record the evidence you observed from the simulator.
          </label>
          <textarea
            value={activity1Prediction}
            onChange={(e) => onActivity1PredictionChange(e.target.value)}
            className="w-full p-3 rounded-lg border border-slate-200 text-xs bg-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all placeholder:text-slate-400"
            placeholder="Type your answer here..."
            rows={3}
          />
        </div>
      </div>

      {/* ACTIVITY 2: MOON PHASES & HEMISPHERE PERSPECTIVES */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-indigo-600" />
            <h3 className="font-sans text-lg md:text-xl font-bold text-slate-800">
              Activity 2: Moon Phases &amp; Hemisphere Perspectives
            </h3>
          </div>
          <span className="text-[10px] font-mono bg-slate-100 text-slate-600 px-2 py-0.5 rounded uppercase font-bold">
            Evidence Pkg 2
          </span>
        </div>

        {/* Narrative & Scientific Mission */}
        <div className="text-slate-700 text-sm leading-relaxed space-y-3 font-sans bg-slate-50/80 p-4 rounded-lg border border-slate-100">
          <h4 className="font-semibold text-slate-800 flex items-center gap-1.5 text-xs uppercase tracking-wider text-slate-500">
            Field Briefing: Orbit &amp; Illumination Curves
          </h4>
          <p>
            As a moon orbits its planet, the fraction of its lit surface visible to an observer changes. This produces the eight distinct lunar phases. Interestingly, an observer's location on the planet's hemispheres changes whether the crescent points left or right. Review these guides and simulations to establish lighting parameters for the future Kepler-Prime colony:
          </p>
          <ol className="list-decimal pl-5 space-y-1.5 text-slate-600 text-xs">
            <li>Open the <strong>PBS Learning Media Moon Phases Model</strong> to examine 3D phase angles.</li>
            <li>Consult NASA's 3D Lunar portal to view the active phase orientation. Refer to our Oreo instruction for hands-on modeling.</li>
            <li>Compare orientations and answer the hemisphere perspective questions below.</li>
          </ol>
        </div>

        {/* Required Resources for Activity 2 */}
        <div className="p-4 bg-indigo-50/50 rounded-xl border border-indigo-100/50 space-y-3">
          <h4 className="text-xs font-bold text-indigo-800 uppercase tracking-wider">Required Inquiry Resources</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a
              href="https://spaceplace.nasa.gov/oreo-moon/en/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 bg-white border border-slate-200 hover:border-indigo-400 hover:shadow-sm rounded-lg transition-all group"
            >
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">NASA Oreo Moon Phases</span>
                <span className="text-[10px] text-slate-400">Make Oreo Moon Phases! Interactive lab guide</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-500" />
            </a>
            <a
              href="https://solarsystem.nasa.gov/__webgl/5/moon_lunar/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 bg-white border border-slate-200 hover:border-indigo-400 hover:shadow-sm rounded-lg transition-all group"
            >
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">NASA 3D Moon Phase WebGL Tool</span>
                <span className="text-[10px] text-slate-400">See current phase and plan future views</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-500" />
            </a>
          </div>
        </div>

        {/* Comparative Materials Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* PBS Simulator Link Image */}
          <div className="flex flex-col space-y-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              1. Interactive Simulator (Click to Open)
            </span>
            <a
              href="https://www.pbslearningmedia.org/resource/buac19-35-sci-ess-earthsunmoon35model/moon-phases-simulation-viewed-from-earth-and-space/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-xl border border-slate-200 shadow-md transition-all duration-300 hover:shadow-xl hover:border-indigo-400"
            >
              <img
                src="/image_011.png.png"
                alt="PBS Moon Phases Simulator Screenshot"
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-indigo-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                <ExternalLink className="w-8 h-8 text-white mb-2 drop-shadow" />
                <span className="text-white font-bold text-sm drop-shadow">
                  Open Interactive PBS Simulator
                </span>
                <span className="text-indigo-200 text-xs mt-1 drop-shadow">
                  Opens in a new browser tab
                </span>
              </div>
            </a>
          </div>

          {/* Hemisphere Guide Image */}
          <div className="flex flex-col space-y-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              2. Hemisphere Perspective Guide
            </span>
            <div className="rounded-xl border border-slate-200 overflow-hidden bg-white shadow-md p-2">
              <img
                src="/image_002.png.png"
                alt="Moon phases viewed from Northern vs Southern vs Equator Hemispheres"
                className="w-full h-auto object-contain rounded-lg"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Dynamic Interactive Logbook Questions */}
        <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl space-y-6">
          <h4 className="font-sans text-sm font-bold text-slate-800 border-b border-slate-200 pb-2 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-indigo-600" /> Digital Logbook Answers
          </h4>

          {/* Question 1 */}
          <div className="space-y-2.5">
            <label className="block text-xs font-semibold text-slate-700 leading-normal">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 text-[10px] font-bold mr-1.5">Q1</span>
              Where is the bright side of Exo-Luna pointing relative to its star?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                "Towards the Star (always lit by solar rays)",
                "Towards the Planet (always reflecting back to us)",
                "Away from both Planet and the Star",
                "It shifts randomly depending on the orbital arc",
              ].map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => onActivity2BrightSideChange(option)}
                  className={`p-3 text-left rounded-lg text-xs font-medium border transition-all ${
                    activity2BrightSide === option
                      ? 'bg-indigo-50 border-indigo-500 text-indigo-900 shadow-sm font-bold'
                      : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            <textarea
              value={activity2BrightSide}
              onChange={(e) => onActivity2BrightSideChange(e.target.value)}
              className="w-full p-3 rounded-lg border border-slate-200 text-xs bg-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all placeholder:text-slate-400"
              placeholder="Type your answer here..."
              rows={2}
            />
          </div>

          {/* Question 2 */}
          <div className="space-y-2.5">
            <label className="block text-xs font-semibold text-slate-700 leading-normal">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 text-[10px] font-bold mr-1.5">Q2</span>
              Describe how the appearance of Exo-Luna changes from different observation points on Kepler-Prime.
            </label>
            <textarea
              value={activity2Hemisphere}
              onChange={(e) => onActivity2HemisphereChange(e.target.value)}
              className="w-full p-3 rounded-lg border border-slate-200 text-xs bg-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all placeholder:text-slate-400"
              placeholder="Type your answer here..."
              rows={3}
            />
          </div>
        </div>
      </div>

      {/* ACTIVITY 3: ECLIPSE RAY DIAGRAMS & FREQUENCY RESEARCH */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-8">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <PenTool className="w-5 h-5 text-indigo-600" />
            <h3 className="font-sans text-lg md:text-xl font-bold text-slate-800">
              Activity 3: Drawing Eclipse Ray Diagrams &amp; Frequency Research
            </h3>
          </div>
          <span className="text-[10px] font-mono bg-slate-100 text-slate-600 px-2 py-0.5 rounded uppercase font-bold">
            Evidence Pkg 3
          </span>
        </div>

        {/* Step 1: Research Reading */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold font-mono">1</span>
            <h4 className="font-sans text-sm font-bold text-slate-800 uppercase tracking-wider">
              Step 1: Required Research Reading &amp; Celestial Diagrams
            </h4>
          </div>
          
          <div className="text-slate-600 text-xs md:text-sm leading-relaxed space-y-2 bg-slate-50/80 p-4 rounded-xl border border-slate-100">
            <p>
              An eclipse occurs when one celestial body moves into the shadow of another. Read these authoritative science resources and watch the NASA explainer to trace detailed shadow angles and understand eclipse frequency:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
            <a
              href="https://letstalkscience.ca/educational-resources/backgrounders/get-ready-a-total-solar-eclipse"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col p-4 bg-white border border-slate-200 hover:border-indigo-400 hover:shadow-sm rounded-xl transition-all group text-left"
            >
              <span className="text-xs font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">Let's Talk Science</span>
              <span className="text-[10px] text-slate-400 mt-1 leading-normal">Educational guide with solar/lunar eclipse diagrams and shadow paths.</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-300 mt-auto pt-2 self-end group-hover:text-indigo-500" />
            </a>
            
            <a
              href="https://spaceplace.nasa.gov/eclipses/en/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col p-4 bg-white border border-slate-200 hover:border-indigo-400 hover:shadow-sm rounded-xl transition-all group text-left"
            >
              <span className="text-xs font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">NASA Space Place Eclipses</span>
              <span className="text-[10px] text-slate-400 mt-1 leading-normal">Interactive explanations of lunar and solar shadow alignments.</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-300 mt-auto pt-2 self-end group-hover:text-indigo-500" />
            </a>

            <a
              href="https://www.youtube.com/watch?v=T_uUHCbZJmU&t=40s"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col p-4 bg-white border border-slate-200 hover:border-indigo-400 hover:shadow-sm rounded-xl transition-all group text-left"
            >
              <span className="text-xs font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">NASA Eclipse Video explainer</span>
              <span className="text-[10px] text-slate-400 mt-1 leading-normal">WATCH: Explains why we don't have a solar eclipse every month.</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-300 mt-auto pt-2 self-end group-hover:text-indigo-500" />
            </a>
          </div>
        </div>

        {/* Step 2: Compare Explanations */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold font-mono">2</span>
            <h4 className="font-sans text-sm font-bold text-slate-800 uppercase tracking-wider">
              Step 2: Contrast the Scientific Explanations
            </h4>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl space-y-4">
            <label className="block text-xs font-semibold text-slate-700 leading-normal">
              Explain how orbital alignment, shadow geometry, and the Moon's orbital tilt determine when eclipses occur.
            </label>
            <textarea
              value={activity3CompareExplain}
              onChange={(e) => onActivity3CompareExplainChange(e.target.value)}
              className="w-full p-4 rounded-xl border border-slate-200 text-xs bg-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all placeholder:text-slate-400"
              placeholder="Type your answer here..."
              rows={4}
            />
          </div>
        </div>

        {/* Step 3: Drawing Eclipse Ray Diagrams */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold font-mono">3</span>
            <h4 className="font-sans text-sm font-bold text-slate-800 uppercase tracking-wider">
              Step 3: Draw a Lunar or Solar Eclipse Diagram
            </h4>
          </div>
          
          <div className="text-slate-600 text-xs md:text-sm leading-relaxed space-y-2 bg-slate-50/80 p-4 rounded-xl border border-slate-100">
            <p>
              Use the Interactive Space Sandbox below to construct either a <strong>Solar Eclipse</strong> or a <strong>Lunar Eclipse</strong> ray diagram. Align the Sun, Earth, and Moon correctly, select Straight Lines from the drawing tools, and trace light paths from the margins of the Sun to map the dark <strong>umbra</strong> and lighter <strong>penumbra</strong> shadow regions!
            </p>
          </div>

          <EclipseSandbox elements={sandboxElements} onChange={onSandboxElementsChange} />
        </div>

        {/* Step 4: Screenshot & Upload */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold font-mono">4</span>
            <h4 className="font-sans text-sm font-bold text-slate-800 uppercase tracking-wider">
              Step 4: Take a Screenshot &amp; Upload Evidence
            </h4>
          </div>

          <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
            Take a screenshot of your completed vector diagram from the playground above and upload it below as your final portfolio evidence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Interactive Drag and Drop area */}
            <div
              className={`p-6 border-2 border-dashed rounded-xl flex flex-col items-center justify-center text-center cursor-pointer transition-all ${
                activity3DragOver
                  ? 'border-indigo-500 bg-indigo-50/40'
                  : 'border-slate-200 bg-slate-50/50 hover:bg-slate-100/40'
              }`}
              onDragOver={(e) => {
                e.preventDefault();
                setActivity3DragOver(true);
              }}
              onDragLeave={() => setActivity3DragOver(false)}
              onDrop={(e) => {
                e.preventDefault();
                setActivity3DragOver(false);
                if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                  handleActivity3Upload(e.dataTransfer.files[0]);
                }
              }}
              onClick={() => document.getElementById('activity3-file-picker')?.click()}
            >
              <input
                id="activity3-file-picker"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleActivity3FileChange}
              />
              <Upload className="w-8 h-8 text-indigo-500 mb-2" />
              <p className="text-xs font-bold text-slate-800">
                Drag &amp; Drop screenshot here, or <span className="text-indigo-600 underline">browse</span>
              </p>
              <p className="text-[10px] text-slate-400 mt-1">Supports PNG, JPG, or SVG up to 5MB</p>
            </div>

            {/* Screenshot Preview */}
            <div className="rounded-xl border border-slate-200 p-4 bg-slate-50 flex flex-col items-center justify-center text-center min-h-[140px]">
              {activity3Screenshot ? (
                <div className="space-y-3 w-full">
                  <div className="relative inline-block border border-slate-300 rounded overflow-hidden max-w-[200px] bg-slate-900 shadow-sm mx-auto">
                    <img
                      src={activity3Screenshot}
                      alt="Uploaded Diagram Screenshot Preview"
                      className="max-h-[100px] object-contain rounded"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => onActivity3ScreenshotChange(null)}
                      className="px-2.5 py-1 text-[10px] font-bold text-red-600 bg-red-50 hover:bg-red-100 border border-red-200 rounded transition-colors"
                    >
                      Delete Image
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-slate-400 text-xs">
                  <p className="italic">No diagram evidence submitted yet.</p>
                  <p className="text-[10px] text-slate-400/80 mt-1">Complete your sandbox drawing, capture it, and upload above.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Step 5: Solar Energy Implications */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold font-mono">5</span>
            <h4 className="font-sans text-sm font-bold text-slate-800 uppercase tracking-wider">
              Step 5: Solar Energy Systems Planning
            </h4>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl space-y-4">
            <label className="block text-xs font-semibold text-slate-700 leading-normal">
              Explain how eclipse frequency could affect the planning of solar energy systems for the colony on Kepler-Prime.
            </label>
            <textarea
              value={activity3SolarEffect}
              onChange={(e) => onActivity3SolarEffectChange(e.target.value)}
              className="w-full p-4 rounded-xl border border-slate-200 text-xs bg-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all placeholder:text-slate-400"
              placeholder="Type your answer here..."
              rows={3}
            />
          </div>
        </div>
      </div>

      {/* ACTIVITY 4: LUNAR ENVIRONMENT, EXPLORATION & PLANETARY STABILITY */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-indigo-600" />
            <h3 className="font-sans text-lg md:text-xl font-bold text-slate-800">
              Activity 4: Lunar Environment, Exploration &amp; Planetary Stability
            </h3>
          </div>
          <span className="text-[10px] font-mono bg-slate-100 text-slate-600 px-2 py-0.5 rounded uppercase font-bold">
            Evidence Pkg 4
          </span>
        </div>

        {/* Narrative & Scientific Mission */}
        <div className="text-slate-700 text-sm leading-relaxed space-y-3 font-sans bg-slate-50/80 p-4 rounded-lg border border-slate-100">
          <h4 className="font-semibold text-slate-800 flex items-center gap-1.5 text-xs uppercase tracking-wider text-slate-500">
            Field Briefing: Lunar Characteristics, Exploration &amp; Planetary Stability
          </h4>
          <p>
            Earth's Moon influences Earth's axial stability over long periods and has shaped the geological history of our planet. Studying its surface helps scientists understand planetary formation, impacts, and future exploration challenges. We must research how humans have explored this rugged environment in the past to prepare our landing teams. Read the NASA databases and watch the original 1969 landing footage to answer:
          </p>
          <ol className="list-decimal pl-5 space-y-1.5 text-slate-600 text-xs">
            <li>Explore the Moon's surface topography using the NASA Moon Trek 3D portal.</li>
            <li>Watch the historic footage of the Apollo 11 lunar landing and read the official mission logs.</li>
            <li>Analyze what evidence from Earth's Moon exploration helps scientists understand the challenges of exploring another moon.</li>
          </ol>
        </div>

        {/* Required Resources for Activity 4 */}
        <div className="p-4 bg-indigo-50/50 rounded-xl border border-indigo-100/50 space-y-3">
          <h4 className="text-xs font-bold text-indigo-800 uppercase tracking-wider">Required Inquiry Resources</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <a
              href="https://science.nasa.gov/moon/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 bg-white border border-slate-200 hover:border-indigo-400 hover:shadow-sm rounded-lg transition-all group"
            >
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">NASA's Moon Portal</span>
                <span className="text-[10px] text-slate-400">Official lunar facts, science, and structures</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-500" />
            </a>
            <a
              href="https://trek.nasa.gov/moon/#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 bg-white border border-slate-200 hover:border-indigo-400 hover:shadow-sm rounded-lg transition-all group"
            >
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">NASA Moon Trek Explorer</span>
                <span className="text-[10px] text-slate-400">Interactive 3D lunar terrain mapping tool</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-500" />
            </a>
            <a
              href="https://www.youtube.com/watch?v=hzApsIPHRwo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 bg-white border border-slate-200 hover:border-indigo-400 hover:shadow-sm rounded-lg transition-all group"
            >
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">VIDEO: Apollo 11 Landing</span>
                <span className="text-[10px] text-slate-400">Original historic footage from July 20, 1969</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-500" />
            </a>
            <a
              href="https://www.nasa.gov/mission/apollo-11/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 bg-white border border-slate-200 hover:border-indigo-400 hover:shadow-sm rounded-lg transition-all group"
            >
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">NASA Apollo 11 Mission Page</span>
                <span className="text-[10px] text-slate-400">Official scientific results and archives</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-500" />
            </a>
          </div>
          <a
            href="https://www.nationalgeographic.com/science/article/moon-facts"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3 bg-white border border-slate-200 hover:border-indigo-400 hover:shadow-sm rounded-lg transition-all group mt-2"
          >
            <div className="flex flex-col text-left">
              <span className="text-xs font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">National Geographic: Moon Facts</span>
              <span className="text-[10px] text-slate-400">Explores lunar origin, gravitational stabilization, and surface geology</span>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-500" />
          </a>
        </div>

        {/* Reflection Essay */}
        <div className="space-y-2">
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
            Your Reflection Essay (What evidence from Earth's Moon exploration helps scientists understand the challenges of exploring another moon?)
          </label>
          <textarea
            id="essay-reflection-textarea"
            value={activity4Reflection}
            onChange={(e) => onActivity4ReflectionChange(e.target.value)}
            className="w-full p-4 rounded-xl border border-slate-200 text-sm bg-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all placeholder:text-slate-400"
            placeholder="Type your answer here..."
            rows={6}
          />
          <div className="flex justify-between items-center text-xs text-slate-400">
            <span>Character count: {activity4Reflection.length}</span>
            <span>Recommended word count: 100+ words</span>
          </div>
        </div>
      </div>

      {/* ACTIVITY 5: COMPILING & SUBMITTING THE MISSION REPORT */}
      <div className="bg-white rounded-xl border-2 border-indigo-500 p-6 shadow-md space-y-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-20 h-20 bg-indigo-500 text-white rounded-bl-full flex items-center justify-center font-bold text-xs select-none">
          Final!
        </div>

        <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
          <Clipboard className="w-6 h-6 text-indigo-600" />
          <h3 className="font-sans text-lg md:text-xl font-bold text-slate-800">
            Activity 5: Complete &amp; Submit Exo-Luna Mission Report
          </h3>
        </div>

        <div className="text-slate-700 text-xs md:text-sm leading-relaxed space-y-3 font-sans bg-slate-50 p-4 rounded-lg border border-slate-100">
          <p>
            You have analyzed tidal locking, phase orientations, shadow eclipse geometries, and planetary defense. Now, you must <strong>synthesize</strong> these separate threads of research into the master <strong>Exo-Luna Mission Synthesis Report</strong> required by the Colonization Command.
          </p>
        </div>

        <form onSubmit={handleReportSubmit} className="space-y-5">
          {/* Target System */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              1. Designated Planet Target
            </label>
            <input
              type="text"
              value={missionTargetName}
              onChange={(e) => onMissionTargetNameChange(e.target.value)}
              className="w-full max-w-sm p-2.5 rounded-lg border border-slate-200 text-xs bg-white focus:border-indigo-500 outline-none transition-all"
              placeholder="Type your answer here..."
              required
            />
          </div>

          {/* Synthesis Part 1: Tidal Locks */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Part 1: Gravity &amp; Rotation Lock Prediction
            </label>
            <p className="text-[11px] text-slate-400">Based on your evidence, predict whether Exo-Luna will become tidally locked and explain how this could affect Kepler-Prime.</p>
            <textarea
              value={missionTidalSummary}
              onChange={(e) => onMissionTidalSummaryChange(e.target.value)}
              className="w-full p-3 rounded-lg border border-slate-200 text-xs bg-white focus:border-indigo-500 outline-none transition-all"
              placeholder="Type your answer here..."
              rows={3}
              required
            />
          </div>

          {/* Synthesis Part 2: Phases */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Part 2: Phase Cycles &amp; Colony Lighting Cycles
            </label>
            <p className="text-[11px] text-slate-400">How would these phase patterns affect colony schedules, energy use, and nighttime conditions?</p>
            <textarea
              value={missionPhasesSummary}
              onChange={(e) => onMissionPhasesSummaryChange(e.target.value)}
              className="w-full p-3 rounded-lg border border-slate-200 text-xs bg-white focus:border-indigo-500 outline-none transition-all"
              placeholder="Type your answer here..."
              rows={3}
              required
            />
          </div>

          {/* Synthesis Part 3: Eclipses */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Part 3: Eclipse Alignment &amp; Solar Array Protection
            </label>
            <p className="text-[11px] text-slate-400">Using this information, evaluate whether eclipse events could create risks for Kepler-Prime's solar energy systems.</p>
            <textarea
              value={missionEclipseSummary}
              onChange={(e) => onMissionEclipseSummaryChange(e.target.value)}
              className="w-full p-3 rounded-lg border border-slate-200 text-xs bg-white focus:border-indigo-500 outline-none transition-all"
              placeholder="Type your answer here..."
              rows={3}
              required
            />
          </div>

          {/* Synthesis Part 4: Habitability */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Part 4: Axial Stability &amp; Planetary Protection
            </label>
            <p className="text-[11px] text-slate-400">Based on this evidence, explain how Exo-Luna could influence the stability and safety of Kepler-Prime.</p>
            <textarea
              value={missionHabitabilitySummary}
              onChange={(e) => onMissionHabitabilitySummaryChange(e.target.value)}
              className="w-full p-3 rounded-lg border border-slate-200 text-xs bg-white focus:border-indigo-500 outline-none transition-all"
              placeholder="Type your answer here..."
              rows={3}
              required
            />
          </div>

          {/* Final Recommendation */}
          <div className="space-y-3 bg-indigo-50/50 p-4 rounded-xl border border-indigo-100">
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
              Final Recommendation
            </label>
            <p className="text-xs text-slate-600 leading-relaxed">
              Based on your evidence, should humanity approve colonization of Kepler-Prime? Explain your decision using evidence from all four investigations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              {[
                { id: 'approve', label: 'Approve Colonization' },
                { id: 'precautions', label: 'Approve with Precautions' },
                { id: 'more_research', label: 'More Research Required' }
              ].map((option) => (
                <label
                  key={option.id}
                  className={`flex items-center gap-2 p-3 rounded-lg border text-xs font-semibold cursor-pointer transition-all ${
                    missionFinalRecommendation === option.id
                      ? 'bg-indigo-600 border-indigo-600 text-white shadow-sm font-bold'
                      : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="final-recommendation-option"
                    value={option.id}
                    checked={missionFinalRecommendation === option.id}
                    onChange={() => onMissionFinalRecommendationChange(option.id)}
                    className="sr-only"
                    required
                  />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>

            <div className="space-y-1.5 pt-2">
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                Scientific Justification
              </label>
              <textarea
                value={missionFinalJustification}
                onChange={(e) => onMissionFinalJustificationChange(e.target.value)}
                className="w-full p-3 rounded-lg border border-slate-200 text-xs bg-white focus:border-indigo-500 outline-none transition-all"
                placeholder="Explain your decision using evidence from all four investigations..."
                rows={4}
                required
              />
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-lg shadow-sm hover:shadow transition-all flex items-center justify-center gap-1.5"
            >
              <CheckCircle className="w-4 h-4" /> Save &amp; Lock Mission Report
            </button>
          </div>
        </form>

        {/* Submission Badge status */}
        {missionReportSubmitted && (
          <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-emerald-800 flex items-center gap-3 animate-fadeIn">
            <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0" />
            <div className="text-xs">
              <strong className="block font-bold">MISSION REPORT LOCKED AND QUEUED!</strong>
              Your final synthesis report has been saved successfully in your digital portfolio. Complete your self-assessment in the <strong>Evaluation</strong> tab, then proceed to the <strong>Conclusion</strong> to print or export your complete Specialist Dossier.
            </div>
          </div>
        )}
      </div>

    </div>
  );
}
