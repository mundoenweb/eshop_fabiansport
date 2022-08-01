// tomar lo parametros y realizar la consulta a la api. 
export const formFilterProductsUser = (e, router, pag = 1) => {
  const form = e.target.parentElement.parentElement
  let params = ""
  for (const element of form) {
    if (!element.value) continue
    if (element.name == "ordenarPor") {
      if (element.value == "1") params += 'relevancia/'
      else if (element.value == "2") params += 'menorprecio/'
      else if (element.value == "3") params += 'mayorprecio/'
      continue
    }
    if (element.name == "genero" && element.options[element.selectedIndex].innerText == "niños") {
      params += 'ninos/'
      continue
    }
    if (element.name == "genero" && element.options[element.selectedIndex].innerText == "niñas") {
      params += 'ninas/'
      continue
    }
    params += `${element.options[element.selectedIndex].innerText}/`
  }

  if (params) {
    params = params.substring(0, params.length - 1)
    params += `?pag=1`
    // return
    router.push(`/productos/${params}`)
  } else router.push(`/productos/todos`)

}

const filters = {
  hombre: { id: 1, name: "genero" },
  mujer: { id: 2, name: "genero" },
  ninos: { id: 3, name: "genero" },
  ninas: { id: 4, name: "genero" },

  calzado: { id: 1, name: "linea" },
  ropa: { id: 2, name: "linea" },
  accesorios: { id: 3, name: "linea" },

  zapatillas: { id: 1, name: "categoria" },
  botin: { id: 2, name: "categoria" },
  futbol: { id: 3, name: "categoria" },
  todo: { id: 4, name: "categoria" },
  sandalias: { id: 5, name: "categoria" },

  adidas: { id: 1, name: "marca" },
  nike: { id: 2, name: "marca" },
  converse: { id: 3, name: "marca" },
  dc: { id: 4, name: "marca" },
  "hi-tec": { id: 5, name: "marca" },
  merrell: { id: 6, name: "marca" },
  cat: { id: 7, name: "marca" },
  reebok: { id: 8, name: "marca" },
  salomon: { id: 9, name: "marca" },
  umbro: { id: 10, name: "marca" },
  columbia: { id: 11, name: "marca" },
  fila: { id: 12, name: "marca" },
  lippi: { id: 13, name: "marca" },
  "the-north-face": { id: 14, name: "marca" },
  puma: { id: 15, name: "marca" },

  ordenarPor: [
    { id: 1, name: "Relevancia" },
    { id: 2, name: "Menor precio" },
    { id: 3, name: "Mayor Precio" }
  ],
}
// crea 2 objetos, el primero es el que se envia al servidor para su consulta
// y el segundo se pasa como propiedad para actualizar los valores del de los select en el filtro
const objSEO = {
  hombre: {
    canonical: "hombre",
    title: `${process.env.SITE_NAME} | Hombre`,
    url: `${process.env.WEB}/productos/hombre`,
    description: "Compra ropa, tenis y accesorios para hombre, encuentra todo para crear tu look casual deportivo y/o entrenar con tecnología, diseño y confort",
    images: [
      {
        url: `${process.env.WEB}/images/face_hombre_1.jpg`,
        width: 998,
        height: 522,
        alt: "fs_hombre",
      },
      {
        url: `${process.env.WEB}/images/face_hombre_1.jpg`,
        width: 998,
        height: 522,
        alt: "fs_hombre",
      }
    ],
  },
  mujer: {
    canonical: "mujer",
    title: `${process.env.SITE_NAME} | Mujer`,
    url: `${process.env.WEB}/productos/mujer`,
    description: "Compra ropa, tenis y accesorios para mujer, encuentra todo para crear tu look casual deportivo y/o entrenar con tecnología, diseño y confort",
    images: [
      {
        url: `${process.env.WEB}/images/face_mujer_1.jpg`,
        width: 998,
        height: 522,
        alt: "fs_mujer",
      },
      {
        url: `${process.env.WEB}/images/face_mujer_1.jpg`,
        width: 998,
        height: 522,
        alt: "fs_mujer",
      }
    ],
  },
  ninos: {
    canonical: "ninos",
    title: `${process.env.SITE_NAME} | Para Niños`,
    url: `${process.env.WEB}/productos/ninos`,
    description: "Compra ropa tenis y accesorios para niños, encuentra todo para que empiecen su vida deportiva o luzcan con estilo todos los días",
    images: [
      {
        url: `${process.env.WEB}/images/face_ninos_1.jpg`,
        width: 998,
        height: 522,
        alt: "fs_niños",
      },
      {
        url: `${process.env.WEB}/images/face_ninos_1.jpg`,
        width: 998,
        height: 522,
        alt: "fs_niños",
      }
    ],
  },
  descuento: {
    canonical: "descuento",
    title: `${process.env.SITE_NAME} | Ofertas`,
    url: `${process.env.WEB}/productos/descuento`,
    description: "¡Bienvenido! Aquí encontrarás todas las ofertas y promociones que fabian sport tiene para ti, y toda tu familia",
    images: [
      {
        url: `${process.env.WEB}/images/face_ofertas_2.jpg`,
        width: 998,
        height: 522,
        alt: "fs_ofertas",
      },
      {
        url: `${process.env.WEB}/images/face_ofertas_2.jpg`,
        width: 998,
        height: 522,
        alt: "fs_ofertas",
      }
    ],
  },
  ropa: {
    canonical: "ropa",
    title: `${process.env.SITE_NAME} | Ropa`,
    url: `${process.env.WEB}/productos/ropa`,
    description: "Descubre la ropa que fabian sport tiene para ofrecerte en esta sección. Polos, casacas, chimpunes y mucho más.",
    images: [
      {
        url: `${process.env.WEB}/images/face_ropa_1.jpg`,
        width: 998,
        height: 522,
        alt: "fs_ropas",
      },
      {
        url: `${process.env.WEB}/images/face_ropa_1.jpg`,
        width: 998,
        height: 522,
        alt: "fs_ropas",
      }
    ],
  },
  accesorios: {
    canonical: "accesorios",
    title: `${process.env.SITE_NAME} | Accesorios`,
    url: `${process.env.WEB}/productos/accesorios`,
    description: "Encuentra en esta sección todos los accesorios que fabian sport tiene para ofrecerte. Medias, pelotas de fútbol, canilleras y más. Obtén lo que necesitas.",
    images: [
      {
        url: `${process.env.WEB}/images/face_accesorios_1.jpg`,
        width: 998,
        height: 522,
        alt: "fs_accesorios",
      },
      {
        url: `${process.env.WEB}/images/face_accesorios_1.jpg`,
        width: 998,
        height: 522,
        alt: "fs_accesorios",
      }
    ],
  },
  calzado: {
    canonical: "calzado",
    title: `${process.env.SITE_NAME} | Zapatos`,
    url: `${process.env.WEB}/productos/calzado`,
    description: "Encuentra zapatos para tus deportes favoritos como running, gym, chimpunes o zapatillas de estilo urbano, con la tecnología y diseño de tus marcas favoritas",
    images: [
      {
        url: `${process.env.WEB}/images/face_calzado_1.jpg`,
        width: 998,
        height: 522,
        alt: "fs_calzados",
      },
      {
        url: `${process.env.WEB}/images/face_calzado_1.jpg`,
        width: 998,
        height: 522,
        alt: "fs_calzados",
      }
    ],
  },
}

