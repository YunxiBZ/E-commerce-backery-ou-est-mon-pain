import { expect } from 'chai';
import productReducer, { initialState } from '../../src/reducers/products';
import { saveProducts } from '../../src/actions/products';
// via "describe" je décris un chapitre de tests
// permett de s'organiserson passe en arguments :
// - une chaîne de caractère descriptive
// - une fonction de callback contenant le contenv de ce chapitre (sous chapitre + tests)

describe('reducer for products', () => {
  // la structure du reducer
  describe('structure', () => {
    // je décris un test
    // on passe en arguments :
    // - une chaîne de caractères descriptive
    // - une fonction de callback contenant le/les assertions
    it('must be a function', () => {
      expect(productReducer).to.be.a('function');
    });

    it('check initial state', () => {
      expect(initialState).to.be.an('array');
      expect(productReducer()).to.be.equal(initialState);
    });
  });

  // executions avec des actions
  // On veut faire un nouveau chapitre
  describe('actions', () => {
    // Dans ce chapitre on veut faire un nouveau test
    it('saveProducts should save new products', () => {
      // on va tester l'effet d'une action sur le reducer
      // on va donc récupérer un action creator, l'envoyer directement dans le reducer
      // Et tester la sortie pour voir si l'action a bien eu l'effet escompté
      const newProducts = [{ title: 'Baguette' }, { title: 'Croissant' }];
      // Prenons par exemple l'action creator saveProducts() et testons
      const action = saveProducts(newProducts);
      const newState = productReducer(initialState, action);
      expect(newState).to.be.eql(newProducts);
    });
  });
});
