import axios from 'axios';
import {
  SUBMIT_NEW_INFO,
  modifUserSucess,
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
          },
          {
            headers: {
              authorization: `Bearer ${state.user.infos.token}`,
            },
          });

          if (response.statusText === 'OK') {
            const { email } = response.data;
            const firstName = response.data.first_name;
            const lastName = response.data.last_name;
            const phoneNumber = response.data.phone_number;

            store.dispatch(modifUserSucess(
              email,
              firstName,
              lastName,
              phoneNumber,
            ));
          }
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
