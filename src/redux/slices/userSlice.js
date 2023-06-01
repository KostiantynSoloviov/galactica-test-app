import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
    userAvatar,
    planet1,
    planet2,
    planet3,
    planet4,
    planet5,
    additionImage2,
    additionImage1
} from "../../assets/images/index"

export const fakeResponseData = [

    {
        id: 1,
        isActive: false,
        image: planet1,
        level: 7,
        completed: 90,
        infoItems: [
            {
                type: "courses",
                completed: 9,
                total: 10,
            },
            {
                type: "folders",
                completed: 10,
                total: 10,
            },
            {
                type: "books",
                completed: 9,
                total: 10,
            },
        ],
        additions: [
            {
                id: 0,
                image: [
                    additionImage2,
                    additionImage1,
                    additionImage2,
                    additionImage2,
                    additionImage2,
                    additionImage2,
                    additionImage2
                ],
                books: 26,
                persons: 3000
            },
            {
                id: 1,
                image: [
                    additionImage2,
                    additionImage1,
                    additionImage2,
                    additionImage2,
                    additionImage2,
                    additionImage2,
                    additionImage2,
                    additionImage1,
                    additionImage2,
                ],
                books: 17,
                persons: 500
            },
            {
                id: 2,
                image: [additionImage2,
                    additionImage1],
                books: 2,
                persons: 4000
            },
        ]
    },
    {
        id: 2,
        isActive: true,
        image: planet2,
        level: 4,
        completed: 37,
        infoItems: [
            {
                type: "courses",
                completed: 3,
                total: 15,
            },
            {
                type: "folders",
                completed: 6,
                total: 10,
            },
            {
                type: "books",
                completed: 3,
                total: 19,
            },
        ],
        additions: [
            {
                id: 0,
                image: [
                    additionImage2
                ],
                books: 13,
                persons: 2873
            },
            {
                id: 1,
                image: [
                    additionImage2,
                    additionImage1,
                    additionImage2,
                    additionImage2,
                    additionImage2,
                    additionImage2,
                    additionImage2
                ],
                books: 17,
                persons: 1500
            },
            {
                id: 2,
                image: [
                    additionImage2,
                    additionImage1,
                    additionImage2,
                    additionImage1,
                    additionImage2,
                    additionImage2,
                    additionImage2,
                    additionImage2,
                    additionImage2,
                    additionImage2,
                    additionImage1,
                    additionImage2,
                    additionImage2,
                    additionImage2,
                    additionImage2,
                    additionImage2
                ],
                books: 40,
                persons: 4000
            },
        ]
    },
    {
        id: 3,
        isActive: false,
        image: planet3,
        level: 1,
        completed: 5,
        infoItems: [
            {
                type: "courses",
                completed: 1,
                total: 10,
            },
            {
                type: "folders",
                completed: 1,
                total: 10,
            },
            {
                type: "books",
                completed: 2,
                total: 10,
            },
        ],
        additions: [
            {
                id: 0,
                image: [
                    additionImage2,
                    additionImage1,
                    additionImage2,
                    additionImage1,
                    additionImage2,
                    additionImage2,
                    additionImage2,
                    additionImage2,
                    additionImage2
                ],
                books: 20,
                persons: 300
            },
            {
                id: 1,
                image: [
                    additionImage2,
                    additionImage1,
                    additionImage2,
                    additionImage1,
                    additionImage2,
                    additionImage2,
                    additionImage2,
                    additionImage2,
                    additionImage2,
                    additionImage2,
                    additionImage1,
                    additionImage2,
                    additionImage2,
                    additionImage2,
                    additionImage2,
                    additionImage2,
                    additionImage2,
                    additionImage1,
                    additionImage2,
                    additionImage2,
                    additionImage2,
                    additionImage2,
                    additionImage2
                ],
                books: 60,
                persons: 15
            },
            {
                id: 2,
                image: [
                    additionImage2,
                    additionImage1
                ],
                books: 70,
                persons: 100
            },
        ]
    },
    {
        id: 4,
        isActive: false,
        image: planet4,
        level: 1,
        completed: 50,
        infoItems: [
            {
                type: "courses",
                completed: 5,
                total: 10,
            },
            {
                type: "folders",
                completed: 10,
                total: 10,
            },
            {
                type: "books",
                completed: 0,
                total: 10,
            },
        ],
        additions: [
            {
                id: 0,
                image: [
                    additionImage2,
                    additionImage1,
                    additionImage1,
                    additionImage1
                ],
                books: 13,
                persons: 2873
            },
            {
                id: 1,
                image: [
                    additionImage2,
                    additionImage1
                ],
                books: 17,
                persons: 1500
            },
            {
                id: 2,
                image: [
                    additionImage2,
                ],
                books: 2,
                persons: 4000
            },
        ]
    },
    {
        id: 5,
        isActive: false,
        image: planet5,
        level: 5,
        completed: 70,
        infoItems: [
            {
                type: "courses",
                completed: 7,
                total: 10,
            },
            {
                type: "folders",
                completed: 10,
                total: 10,
            },
            {
                type: "books",
                completed: 7,
                total: 10,
            },
        ],
        additions: [
            {
                id: 0,
                image: [
                    additionImage2,
                    additionImage1,
                    additionImage2,
                    additionImage1,
                    additionImage2,
                    additionImage2,
                    additionImage2,
                    additionImage2,
                    additionImage2
                ],
                books: 13,
                persons: 2000
            },
            {
                id: 1,
                image: [
                    additionImage2,
                    additionImage1,
                    additionImage2,
                    additionImage1,
                    additionImage2,
                    additionImage2,
                    additionImage2,
                    additionImage2,
                    additionImage2],
                books: 17,
                persons: 1500
            },
            {
                id: 2,
                image: [
                    additionImage2,
                    additionImage1,
                    additionImage2,
                    additionImage1,
                    additionImage2,
                    additionImage2,
                    additionImage2,
                    additionImage2,
                    additionImage2
                ],
                books: 2,
                persons: 80
            },
        ]
    },

];

const initialState = {
    status: "loading",
    name: "Peter",
    role: "Admin",
    avatar: userAvatar,
    userStatus: "active",
    notifications: [],
    courses: [],
    additions: [],
    error: undefined,
};

export const fetchUserData = createAsyncThunk(
    "posts/fetchUserData",
    async () => {
        return fakeResponseData;

    },
);

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setActiveCourse: (state, action) => {
            const updatedCourses = state.courses.map((course) => {
                return course.id === action.payload
                    ? { ...course, isActive: true }
                    : { ...course, isActive: false };
            });

            state.courses = updatedCourses;
        },
        setUserStatus: (state, action) => {
            state.status = action.payload;
        },
        setUserName: (state, action) => {
            state.name = action.payload;
        },
        setUserAvatar: (state, action) => {
            state.avatar = action.payload;
        },
        setUserRole: (state, action) => {
            state.role = action.payload;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchUserData.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(fetchUserData.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.courses = action.payload;
            })
            .addCase(fetchUserData.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },

});

export const { setActiveCourse } = userSlice.actions;

export default userSlice.reducer;