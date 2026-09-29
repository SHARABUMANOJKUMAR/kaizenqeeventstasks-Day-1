import { day1Questions } from './day1Questions';
import { day2Questions } from './day2Questions';
import { day3Questions } from './day3Questions';
import { day4Questions } from './day4Questions';
import { day5Questions } from './day5Questions';

const questionsMap = {
  1: day1Questions,
  2: day2Questions,
  3: day3Questions,
  4: day4Questions,
  5: day5Questions
};

export const getQuestionsForDay = (dayId) => {
  const num = parseInt(dayId, 10);
  return questionsMap[num] || null;
};

export {
  day1Questions,
  day2Questions,
  day3Questions,
  day4Questions,
  day5Questions
};
