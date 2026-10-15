/**
 * ROI Planning Calculation Utilities
 * 
 * Accurately models estimated labor hours and planning time values.
 * Does not represent guaranteed cash savings or binding commercial terms.
 */

export const WEEKS_PER_YEAR = 52;

export function calculateRoi({
  manualHoursPerPerson = 15,
  hourlyRate = 45,
  teamSize = 5,
  automationRate = 0.50
} = {}) {
  // Validate and clamp inputs to realistic, non-negative ranges
  const hours = Math.max(0, Math.min(60, Number(manualHoursPerPerson) || 0));
  const rate = Math.max(0, Number(hourlyRate) || 0);
  const size = Math.max(0, Math.floor(Number(teamSize) || 0));
  const autoRate = Math.max(0, Math.min(1, Number(automationRate) || 0));

  // Weekly manual hours across the entire team
  const weeklyTeamHours = hours * size;

  // Annual manual labor cost across the team
  const currentYearlyCost = weeklyTeamHours * rate * WEEKS_PER_YEAR;

  // Hours recovered per year across the team
  const hoursSavedPerYear = Math.round(weeklyTeamHours * WEEKS_PER_YEAR * autoRate);

  // Theoretical monetary value of time recovered
  const timeValueRecovered = currentYearlyCost * autoRate;

  // Remaining manual labor cost
  const remainingLaborCost = currentYearlyCost - timeValueRecovered;

  return {
    manualHoursPerPerson: hours,
    hourlyRate: rate,
    teamSize: size,
    automationRate: autoRate,
    weeklyTeamHours,
    currentYearlyCost,
    remainingLaborCost,
    hoursSavedPerYear,
    timeValueRecovered
  };
}
