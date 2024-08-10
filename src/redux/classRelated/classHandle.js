// import axios from 'axios';
// import {
//     getRequest,
//     getSuccess,
//     getFailed,
//     getError,
//     getStudentsSuccess,
//     detailsSuccess,
//     getFailedTwo,
//     getSubjectsSuccess,
//     getSubDetailsSuccess,
//     getSubDetailsRequest
// } from './classSlice';

// export const getAllClasses = (id, address) => async (dispatch) => {
//     dispatch(getRequest());

//     try {
//         const result = await axios.get(`/${address}List/${id}`);
//         if (result.data.message) {
//             dispatch(getFailedTwo(result.data.message));
//         } else {
//             dispatch(getSuccess(result.data));
//         }
//     } catch (error) {
//         dispatch(getError(error));
//     }
// }

// export const getClassStudents = (id) => async (dispatch) => {
//     dispatch(getRequest());

//     try {
//         const result = await axios.get(`/Class/Students/${id}`);
//         if (result.data.message) {
//             dispatch(getFailedTwo(result.data.message));
//         } else {
//             dispatch(getStudentsSuccess(result.data));
//         }
//     } catch (error) {
//         dispatch(getError(error));
//     }
// }

// export const getClassDetails = (id, address) => async (dispatch) => {
//     dispatch(getRequest());

//     try {
//         const result = await axios.get(`/${address}/${id}`);
//         if (result.data) {
//             dispatch(detailsSuccess(result.data));
//         }
//     } catch (error) {
//         dispatch(getError(error));
//     }
// }

// export const getSubjectList = (id, address) => async (dispatch) => {
//     dispatch(getRequest());

//     try {
//         const result = await axios.get(`address}/${id}`);
//         if (result.data.message) {
//             dispatch(getFailed(result.data.message));
//         } else {
//             dispatch(getSubjectsSuccess(result.data));
//         }
//     } catch (error) {
//         dispatch(getError(error));
//     }
// }

// export const getTeacherFreeClassSubjects = (id) => async (dispatch) => {
//     dispatch(getRequest());

//     try {
//         const result = await axios.get(`/FreeSubjectList/${id}`);
//         if (result.data.message) {
//             dispatch(getFailed(result.data.message));
//         } else {
//             dispatch(getSubjectsSuccess(result.data));
//         }
//     } catch (error) {
//         dispatch(getError(error));
//     }
// }

// export const getSubjectDetails = (id, address) => async (dispatch) => {
//     dispatch(getSubDetailsRequest());

//     try {
//         const result = await axios.get(`/${address}/${id}`);
//         if (result.data) {
//             dispatch(getSubDetailsSuccess(result.data));
//         }
//     } catch (error) {
//         dispatch(getError(error));
//     }
// }


import axios from 'axios';
import {
    getRequest,
    getSuccess,
    getFailed,
    getError,
    getStudentsSuccess,
    detailsSuccess,
    getFailedTwo,
    getSubjectsSuccess,
    getSubDetailsSuccess,
    getSubDetailsRequest
} from './classSlice';

// Helper function to extract error message
const extractErrorMessage = (error) => {
    return error.response?.data?.message || error.message || 'Something went wrong';
};

export const getAllClasses = (id, address) => async (dispatch) => {
    dispatch(getRequest());

    try {
        const result = await axios.get(`/${address}List/${id}`);
        if (result.data.message) {
            dispatch(getFailedTwo(result.data.message));
        } else {
            dispatch(getSuccess(result.data));
        }
    } catch (error) {
        dispatch(getError(extractErrorMessage(error))); // Pass serialized error message only
    }
}

export const getClassStudents = (id) => async (dispatch) => {
    dispatch(getRequest());

    try {
        const result = await axios.get(`/Class/Students/${id}`);
        if (result.data.message) {
            dispatch(getFailedTwo(result.data.message));
        } else {
            dispatch(getStudentsSuccess(result.data));
        }
    } catch (error) {
        dispatch(getError(extractErrorMessage(error))); // Pass serialized error message only
    }
}

export const getClassDetails = (id, address) => async (dispatch) => {
    dispatch(getRequest());

    try {
        const result = await axios.get(`/${address}/${id}`);
        if (result.data) {
            dispatch(detailsSuccess(result.data));
        }
    } catch (error) {
        dispatch(getError(extractErrorMessage(error))); // Pass serialized error message only
    }
}

export const getSubjectList = (id, address) => async (dispatch) => {
    dispatch(getRequest());

    try {
        const result = await axios.get(`/${address}/${id}`); // Fixed URL
        if (result.data.message) {
            dispatch(getFailed(result.data.message));
        } else {
            dispatch(getSubjectsSuccess(result.data));
        }
    } catch (error) {
        dispatch(getError(extractErrorMessage(error))); // Pass serialized error message only
    }
}

export const getTeacherFreeClassSubjects = (id) => async (dispatch) => {
    dispatch(getRequest());

    try {
        const result = await axios.get(`/FreeSubjectList/${id}`);
        if (result.data.message) {
            dispatch(getFailed(result.data.message));
        } else {
            dispatch(getSubjectsSuccess(result.data));
        }
    } catch (error) {
        dispatch(getError(extractErrorMessage(error))); // Pass serialized error message only
    }
}

export const getSubjectDetails = (id, address) => async (dispatch) => {
    dispatch(getSubDetailsRequest());

    try {
        const result = await axios.get(`/${address}/${id}`);
        if (result.data) {
            dispatch(getSubDetailsSuccess(result.data));
        }
    } catch (error) {
        dispatch(getError(extractErrorMessage(error))); // Pass serialized error message only
    }
}
