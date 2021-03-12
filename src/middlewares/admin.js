import axios from 'axios';
import {
  SUBMIT_NEW_PRODUCT,
  DELETE_PRODUCT,
  createProduct,
  newProductSuccess,
  errorAddProduct,
  deleteProductError,
  SUBMIT_MODIFIED_PRODUCT,
  modifyProduct,
  errorModifyProduct,
} from 'src/actions/admin';
import {
  fetchProducts,
} from 'src/actions/products';

const admin = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_NEW_PRODUCT: {
      console.log('ok');
      const postProduct = async () => {
        const state = store.getState();
        const baseUrl = process.env.REACT_APP_BASE_URL;
        const url = `${baseUrl}/product`;
        const categories = [];
        if (state.admin.newProduct.categories[0] !== '') {
          categories.push(state.admin.newProduct.categories[0]);
        }
        if (state.admin.newProduct.categories[1] !== '') {
          categories.push(state.admin.newProduct.categories[1]);
        }
        try {
          const response = await axios.post(url, {
            title: state.admin.newProduct.title,
            price: parseInt(state.admin.newProduct.price, 10),
            description: state.admin.newProduct.description,
            image: state.admin.newProduct.image,
            // Deux objets dans le state, si l'objet est vide on ne le met pas.
            // permet de renseigner une seule catégorie sur le produit.
            categories,
          },
          {
            headers: {
              authorization: `Bearer ${state.user.infos.token}`,
            },
          });
          console.log(response);
          if (response.statusText === 'Created') {
            const { message } = response.data;
            store.dispatch(createProduct(message));
            store.dispatch(fetchProducts());
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

          if (response.statusText === 'OK') {
            const { message } = response.data;
            store.dispatch(newProductSuccess(message));
            store.dispatch(fetchProducts());
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
    case SUBMIT_MODIFIED_PRODUCT: {
      const tryModifyProduct = async () => {
        const state = store.getState();
        const baseUrl = process.env.REACT_APP_BASE_URL;
        const url = `${baseUrl}/product`;
        const categories = [];
        if (state.admin.modifyProduct.categories[0] !== '') {
          categories.push(parseInt(state.admin.modifyProduct.categories[0], 10));
        }
        if (state.admin.modifyProduct.categories[1] !== '') {
          categories.push(parseInt(state.admin.modifyProduct.categories[1], 10));
        }
        try {
          const response = await axios.put(url, {
            id: state.admin.modifyProduct.id,
            title: state.admin.modifyProduct.title,
            price: parseInt(state.admin.modifyProduct.price, 10),
            description: state.admin.modifyProduct.description,
            image: state.admin.modifyProduct.image,
            categories,
          },
          {
            headers: {
              authorization: `Bearer ${state.user.infos.token}`,
            },
          });
          console.log(response);
          if (response.statusText === 'OK') {
            const { message } = response.data;
            store.dispatch(modifyProduct(message));
            store.dispatch(fetchProducts());
          }
        }
        catch (error) {
          console.log('error', error);
          store.dispatch(errorModifyProduct('Veuillez entrer un prix valide'));
        }
      };
      tryModifyProduct();
      break;
    }
    default:
      next(action);
  }
};

export default admin;