export const filterProductsUserSSR = query => {
  return new Promise((resolve, reject) => {
    const pageActual = parseInt(`${query.pag}`, 10) || 1
    let params = { descuento: 0, pageActual, stock: 0, relevancia: 0, params: [] }
    let paramsForm = { ordenarPor: 0, descuento: 0, genero: 0, categoria: 0, marca: 0 }
    let SEO
    switch (query.param[0]) {
      case 'hombre':
        SEO = objSEO.hombre
        break;
      case 'mujer':
        SEO = objSEO.mujer
        break;
      case 'ninos':
        SEO = objSEO.ninos
        break;
      case 'ninas':
        SEO = objSEO.ninos
        break;
      case 'descuento':
        SEO = objSEO.descuento
        break;
      case 'ropa':
        SEO = objSEO.ropa
        break;
      case 'accesorios':
        SEO = objSEO.accesorios
        break;
      case 'calzado':
        SEO = objSEO.calzado
        break;
      default:
        SEO = null
        break;
    }
    try {
      for (const param of query.param) {
        switch (param) {
          case "todos":
            params = `page=${pageActual}`
            break
          case "descuento":
            params.descuento = 1
            paramsForm.descuento = 1
            params.todos = 0
            break;
          case "relevancia":
            params.relevancia = 1
            paramsForm.ordenarPor = 1
            params.todos = 0
            break
          case "menorprecio":
            params.relevancia = 2
            paramsForm.ordenarPor = 2
            params.todos = 0
            break
          case "mayorprecio":
            params.relevancia = 3
            paramsForm.ordenarPor = 3
            params.todos = 0
            break
          default:
            params.params.push({ valor: filters[param].id, campo: filters[param].name })
            paramsForm[filters[param].name] = filters[param].id
            params.todos = 0
            break;
        }
      }
      return resolve({ paramsForm, params, SEO })
    } catch (err) {
      return resolve({ paramsForm, params: "page=1", SEO })
      
    }
  })
  

}
