export const stateApp = {
  isPhone: null,
  filters: {
    descuento: [
      { id: 1, name: "descuento" },
    ],
    ordenarPor: [
      { id: 1, name: "relevancia" },
      { id: 2, name: "menor precio" },
      { id: 3, name: "mayor precio" }
    ],
    sexo: [
      { id: 1, name: "hombre" },
      { id: 2, name: "mujer" },
      { id: 3, name: "niños" },
      { id: 4, name: "niñas" },
    ],
    linea: [
      { id: 1, name: "calzado" },
      { id: 2, name: "ropa" },
      { id: 3, name: "accesorios" }
    ],
    categorias: [
      { id: 1, name: "zapatillas" },
      { id: 2, name: "botin" },
      { id: 3, name: "futbol" },
      { id: 4, name: "todo" },
      { id: 5, name: "sandalias" },
    ],
    marcas: [
      { id: 1, name: 'adidas' },
      { id: 2, name: 'nike' },
      { id: 3, name: 'converse' },
      { id: 4, name: 'dc' },
      { id: 5, name: 'hi-tec' },
      { id: 6, name: 'merrell' },
      { id: 7, name: 'cat' },
      { id: 8, name: 'reebok' },
      { id: 9, name: 'salomon' },
      { id: 10, name: 'umbro' },
      { id: 11, name: 'columbia' },
      { id: 12, name: 'fila' },
      { id: 13, name: 'lippi' },
      { id: 14, name: 'the-north-face' },
      { id: 15, name: 'puma' }
    ]
  },
  sizes: {
    calzado: {
      hombre: [39, 39.5, 40, 40.5, 41, 41.5, 42, 42.5, 43, 43.5, 44,
        44.5, 45, 45.5, 46, 46.5, 47
      ],
      mujer: [34, 34.5, 35, 35.5, 36, 36.5, 37, 37.5, 38, 38.5, 39, 39.5, 40, 40.5, 41, 41.5],
      ninos: [15, 15.5, 16, 16.5, 17, 17.5, 18, 18.5, 19, 19.5, 20, 20.5, 21,
        21.5, 22, 22.5, 23, 23.5, 24, 24.5, 25, 25.5, 26, 26.5, 27, 28, 28.5,
        29, 29.5, 30, 30.5, 31, 31.5, 32, 32.5, 33, 33.5, 34, 34.5, 35, 35.5,
        36, 36.5, 37, 37.5, 38, 38.5
      ],
    },
    ropa: {
      hombre: [ 'XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'],
      mujer: [ 'XXS', 'XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'],
      ninos: [ '0-3 Meses', '3-6 Meses', '6-9 Meses', '9-12 Meses', '12-18 Meses',
        '1-2 años', '2-3 años', '3-4 años', '4-5 años', '5-6 años', '6-7 años',
        '7-8 años', '8-9 años', '9-10 años', '10-11 años', '11-12 años', '12-13 años',
        '13-14 años', '14-15 años', '15-16 años'
      ]
    },
    accesorios: "Talla única"
  },
  colors: []
}

export const stateCart = {
  products: [],
  costSub: 0,
  costSend: 0,
  costTotal: 0
}

export const stateLike = {
  products: []
}

export const stateUser = {
  logged: false,
  type: 0,
  token: null,
  deliveryData: {},
  invoiceDetailData: {},
  dataUser: {
    id: "",
    type: "",
    email: "",
    name: "",
    avatar: `${process.env.STATIC_PUBLIC}images/avatar.jpg`,
    adult: "",
  }
}

