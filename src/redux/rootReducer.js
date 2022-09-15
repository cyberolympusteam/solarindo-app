import axios from 'axios';

const rootReducer = (state, action) => {
  switch (action.type) {
    case 'GET_USER':
      const token = action.token;
      const userID = action.userID;
      axios({
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
        },
        url: `http://solarindo.indorobotik.com/api/v1/user/${userID}`,
      }).then(res => {
        return {...state, userInfo: res.data};
      });
      break;

    default:
      return state;
  }
};

export default rootReducer;
