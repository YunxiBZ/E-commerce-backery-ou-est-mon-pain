import axios from 'axios';
import {
  SUBMIT_NEW_INFO,
} from 'src/actions/user';

const info = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_NEW_INFO: {
      const changeInfoUser = async () => {
        const state = store.getState();
        const baseUrl = process.env.REACT_APP_BASE_URL;
        const url = `${baseUrl}/account`;
        try {
          const response = await axios.put(url, {
            email: state.user.newInfos.email || state.user.email,
            first_name: state.user.newInfos.firstName || state.user.infos.firstName,
            last_name: state.user.newInfos.lastName || state.user.infos.lastName,
            phone_number: state.user.newInfos.phoneNumber || state.user.infos.phoneNumber,
            header: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${state.user.infos.token}`,
            },
          });
          console.log(response);
        }
        catch (error) {
          console.log(error, 'error');
        }
      };
      changeInfoUser();
      break;
    }
    default:
      next(action);
  }
};

export default info;
