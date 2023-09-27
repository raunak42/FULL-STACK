// recoil.js
import { atom } from 'recoil';

export const courseState = atom({
  key: 'courseState',
  default: [],
});

export const selectedCourseState = atom({
  key: 'selectedCourseState',
  default: null,
});
