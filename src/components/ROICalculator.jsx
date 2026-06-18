import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './ROICalculator.css';

export default function ROICalculator() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1 });

  // Input states
  const [quotesPerDay, setQuotesPerDay] = useState(150);
  const [employees, setEmployees] = useState(3);
  const [timePerQuote, setTimePerQuote] = useState(15); // minutes
  const [monthlyLabor, setMonthlyLabor] = useState(15000); // dollars
  const [automationRate, setAutomationRate] = useState(75);

  // Output states
  const [hoursSaved, setHoursSaved] = useState(0);
  const [costSavings, setCostSavings] = useState(0);
  const [productivityGain, setProductivityGain] = useState(0);
  const [annualROI, setAnnualROI] = useState(0);

  useEffect(() => {
    if (quotesPerDay === 0) {
      setHoursSaved(0); setCostSavings(0); setProductivityGain(0); setAnnualROI(0); return;
    }

    // Math logic
    const workDaysPerMonth = 21;
    const totalQuotesPerMonth = quotesPerDay * workDaysPerMonth;
    const totalHoursSpent = (totalQuotesPerMonth * timePerQuote) / 60;
    
    // Assuming automationRate with AI
    const calculatedHoursSaved = totalHoursSpent * (automationRate / 100);
    
    // Calculate effective hourly rate
    const totalWorkingHours = Math.max(employees * 160, 1); // Prevent div by 0
    const hourlyRate = monthlyLabor / totalWorkingHours;
    
    const monthlyCostSavings = calculatedHoursSaved * hourlyRate;
    const calculatedAnnualROI = monthlyCostSavings * 12;
    const calculatedProductivityGain = (calculatedHoursSaved / totalWorkingHours) * 100;

    // Animate numbers smoothly (simplified for immediate update, css transitions handle feel)
    setHoursSaved(Math.round(calculatedHoursSaved));
    setCostSavings(Math.round(monthlyCostSavings));
    setProductivityGain(Math.min(Math.round(calculatedProductivityGain), 95));
    setAnnualROI(Math.round(calculatedAnnualROI));
  }, [quotesPerDay, employees, timePerQuote, monthlyLabor, automationRate]);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section className="roi-calculator-section section" id="roi-calculator" ref={sectionRef}>
      <div className="container">
        {/* Header */}
        <div className={`section-header reveal ${isVisible ? 'visible' : ''}`}>
          <span className="badge">
            <span className="badge-dot"></span>
            Business Impact
          </span>
          <h2>
            Calculate Your <span className="text-gradient-premium">Potential ROI</span>
          </h2>
          <p>
            See exactly how much capital and time you are losing to manual data entry, and what deploying an AI infrastructure can save you.
          </p>
        </div>

        <div className={`roi-grid reveal-scale ${isVisible ? 'visible' : ''} delay-1`}>
          {/* Controls / Inputs */}
          <div className="roi-controls glass-card">
            <h3 className="roi-card-title">Operational Data</h3>
            
            <div className="roi-input-group">
              <div className="roi-input-header">
                <label>Quotes Processed Per Day</label>
                <span className="roi-value-display">{quotesPerDay}</span>
              </div>
              <input 
                type="range" 
                min="10" 
                max="1000" 
                step="10"
                value={quotesPerDay} 
                onChange={(e) => setQuotesPerDay(Number(e.target.value))}
                className="roi-slider"
              />
            </div>

            <div className="roi-input-group">
              <div className="roi-input-header">
                <label>Employees Handling Quotes</label>
                <span className="roi-value-display">{employees}</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="50" 
                step="1"
                value={employees} 
                onChange={(e) => setEmployees(Number(e.target.value))}
                className="roi-slider"
              />
            </div>

            <div className="roi-input-group">
              <div className="roi-input-header">
                <label>Average Time Per Quote (Mins)</label>
                <span className="roi-value-display">{timePerQuote}m</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="60" 
                step="1"
                value={timePerQuote} 
                onChange={(e) => setTimePerQuote(Number(e.target.value))}
                className="roi-slider"
              />
            </div>

            <div className="roi-input-group">
              <div className="roi-input-header">
                <label>Monthly Labor Cost for Team</label>
                <span className="roi-value-display">{formatCurrency(monthlyLabor)}</span>
              </div>
              <input 
                type="range" 
                min="2000" 
                max="250000" 
                step="1000"
                value={monthlyLabor} 
                onChange={(e) => setMonthlyLabor(Number(e.target.value))}
                className="roi-slider"
              />
            </div>

            <div className="roi-input-group">
              <div className="roi-input-header">
                <label>Estimated Automation Rate</label>
                <span className="roi-value-display">{automationRate}%</span>
              </div>
              <input 
                type="range" 
                min="50" 
                max="95" 
                step="5"
                value={automationRate} 
                onChange={(e) => setAutomationRate(Number(e.target.value))}
                className="roi-slider"
              />
            </div>
          </div>

          {/* Results / Outputs */}
          <div className="roi-results">
            <div className="roi-result-card glass-card">
              <div className="roi-result-label">Hours Saved Per Month</div>
              <div className="roi-result-value">{hoursSaved.toLocaleString()}h</div>
              <div className="roi-result-desc">Time recovered from manual data entry</div>
            </div>
            
            <div className="roi-result-card glass-card">
              <div className="roi-result-label">Estimated Monthly Savings</div>
              <div className="roi-result-value text-gradient-gold">{formatCurrency(costSavings)}</div>
              <div className="roi-result-desc">Direct labor cost optimization</div>
            </div>
            
            <div className="roi-result-card glass-card">
              <div className="roi-result-label">Capacity / Productivity Gain</div>
              <div className="roi-result-value">+{productivityGain}%</div>
              <div className="roi-result-desc">Without hiring additional headcount</div>
            </div>
            
            <div className="roi-result-card glass-card highlight-card">
              <div className="roi-result-label">Estimated Annual ROI</div>
              <div className="roi-result-value text-gradient-premium">{formatCurrency(annualROI)}</div>
              <div className="roi-result-desc">Capital unlocked for strategic growth</div>
            </div>
          </div>
        </div>

        <p style={{fontSize: '0.78rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: '1rem'}}>
          Estimates are illustrative. Actual results depend on workflow complexity and implementation scope.
        </p>

        {/* CTAs */}
        <div className={`roi-cta-wrap reveal ${isVisible ? 'visible' : ''} delay-3`}>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Schedule a Strategy Call
          </Link>
          <Link to="/contact" className="btn btn-secondary btn-lg">
            Get a Free AI Infrastructure Assessment
          </Link>
          
          <div className="trust-indicators-row">
            <span>✓ Secure & Encrypted</span>
            <span>✓ Strategy-First Approach</span>
            <span>✓ Built For Long-Term Growth</span>
          </div>
        </div>

      </div>
    </section>
  );
}
