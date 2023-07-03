import { ADD_SECTION, EDIT_SECTION, DELETE_SECTION } from '../redux/actionTypes';

const initialState = {
  sections: [],
};

const sectionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SECTION:
      return {
        ...state,
        sections: [...state.sections, action.payload],
      };

    case EDIT_SECTION:
      const { index, updatedSection } = action.payload;
      const updatedSections = [...state.sections];
      updatedSections[index] = updatedSection;

      return {
        ...state,
        sections: updatedSections,
      };

    case DELETE_SECTION:
      const filteredSections = state.sections.filter((section, index) => index !== action.payload);

      return {
        ...state,
        sections: filteredSections,
      };

    default:
      return state;
  }
};

export default sectionsReducer;
