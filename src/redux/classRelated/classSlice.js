// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     classesList: [],
//     classStudents: [],
//     classDetails: [],
//     subjectsList: [],
//     subjectDetails: [],
//     loading: false,
//     subloading: false,
//     error: null,
//     response: null,
//     getresponse: null,
// };

// const classSlice = createSlice({
//     name: 'class',
//     initialState,
//     reducers: {
//         getRequest: (state) => {
//             state.loading = true;
//         },
//         getSubDetailsRequest: (state) => {
//             state.subloading = true;
//         },
//         getSuccess: (state, action) => {
//             state.classesList = action.payload;
//             state.loading = false;
//             state.error = null;
//             state.getresponse = null;
//         },
//         getStudentsSuccess: (state, action) => {
//             state.classStudents = action.payload;
//             state.loading = false;
//             state.error = null;
//             state.getresponse = null;
//         },
//         getSubjectsSuccess: (state, action) => {
//             state.subjectsList = action.payload;
//             state.loading = false;
//             state.error = null;
//             state.response = null;
//         },
//         getFailed: (state, action) => {
//             state.subjectsList = [];
//             state.response = action.payload;
//             state.loading = false;
//             state.error = null;
//         },
//         getFailedTwo: (state, action) => {
//             state.classesList = [];
//             state.classStudents = [];
//             state.getresponse = action.payload;
//             state.loading = false;
//             state.error = null;
//         },
//         getError: (state, action) => {
//             state.loading = false;
//             state.error = action.payload;
//         },
//         detailsSuccess: (state, action) => {
//             state.classDetails = action.payload;
//             state.loading = false;
//             state.error = null;
//         },
//         getSubDetailsSuccess: (state, action) => {
//             state.subjectDetails = action.payload;
//             state.subloading = false;
//             state.error = null;
//         },
//         resetSubjects: (state) => {
//             state.subjectsList = [];
//             state.classesList = [];
//         },
//     },
// });

// export const {
//     getRequest,
//     getSuccess,
//     getFailed,
//     getError,
//     getStudentsSuccess,
//     getSubjectsSuccess,
//     detailsSuccess,
//     getFailedTwo,
//     resetSubjects,
//     getSubDetailsSuccess,
//     getSubDetailsRequest
// } = classSlice.actions;

// export const classReducer = classSlice.reducer;

////////


import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    classesList: [],
    classStudents: [],
    classDetails: [],
    subjectsList: [],
    subjectDetails: [],
    loading: false,
    subloading: false,
    error: null,
    response: null,
    getresponse: null,
};

const classSlice = createSlice({
    name: 'sclass',
    initialState,
    reducers: {
        getRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        getSubDetailsRequest: (state) => {
            state.subloading = true;
            state.error = null;
        },
        getSuccess: (state, action) => {
            state.classesList = action.payload;
            state.loading = false;
            state.error = null;
            state.getresponse = null;
        },
        getStudentsSuccess: (state, action) => {
            state.classStudents = action.payload;
            state.loading = false;
            state.error = null;
            state.getresponse = null;
        },
        getSubjectsSuccess: (state, action) => {
            state.subjectsList = action.payload;
            state.loading = false;
            state.error = null;
            state.response = null;
        },
        getFailed: (state, action) => {
            state.subjectsList = [];
            state.response = action.payload;
            state.loading = false;
            state.error = action.payload;  // Store the error here
        },
        getFailedTwo: (state, action) => {
            state.classesList = [];
            state.classStudents = [];
            state.getresponse = action.payload;
            state.loading = false;
            state.error = action.payload;  // Store the error here
        },
        getError: (state, action) => {
            state.loading = false;
            state.error = action.payload;  // Store the error here
        },
        detailsSuccess: (state, action) => {
            state.classDetails = action.payload;
            state.loading = false;
            state.error = null;
        },
        getSubDetailsSuccess: (state, action) => {
            state.subjectDetails = action.payload;
            state.subloading = false;
            state.error = null;
        },
        resetSubjects: (state) => {
            state.subjectsList = [];
            state.classesList = [];
            state.classDetails = [];  // Optional: reset class details as well
            state.subjectDetails = [];  // Optional: reset subject details as well
        },
    },
});

export const {
    getRequest,
    getSuccess,
    getFailed,
    getError,
    getStudentsSuccess,
    getSubjectsSuccess,
    detailsSuccess,
    getFailedTwo,
    resetSubjects,
    getSubDetailsSuccess,
    getSubDetailsRequest
} = classSlice.actions;

export const classReducer = classSlice.reducer;
