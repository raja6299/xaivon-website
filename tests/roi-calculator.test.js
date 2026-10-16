import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateRoi } from '../src/utils/roiCalculator.js';

test('roi-calculator: realistic baseline calculation matches formula', () => {
  const result = calculateRoi({
    manualHoursPerPerson: 15,
    hourlyRate: 45,
    teamSize: 5,
    automationRate: 0.50
  });

  // 15 hours * 5 people = 75 weekly team hours
  assert.strictEqual(result.weeklyTeamHours, 75);

  // 75 hours * $45/hr * 52 weeks = $175,500 annual manual cost
  assert.strictEqual(result.currentYearlyCost, 175500);

  // 75 hours * 52 weeks * 50% = 1,950 hours recovered
  assert.strictEqual(result.hoursSavedPerYear, 1950);

  // $175,500 * 50% = $87,750 time value recovered
  assert.strictEqual(result.timeValueRecovered, 87750);

  // Remaining unautomated cost = $87,750
  assert.strictEqual(result.remainingLaborCost, 87750);

  // Mathematical balance: total = remaining + recovered
  assert.strictEqual(result.currentYearlyCost, result.remainingLaborCost + result.timeValueRecovered);
});

test('roi-calculator: boundary values - minimum inputs', () => {
  const minResult = calculateRoi({
    manualHoursPerPerson: 2,
    hourlyRate: 15,
    teamSize: 1,
    automationRate: 0.20
  });

  assert.strictEqual(minResult.weeklyTeamHours, 2);
  assert.strictEqual(minResult.currentYearlyCost, 2 * 15 * 52); // $1,560
  assert.strictEqual(minResult.hoursSavedPerYear, Math.round(2 * 52 * 0.20)); // 21h
  assert.strictEqual(minResult.timeValueRecovered, 1560 * 0.20); // $312
  assert.strictEqual(minResult.remainingLaborCost, 1560 - 312); // $1,248
});

test('roi-calculator: boundary values - maximum inputs', () => {
  const maxResult = calculateRoi({
    manualHoursPerPerson: 35,
    hourlyRate: 150,
    teamSize: 50,
    automationRate: 0.80
  });

  // 35 * 50 = 1,750 weekly team hours
  assert.strictEqual(maxResult.weeklyTeamHours, 1750);
  // 1,750 * 150 * 52 = $13,650,000
  assert.strictEqual(maxResult.currentYearlyCost, 13650000);
  // 1,750 * 52 * 0.80 = 72,800 hours recovered
  assert.strictEqual(maxResult.hoursSavedPerYear, 72800);
  // $13,650,000 * 0.80 = $10,920,000
  assert.strictEqual(maxResult.timeValueRecovered, 10920000);
  // Remaining = $2,730,000
  assert.strictEqual(maxResult.remainingLaborCost, 2730000);
});

test('roi-calculator: zero values return zero without errors', () => {
  // Zero team size
  const zeroTeam = calculateRoi({ manualHoursPerPerson: 20, hourlyRate: 50, teamSize: 0, automationRate: 0.5 });
  assert.strictEqual(zeroTeam.weeklyTeamHours, 0);
  assert.strictEqual(zeroTeam.currentYearlyCost, 0);
  assert.strictEqual(zeroTeam.hoursSavedPerYear, 0);
  assert.strictEqual(zeroTeam.timeValueRecovered, 0);
  assert.strictEqual(zeroTeam.remainingLaborCost, 0);

  // Zero hourly rate
  const zeroRate = calculateRoi({ manualHoursPerPerson: 20, hourlyRate: 0, teamSize: 5, automationRate: 0.5 });
  assert.strictEqual(zeroRate.weeklyTeamHours, 100);
  assert.strictEqual(zeroRate.currentYearlyCost, 0);
  assert.strictEqual(zeroRate.timeValueRecovered, 0);
  assert.strictEqual(zeroRate.hoursSavedPerYear, 2600); // 100 * 52 * 0.5

  // Zero hours
  const zeroHours = calculateRoi({ manualHoursPerPerson: 0, hourlyRate: 50, teamSize: 5, automationRate: 0.5 });
  assert.strictEqual(zeroHours.weeklyTeamHours, 0);
  assert.strictEqual(zeroHours.currentYearlyCost, 0);
  assert.strictEqual(zeroHours.timeValueRecovered, 0);
  assert.strictEqual(zeroHours.hoursSavedPerYear, 0);

  // Zero automation rate
  const zeroAuto = calculateRoi({ manualHoursPerPerson: 20, hourlyRate: 50, teamSize: 5, automationRate: 0 });
  assert.strictEqual(zeroAuto.weeklyTeamHours, 100);
  assert.strictEqual(zeroAuto.currentYearlyCost, 100 * 50 * 52);
  assert.strictEqual(zeroAuto.timeValueRecovered, 0);
  assert.strictEqual(zeroAuto.hoursSavedPerYear, 0);
  assert.strictEqual(zeroAuto.remainingLaborCost, zeroAuto.currentYearlyCost);
});

test('roi-calculator: clamps invalid/negative inputs gracefully', () => {
  const clamped = calculateRoi({
    manualHoursPerPerson: -10, // clamped to 0
    hourlyRate: -50,           // clamped to 0
    teamSize: -5,              // clamped to 0
    automationRate: 1.5        // clamped to 1
  });

  assert.strictEqual(clamped.manualHoursPerPerson, 0);
  assert.strictEqual(clamped.hourlyRate, 0);
  assert.strictEqual(clamped.teamSize, 0);
  assert.strictEqual(clamped.automationRate, 1);
  assert.strictEqual(clamped.currentYearlyCost, 0);
  assert.strictEqual(clamped.timeValueRecovered, 0);
});
