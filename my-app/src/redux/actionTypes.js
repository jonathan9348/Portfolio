// sectionsReducer
export const ADD_SECTION = 'ADD_SECTION';
export const EDIT_SECTION = 'EDIT_SECTION';
export const DELETE_SECTION = 'DELETE_SECTION';

// certificatesReducer
export const ADD_CERTIFICATE = 'ADD_CERTIFICATE';
export const DELETE_CERTIFICATE = 'DELETE_CERTIFICATE';


export const addSection = (section) => {
  return {
    type: ADD_SECTION,
    payload: section,
  };
};

export const editSection = (index, updatedSection) => {
  return {
    type: EDIT_SECTION,
    payload: { index, updatedSection },
  };
};

export const deleteSection = (index) => {
  return {
    type: DELETE_SECTION,
    payload: index,
  };
};



export const addCertificate = (certificate) => {
  return {
    type: ADD_CERTIFICATE,
    payload: certificate,
  };
};

export const deleteCertificate = (index) => {
  return {
    type: DELETE_CERTIFICATE,
    payload: index,
  };
};