export const stateProductNew = {
  id: null,
  codigo: "",
  name: "",
  descuento: 0,
  costo: 0,
  descripcion: "",
  caracteristicas: "",
  es_padre: true,
  mi_padre: "",
  id_color: null,
  name_color: null,
  sizes: [
    { id: null, name: "", quantity: 0 }
  ],
  img: [],
  filtro: {
    linea: {
      id: null,
      name: ""
    },
    categoria: {
      id: null,
      name: ""
    },
    sex: {
      id: null,
      name: ""
    },
    marca: {
      id: null,
      name: ""
    },
  },
}
const revisar = {
  sizes: {
    calzado: {
      hombre: [
        { US: '5.5', cm: 23.3, EU: '38' },
        { US: '6', cm: 23.9, EU: '38.5' },
        { US: '6.5', cm: 24.1, EU: '39.5' },
        { US: '7', cm: 24.6, EU: '40' },
        { US: '7.5', cm: 24.9, EU: '40.5' },
        { US: '8', cm: 25.4, EU: '41.5' },
        { US: '8.5', cm: 25.9, EU: '42' },
        { US: '9', cm: 26.4, EU: '42.5' },
        { US: '9.5', cm: 26.7, EU: '32.5' },
        { US: '10', cm: 27.2, EU: '44' },
        { US: '10.5', cm: 27.7, EU: '44.5' },
        { US: '11', cm: 27.9, EU: '45.5' },
        { US: '11.5', cm: 28.4, EU: '46' },
        { US: '12', cm: 28.7, EU: '46.5' },
      ],
      mujer: [
        { US: '5', cm: 22.1, EU: '36' },
        { US: '5.5', cm: 22.6, EU: '36.5' },
        { US: '6', cm: 22.9, EU: '37.5' },
        { US: '6.5', cm: 23.4, EU: '38' },
        { US: '7', cm: 23.9, EU: '38.5' },
        { US: '7.5', cm: 24.1, EU: '39.5' },
        { US: '8', cm: 24.6, EU: '40' },
        { US: '8.5', cm: 24.9, EU: '40.5' },
        { US: '9', cm: 25.4, EU: '41.5' },
        { US: '9.5', cm: 25.9, EU: '42' },
      ],
      ninos: [
        { US: '1k', cm: 8.1, EU: '16' },
        { US: '1.5k', cm: 8.4, EU: '16.5' },
        { US: '2k', cm: 8.9, EU: 17 },
        { US: '2.5k', cm: 9.4, EU: '17.5' },
        { US: '3k', cm: 9.9, EU: '18' },
        { US: '3.5k', cm: 10.3, EU: '18.5' },
        { US: '4k', cm: 10.7, EU: '19' },
        { US: '4.5k', cm: 11, EU: '19.5' },
        { US: '5k', cm: 11.4, EU: '20' },
        { US: '5.5k', cm: 12.2, EU: '21' },
        { US: '6k', cm: 12.7, EU: '22' },
        { US: '7k', cm: 13.7, EU: '23.5' },
        { US: '7.5k', cm: 14, EU: '24' },
        { US: '8k', cm: 14.5, EU: '25' },
        { US: '8.5k', cm: 15, EU: '25.5' },
        { US: '9k', cm: 15.1, EU: '26' },
        { US: '9.5k', cm: 15.7, EU: '26.5' },
        { US: '10k', cm: 16, EU: '27' },
        { US: '10.5k', cm: 16.5, EU: '29' },
        { US: '11k', cm: 17, EU: '28.5' },
        { US: '11.5k', cm: 17.5, EU: '29' },
        { US: '12k', cm: 17.8, EU: '30' },
        { US: '12.5k', cm: 18.3, EU: '30.5' },
        { US: '13k', cm: 18.8, EU: '31' },
        { US: '13.5k', cm: 19.1, EU: '31.5' },
        { US: '1', cm: 19.6, EU: '32' },
        { US: '1.5', cm: 20.1, EU: '33' },
        { US: '2.5', cm: 20.8, EU: '34' },
        { US: '3', cm: 21.1, EU: '35' },
        { US: '3.5', cm: 21.6, EU: '35.5' },
        { US: '4', cm: 21.1, EU: '36' }
      ]
    },
    ropa: {
      hombre: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'],
      mujer: ['XXS', 'XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'],
      ninos: [
        '0-3 Meses', '3-6 Meses', '6-9 Meses', '9-12 Meses', '12-18 Meses',
        '1-2 años', '2-3 años', '3-4 años', '4-5 años', '5-6 años', '6-7 años',
        '7-8 años', '8-9 años', '9-10 años', '10-11 años', '11-12 años', '12-13 años',
        '13-14 años', '14-15 años', '15-16 años'
      ]
    },
    accesorios: "Talla única"
  }
}
