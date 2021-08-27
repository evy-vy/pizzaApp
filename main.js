const app = Vue.createApp({
  data() {
    return {
      name: 'Pizza Royal',
      price: 12,
      image: 'src/assets/images/pizza1-tomate.jpg',
      //boolean permettant de definir si un produit est soldé ou non
      sale: true,
      notAvailable: true,
      ingredients: [
        'Olives',
        'Poulet roti',
        'Bacon',
        'Poivrons',
        'Champignons',
        'Mozzarella',
        'Oeuf'
      ],
      sauces: [
        {
          id: 1001,
          type: 'Sauce Tomate',
          color: '#db4006',
          image: 'src/assets/images/pizza2.jpg'
        },
        {
          id: 1002,
          type: 'Crème Fraiche',
          color: '#e9cb8f',
          image: 'src/assets/images/pizza3.jpg'
        },
      ],
      energy: {
        Kcal: 242,
        Glucides: 27.99,
        Fibres: 1.75,
        Proteines: 9.62,
        Sel: 11,
      },
    };
  },
});