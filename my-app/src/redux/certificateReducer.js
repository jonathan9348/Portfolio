import { ADD_CERTIFICATE, DELETE_CERTIFICATE } from '../redux/actionTypes';

const initialState = {
  certificates: [],
};

const certificatesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CERTIFICATE:
      return {
        ...state,
        certificates: [...state.certificates, action.payload],
      };

    case DELETE_CERTIFICATE:
      const filteredCertificates = state.certificates.filter((_, index) => index !== action.payload);

      return {
        ...state,
        certificates: filteredCertificates,
      };

    default:
      return state;
  }
};

export default certificatesReducer;
