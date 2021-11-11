//get token
export const selectToken = (state) => state.user.token;
//get user
export const selectUser = (state) => state.user; //selects the entire user, incl everything
//get userSpace
export const selectUserSpace = (state) => state.user.space;
//update userSpace
