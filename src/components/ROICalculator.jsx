import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './ROICalculator.css';

export default function ROICalculator() {
  const [dailyQuotes, setDailyQuotes] = useState(50);
  const [minutesPerQuote, setMinutesPerQuote] = useState(30);
  const ref = useScrollAnimation();

  const hoursSavedDay = ((dailyQuotes * minutesPerQuote) / 60).toFixed(1);
  const hoursSavedMonth = (hoursSavedDay * 22).toFixed(0);
  const monthlySavings = (hoursSavedMonth * 35).toLocaleString();

  return (
    <section className="roi-section" id="roi-calculator" ref={ref}>
      <div className="section-header scroll-fade-in">
        <span className="badge">ROI Calculator</span>
        <h2>See Your Savings</h2>
        <p>Enter your daily volume and see how much time and money XAIVON can save your team.</p>
      </div>
      <div className="roi-container glass-card">
        <div className="roi-inputs">
          <div className="roi-input-group">
            <label>Daily Quote Requests</label>
            <input type="range" min="10" max="200" value={dailyQuotes} onChange={(e) => setDailyQuotes(Number(e.target.value))} />
            <div className="roi-value">{dailyQuotes}</div>
          </div>
          <div className="roi-input-group">
            <label>Minutes per Quote (Manual)</label>
            <input type="range" min="10" max="60" value={minutesPerQuote} onChange={(e) => setMinutesPerQuote(Number(e.target.value))} />
            <div className="roi-value">{minutesPerQuote} min</div>
          </div>
        </div>
        <div className="roi-results">
          <div className="glass-card roi-result-card">
            <div className="result-number text-gradient-brand">{hoursSavedDay}</div>
            <div className="result-label">Hours Saved / Day</div>
          </div>
          <div className="glass-card roi-result-card">
            <div className="result-number text-gradient-brand">{hoursSavedMonth}</div>
            <div className="result-label">Hours Saved / Month</div>
          </div>
          <div className="glass-card roi-result-card">
            <div className="result-number text-gradient-brand">${monthlySavings}</div>
            <div className="result-label">Estimated Monthly Savings</div>
          </div>
        </div>
      </div>
    </section>
  );
}
