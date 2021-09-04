const app = Vue.createApp({
  data() {
    return {
      product: 'Pizza',
      type: 'Orientale',
      // name: 'Pizza Royal',
      price: 12,
      image: 'src/assets/images/pizza1-tomate.jpg',
      //boolean permettant de definir si un produit est soldé ou non
      sale: false,
      notAvailable: false,
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
          image: 'src/assets/images/pizza1-tomate.jpg'
        },
        {
          id: 1002,
          type: 'Crème Fraiche',
          color: '#e9cb8f',
          image: 'src/assets/images/pizza1-creme.jpg'
        },
      ],
      energy: {
        Kcal: 242,
        Glucides: 27.99,
        Fibres: 1.75,
        Proteines: 9.62,
        Sel: 11,
      },
      totalPrice: 0,
      nbProduct: 0,
      promo: ""
    };
  },
  // servent à creer des méthodes js dans lesquelles on va pouvoir passer un bloc de code. c'est utile lorsqu'on à besoin d'utiliser des expression js longue
  methods: {
    addProduct() {
      // this permet de préciser que l'on se trouve sur cette instance. 
      // la condition permet d'adapter le prix en fonction de l'état de la donnée "sale" (dans les data plus haut)
      if (this.sale) {
        this.nbProduct += 1;
        this.totalPrice = (this.price - 5) * this.nbProduct;
      } else {
        this.nbProduct += 1;
        this.totalPrice = this.price * this.nbProduct;
      }
    },
    // méthode qui me permet de changer l'image de la pizza lorsque la sauce est différente (lié à l'évènement mouseover dans le html)
    updateImage(newLinkImage) {
      this.image = newLinkImage;
    },
  },
  // propriété qui calcul des valeurs et garde la logique de calcul hors du model et apportent des améliorations de perf
  computed: {
    title() {
      return this.product + ' ' + this.type;
    }
  }
});