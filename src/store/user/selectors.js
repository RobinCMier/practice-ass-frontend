export const selectToken = (state) => state.user.token;

export const selectUser = (state) => state.user; //selects the entire user, incl everything

export const selectUserSpace = (state) => state.user.space;
