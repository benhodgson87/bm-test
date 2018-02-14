import {
  RETRIEVE_JOBS_PENDING,
  RETRIEVE_JOBS_SUCCESS,
  RETRIEVE_JOBS_FAIL,
  ADD_JOB,
  EDIT_JOB,
  DELETE_JOB,
} from './constants'

const initialState = {
  pending: false,
  data: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case RETRIEVE_JOBS_PENDING:
      return {
        ...state,
        pending: true,
      }

    case RETRIEVE_JOBS_SUCCESS:
      return {
        ...state,
        pending: false,
        data: [...action.payload],
      }

    case RETRIEVE_JOBS_FAIL:
      return {
        ...state,
        pending: false,
      }

    case ADD_JOB:
      return {
        ...state,
        data: [...state.data, action.payload],
      }

    case EDIT_JOB: {
      const jobIndex = state.data.findIndex(i => i.id === action.payload.id)
      return {
        ...state,
        data: [...state.data.slice(0, jobIndex), action.payload, ...state.data.slice(jobIndex + 1)],
      }
    }

    case DELETE_JOB: {
      const jobIndex = state.data.findIndex(i => i.id === action.id)
      return {
        ...state,
        data: [...state.data.slice(0, jobIndex), ...state.data.slice(jobIndex + 1)],
      }
    }

    default:
      return state
  }
}
