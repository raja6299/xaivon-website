import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { trackEvent } from '../utils/tracking';
import './ROICalculator.css';

// ─── Animated Counter Hook ──────────────────────────────────────────
// Smoothly rolls a number from its previous value to the target value
function useAnimatedValue(target, duration = 600) {
  const [display, setDisplay] = useState(target);
  const frameRef = useRef(null);
  const startRef = useRef(null);
  const fromRef = useRef(target);

  useEffect(() => {
    const from = fromRef.current;
    const diff = target - from;
    if (diff === 0) return;

    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    startRef.current = null;

    const step = (timestamp) => {
      if (!startRef.current) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic for smooth deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(from + diff * eased);
      setDisplay(current);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(step);
      } else {
        fromRef.current = target;
      }
    };

    frameRef.current = requestAnimationFrame(step);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [target, duration]);

  // Keep fromRef in sync when target changes
  useEffect(() => {
    return () => { fromRef.current = display; };
  });

  return display;
}

// ─── ROI Calculator Component ───────────────────────────────────────
export default function ROICalculator() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1 });

  // ─── Slider States ────────────────────────────────────────────────
  const [manualHours, setManualHours] = useState(80);
  const [hourlyRate, setHourlyRate] = useState(45);
  const [teamSize, setTeamSize] = useState(5);

  // ─── Derived Calculations ─────────────────────────────────────────
  const AUTOMATION_RATE = 0.70; // AI automates 70% of manual work
  const WEEKS_PER_YEAR = 52;

  const currentYearlyCost = manualHours * hourlyRate * teamSize * WEEKS_PER_YEAR;
  const projectedCost = currentYearlyCost * (1 - AUTOMATION_RATE);
  const totalYearlySavings = currentYearlyCost - projectedCost;
  const hoursSavedPerYear = Math.round(manualHours * teamSize * WEEKS_PER_YEAR * AUTOMATION_RATE);

  // ─── Animated Display Values ──────────────────────────────────────
  const animatedCurrentCost = useAnimatedValue(currentYearlyCost);
  const animatedProjected = useAnimatedValue(projectedCost);
  const animatedSavings = useAnimatedValue(totalYearlySavings);
  const animatedHours = useAnimatedValue(hoursSavedPerYear);

  // ─── Currency Formatter ───────────────────────────────────────────
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(value);
  };

  // ─── Slider fill percentage (for dynamic track coloring) ─────────
  const getSliderPercent = (value, min, max) => ((value - min) / (max - min)) * 100;

  // ─── CTA Click Handler with GA4 Tracking ──────────────────────────
  const handleCtaClick = useCallback(() => {
    trackEvent('roi_calculator_cta_clicked', {
      savings_calculated: totalYearlySavings,
      manual_hours: manualHours,
      hourly_rate: hourlyRate,
      team_size: teamSize,
    });
  }, [totalYearlySavings, manualHours, hourlyRate, teamSize]);

  return (
    <section className="roi-calculator-section section" id="roi-calculator" ref={sectionRef}>
      <div className="container">

        {/* ─── Header ──────────────────────────────────────────────── */}
        <div className={`section-header reveal ${isVisible ? 'visible' : ''}`}>
          <span className="badge">
            <span className="badge-dot"></span>
            ROI Calculator
          </span>
          <h2>
            Calculate Your <span className="text-gradient-premium">AI Savings</span>
          </h2>
          <p>
            See exactly how much time and money your business loses to manual operations — and what XAIVON AI can recover.
          </p>
        </div>

        <div className={`roi-grid reveal-scale ${isVisible ? 'visible' : ''} delay-1`}>

          {/* ─── Controls Panel ─────────────────────────────────────── */}
          <div className="roi-controls glass-card">
            <h3 className="roi-card-title">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
              Your Operational Data
            </h3>
            
            {/* Slider 1: Manual Hours */}
            <div className="roi-input-group">
              <div className="roi-input-header">
                <label>Manual Hours Spent per Week</label>
                <span className="roi-value-display">{manualHours}h</span>
              </div>
              <input 
                type="range" 
                min="10" 
                max="500" 
                step="5"
                value={manualHours} 
                onChange={(e) => setManualHours(Number(e.target.value))}
                className="roi-slider"
                style={{ '--slider-percent': `${getSliderPercent(manualHours, 10, 500)}%` }}
                aria-label="Manual hours spent per week"
              />
              <div className="roi-slider-labels">
                <span>10h</span>
                <span>500h</span>
              </div>
            </div>

            {/* Slider 2: Hourly Rate */}
            <div className="roi-input-group">
              <div className="roi-input-header">
                <label>Average Hourly Rate ($)</label>
                <span className="roi-value-display">${hourlyRate}</span>
              </div>
              <input 
                type="range" 
                min="15" 
                max="150" 
                step="5"
                value={hourlyRate} 
                onChange={(e) => setHourlyRate(Number(e.target.value))}
                className="roi-slider"
                style={{ '--slider-percent': `${getSliderPercent(hourlyRate, 15, 150)}%` }}
                aria-label="Average hourly rate in dollars"
              />
              <div className="roi-slider-labels">
                <span>$15</span>
                <span>$150</span>
              </div>
            </div>

            {/* Slider 3: Team Size */}
            <div className="roi-input-group">
              <div className="roi-input-header">
                <label>Team Size</label>
                <span className="roi-value-display">{teamSize} people</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="50" 
                step="1"
                value={teamSize} 
                onChange={(e) => setTeamSize(Number(e.target.value))}
                className="roi-slider"
                style={{ '--slider-percent': `${getSliderPercent(teamSize, 1, 50)}%` }}
                aria-label="Team size"
              />
              <div className="roi-slider-labels">
                <span>1</span>
                <span>50</span>
              </div>
            </div>

            {/* Automation Badge */}
            <div className="roi-automation-badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
              AI Automation Rate: <strong>70%</strong> of manual work eliminated
            </div>
          </div>

          {/* ─── Results Panel ──────────────────────────────────────── */}
          <div className="roi-results">
            {/* Current Yearly Cost */}
            <div className="roi-result-card glass-card">
              <div className="roi-result-icon">📊</div>
              <div className="roi-result-label">Current Yearly Cost</div>
              <div className="roi-result-value roi-cost-before">{formatCurrency(animatedCurrentCost)}</div>
              <div className="roi-result-desc">What you spend annually on manual operations</div>
            </div>
            
            {/* Projected Cost with XAIVON */}
            <div className="roi-result-card glass-card">
              <div className="roi-result-icon">🤖</div>
              <div className="roi-result-label">Projected Cost with XAIVON AI</div>
              <div className="roi-result-value roi-cost-after">{formatCurrency(animatedProjected)}</div>
              <div className="roi-result-desc">After automating 70% of manual workflows</div>
            </div>

            {/* Hours Saved */}
            <div className="roi-result-card glass-card">
              <div className="roi-result-icon">⏱️</div>
              <div className="roi-result-label">Hours Saved Per Year</div>
              <div className="roi-result-value">{animatedHours.toLocaleString()}h</div>
              <div className="roi-result-desc">Time recovered for strategic work</div>
            </div>
            
            {/* Total Yearly Savings - Hero Card */}
            <div className="roi-result-card glass-card highlight-card">
              <div className="roi-highlight-glow"></div>
              <div className="roi-result-label">Total Yearly Savings</div>
              <div className="roi-result-value text-gradient-premium roi-savings-hero">
                {formatCurrency(animatedSavings)}
              </div>
              <div className="roi-result-desc">Capital unlocked for strategic growth</div>
            </div>
          </div>
        </div>

        <p className="roi-disclaimer">
          Estimates are illustrative. Actual results depend on workflow complexity and implementation scope.
        </p>

        {/* ─── CTA ─────────────────────────────────────────────────── */}
        <div className={`roi-cta-wrap reveal ${isVisible ? 'visible' : ''} delay-3`}>
          <Link 
            to="/contact" 
            className="btn btn-primary btn-lg roi-cta-btn"
            onClick={handleCtaClick}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            Unlock These Savings — Schedule a Strategy Call
          </Link>
          
          <div className="trust-indicators-row">
            <span>✓ Free Strategy Call</span>
            <span>✓ Custom ROI Projection</span>
            <span>✓ No Obligation</span>
          </div>
        </div>

      </div>
    </section>
  );
}
