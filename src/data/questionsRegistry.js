import { day1Questions } from './day1Questions';
import { day2Questions } from './day2Questions';
import { day3Questions } from './day3Questions';
import { day4Questions } from './day4Questions';
import { day5Questions } from './day5Questions';
import { javaDay1Questions } from './javaDay1Questions';
import { javaDay2Questions } from './javaDay2Questions';

const pythonQuestionsMap = {
  1: day1Questions,
  2: day2Questions,
  3: day3Questions,
  4: day4Questions,
  5: day5Questions
};

const javaQuestionsMap = {
  1: javaDay1Questions,
  2: javaDay2Questions
};

export const getQuestionsForDay = (dayId, bootcampId = 'python-with-ai') => {
  const num = parseInt(dayId, 10);
  if (bootcampId === 'java-with-ai') {
    return javaQuestionsMap[num] || null;
  }
  return pythonQuestionsMap[num] || null;
};

export {
  day1Questions,
  day2Questions,
  day3Questions,
  day4Questions,
  day5Questions,
  javaDay1Questions,
  javaDay2Questions
};
