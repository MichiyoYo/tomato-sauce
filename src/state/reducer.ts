import { ActionType, StateType } from './types';
import * as actions from './constants';

export const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case actions.INCREMENT_ROUND:
      return { ...state, round: state.round + 1 };
    case actions.RESET_ROUND:
      return { ...state, round: 1 };
    case actions.SET_MODE:
      return { ...state, mode: action.payload };
    case actions.SET_TIMER:
      return { ...state, timer: action.payload };
    case actions.START_TIMER:
      return { ...state, timer: { ...state.timer, isRunning: true } };
    case actions.PAUSE_TIMER:
      return { ...state, timer: { ...state.timer, isRunning: false } };
    case actions.RESET_TIMER:
      return {
        ...state,
        timer: {
          ...state.timer,
          isRunning: false,
          countDown: state.timer.timeCap,
        },
      };
    case actions.TICK:
      return {
        ...state,
        timer: {
          ...state.timer,
          countDown: {
            minutes: state.timer.countDown.minutes,
            seconds: state.timer.countDown.seconds - 1,
          },
        },
      };
    default:
      return state;
  }
};