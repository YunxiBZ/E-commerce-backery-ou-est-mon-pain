import axios from 'axios';
import {
  SUBMIT_NEW_PRODUCT,
  DELETE_PRODUCT,
  createProduct,
  newProductSuccess,
  errorAddProduct,
  deleteProductError,
} from 'src/actions/admin';

const admin = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_NEW_PRODUCT: {
      console.log('ok');
      const postProduct = async () => {
        const state = store.getState();
        const baseUrl = process.env.REACT_APP_BASE_URL;
        const url = `${baseUrl}/product`;
        console.log(state.admin.newProduct.categories[0].length);
        console.log(state.admin.newProduct.categories[1].length);
        try {
          const response = await axios.post(url, {
            title: state.admin.newProduct.title,
            price: parseInt(state.admin.newProduct.price, 10),
            description: state.admin.newProduct.description,
            image: state.admin.newProduct.image,
            // Deux objets dans le state, si l'objet est vide on ne le met pas.
            // permet de renseigner une seule catégorie sur le produit.
            categories: [
              (state.admin.newProduct.categories[0] && (state.admin.newProduct.categories[0])),
              (state.admin.newProduct.categories[1] && (state.admin.newProduct.categories[1])),
            ],
          },
          {
            headers: {
              authorization: `Bearer ${state.user.infos.token}`,
            },
          });
          if (response.statusText === 'Created') {
            const { message } = response.data;
            store.dispatch(createProduct(message));
          }
        }
        catch (error) {
          console.log(error, 'error');
          store.dispatch(errorAddProduct('Veuillez entrer un prix valide'));
        }
      };
      postProduct();
      break;
    }
    case DELETE_PRODUCT: {
      const deleteProduct = async () => {
        const state = store.getState();
        const baseUrl = process.env.REACT_APP_BASE_URL;
        const url = `${baseUrl}/product`;
        try {
          const response = await axios.delete(url, {
            headers: {
              authorization: `Bearer ${state.user.infos.token}`,
            },
            data: {
              id: parseInt(state.admin.product, 10),
            },
          });

          console.log(response);
          // if (response.statusText === 'OK') {
          //   console.log('cestcool');
          //   const { message } = response.data;
          //   store.dispatch(deleteProductSuccess(message));
          // }

          if (response.statusText === 'OK') {
            const { message } = response.data;
            store.dispatch(newProductSuccess(message));
          }
        }
        catch (error) {
          console.log(error, 'error');
          store.dispatch(deleteProductError(error.response.data.message));
        }
      };
      deleteProduct();
      break;
    }
    default:
      next(action);
  }
};

export default admin;
