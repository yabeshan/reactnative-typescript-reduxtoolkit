import { createSlice } from '@reduxjs/toolkit';

export type UserProfileState = {
	login: string;
	role: string;
	direction: string;
	specialization: string;
	projectName: string;
}

const initialState: UserProfileState = {
	login: "",
	role: "",
	direction: "",
	specialization: "",
	projectName: "",
}

const userProfile = createSlice({
	name: 'userProfile',
	initialState: initialState,
	reducers: {
		userLogin: (state, action) => {
			state.login = action.payload;
		},
		userRole: (state, action) => {
			state.role = action.payload;
		},
		userDirection: (state, action) => {
			state.direction = action.payload;
		},
		userSpecialization: (state, action) => {
			state.specialization = action.payload;
		},
		userProjectName: (state, action) => {
			state.projectName = action.payload;
		},
		userClean: (state, action) => {
			state.login = "";
			state.role = "";
			state.direction = "";
			state.specialization = "";
			state.projectName = "";
		},
	}
});

export const { 
	userLogin, 
	userRole, 
	userDirection, 
	userSpecialization, 
	userProjectName,
	userClean,
} = userProfile.actions;

export default userProfile.reducer;