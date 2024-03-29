const productos = [
    {
        id: 1,
        nombre: 'Nada es un error',
        ano: 2023,
        precio: 85000,
        foto: '/images/nada-es-un-error.jpg',
        descripcion: 'Arches Cold Press 300grs - Schminke Horadam Aquarell, Faber Castell Polychromos, estilógrafo.',
        formato: '20 x 30 cms.',
        autor: 'Corita Kent',
        categoria: ['caligrafia', 'lettering'],
        stock: 3
    },
    { 
      id: 2, 
      nombre: 'Arcadia',
      ano: 2023,
      precio: 120000, 
      foto: '/images/arcadia.jpg', 
      descripcion: 'Arches Cold Press 300grs - Schminke Horadam Aquarell, Faber Castell Polychromos, estilógrafo.', 
      formato: '17 x 32 cms.',
      autor: 'Arch Hades',
      categoria: ['caligrafia', 'lettering'],
      stock: 2 
    },
    { 
      id: 3, 
      nombre: 'Nunca sueño cuando duermo',
      ano: 2023,
      precio: 90000, 
      foto: '/images/nunca-sueno.jpg', 
      descripcion: 'Arches Cold Press 300grs - Schminke Horadam Aquarell, Faber Castell Polychromos, estilógrafo.', 
      formato: '20 x 30 cms.',
      autor: 'Joan Miró',
      categoria: ['caligrafia', 'lettering'],
      stock: 1 
    },
    { 
      id: 4, 
      nombre: 'A la vida le basta una grieta',
      ano: 2023,
      precio: 80000, 
      foto: '/images/a-la-vida-le-basta.jpg', 
      descripcion: 'Arches Cold Press 300grs - Schminke Horadam Aquarell, Faber Castell Polychromos, estilógrafo.', 
      formato: '20 x 30 cms.',
      autor: 'Ernesto Sábato',
      categoria: ['caligrafia', 'lettering'],
      stock: 3 
    },
    { 
      id: 5, 
      nombre: 'Callan las cuerdas',
      ano: 2023,
      precio: 80000, 
      foto: '/images/callan-las-cuerdas.jpg', 
      descripcion: 'Arches Cold Press 300grs - Schminke Horadam Aquarell, Faber Castell Polychromos, estilógrafo.', 
      formato: '20 x 30 cms.',
      autor: 'Jorge Luis Borges',
      categoria: ['caligrafia', 'lettering'],
      stock: 1
    },
    { 
      id: 6, 
      nombre: 'No corras más',
      ano: 2023,
      precio: 80000, 
      foto: '/images/no-corras-mas.jpg', 
      descripcion: 'Arches Cold Press 300grs - Schminke Horadam Aquarell, Faber Castell Polychromos, estilógrafo.', 
      formato: '20 x 30 cms.',
      autor: 'Luis Alberto Spinetta',
      categoria: ['caligrafia', 'lettering'],
      stock: 4
    },
    { 
      id: 7, 
      nombre: 'Amarte como el mar ése',
      ano: 2023,
      precio: 80000, 
      foto: '/images/poema.jpg', 
      descripcion: 'Arches Cold Press 300grs - Schminke Horadam Aquarell, Faber Castell Polychromos, estilógrafo.', 
      formato: '20 x 30 cms.',
      autor: 'Ine Sotomayor',
      categoria: ['caligrafia', 'lettering'],
      stock: 1
    },
    { 
      id: 8, 
      nombre: 'Sangre',
      ano: 2023,
      precio: 80000, 
      foto: '/images/sangre.jpg', 
      descripcion: 'Arches Cold Press 300grs - Schminke Horadam Aquarell, Faber Castell Polychromos, estilógrafo.', 
      formato: '20 x 30 cms.',
      autor: 'Los Visitantes',
      categoria: ['caligrafia', 'lettering'],
      stock: 5
    },
    { 
      id: 9, 
      nombre: 'Switch all of those screens',
      ano: 2023,
      precio: 80000, 
      foto: '/images/switch-screens.jpg', 
      descripcion: 'Arches Cold Press 300grs - Schminke Horadam Aquarell, Faber Castell Polychromos, estilógrafo.', 
      formato: '10 x 25 cms.',
      autor: 'Arch Hades',
      categoria: ['caligrafia', 'lettering'],
      stock: 1
    },
    { 
      id: 10, 
      nombre: 'Lena',
      ano: 2023,
      precio: 80000, 
      foto: '/images/lena.jpg', 
      descripcion: 'Arches Cold Press 300grs - Schminke Horadam Aquarell, Faber Castell Polychromos, estilógrafo.', 
      formato: '13 x 18 cms.',
      autor: 'Ine Sotomayor',
      categoria: 'lettering', 
      stock: 1
    },
    { 
      id: 11, 
      nombre: 'Serenity',
      ano: 2024,
      precio: 60000, 
      foto: '/images/serenity.jpg', 
      descripcion: 'Pieza de lettering realizada en Procreate, impresa en papel fine art o canvas.', 
      formato: '35 x 35 cms.',
      autor: 'Ine Sotomayor',
      categoria: ['lettering', 'lettering-digital'], 
      stock: 10
    },
    { 
      id: 12, 
      nombre: 'Rejuvenate',
      ano: 2024,
      precio: 60000, 
      foto: '/images/rejuvenate.jpg', 
      descripcion: 'Pieza de lettering realizada en Procreate, impresa en papel fine art o canvas.', 
      formato: '35 x 35 cms.',
      autor: 'Ine Sotomayor',
      categoria: ['lettering', 'lettering-digital'], 
      stock: 10
    },
    { 
      id: 13, 
      nombre: 'Curiosity',
      ano: 2024,
      precio: 60000, 
      foto: '/images/curiosity.jpg', 
      descripcion: 'Pieza de lettering realizada en Procreate, impresa en papel fine art o canvas.', 
      formato: '35 x 35 cms.',
      autor: 'Ine Sotomayor',
      categoria: ['lettering', 'lettering-digital'], 
      stock: 10
    },
    { 
      id: 14, 
      nombre: 'Clarity',
      ano: 2024,
      precio: 60000, 
      foto: '/images/clarity.jpg', 
      descripcion: 'Pieza de lettering realizada en Procreate, impresa en papel fine art o canvas.', 
      formato: '35 x 35 cms.',
      autor: 'Ine Sotomayor',
      categoria: ['lettering', 'lettering-digital'], 
      stock: 10
    },
    { 
      id: 15, 
      nombre: 'Flourish',
      ano: 2024,
      precio: 60000, 
      foto: '/images/flourish.jpg', 
      descripcion: 'Pieza de lettering realizada en Procreate, impresa en papel fine art o canvas.', 
      formato: '35 x 35 cms.',
      autor: 'Ine Sotomayor',
      categoria: ['caligrafia', 'lettering', 'lettering-digital'], 
      stock: 10
    },
    { 
      id: 16, 
      nombre: 'Harmony',
      ano: 2024,
      precio: 60000, 
      foto: '/images/harmony.jpg', 
      descripcion: 'Pieza de lettering realizada en Procreate, impresa en papel fine art o canvas.', 
      formato: '35 x 35 cms.',
      autor: 'Ine Sotomayor',
      categoria: ['lettering', 'lettering-digital'], 
      stock: 10
    },
    { 
      id: 17, 
      nombre: 'Prosper',
      ano: 2024,
      precio: 60000, 
      foto: '/images/prosper.jpg', 
      descripcion: 'Pieza de lettering realizada en Procreate, impresa en papel fine art o canvas.', 
      formato: '35 x 35 cms.',
      autor: 'Ine Sotomayor',
      categoria: ['lettering', 'lettering-digital'], 
      stock: 10
    },
    { 
      id: 18, 
      nombre: 'Courage',
      ano: 2024,
      precio: 60000, 
      foto: '/images/courage.jpg', 
      descripcion: 'Pieza de lettering realizada en Procreate, impresa en papel fine art o canvas.', 
      formato: '35 x 35 cms.',
      autor: 'Ine Sotomayor',
      categoria: ['lettering', 'lettering-digital'], 
      stock: 10
    },
    { 
      id: 19, 
      nombre: 'Joy',
      ano: 2024,
      precio: 60000, 
      foto: '/images/joy.jpg', 
      descripcion: 'Pieza de lettering realizada en Procreate, impresa en papel fine art o canvas.', 
      formato: '35 x 35 cms.',
      autor: 'Ine Sotomayor',
      categoria: ['lettering', 'lettering-digital'], 
      stock: 10
    },
    { 
      id: 20, 
      nombre: 'Believe',
      ano: 2024,
      precio: 60000, 
      foto: '/images/believe.jpg', 
      descripcion: 'Pieza de lettering realizada en Procreate, impresa en papel fine art o canvas.', 
      formato: '35 x 35 cms.',
      autor: 'Ine Sotomayor',
      categoria: ['lettering', 'lettering-digital'], 
      stock: 10
    },
    { 
      id: 21, 
      nombre: 'Illuminate',
      ano: 2024,
      precio: 60000, 
      foto: '/images/illuminate.jpg', 
      descripcion: 'Pieza de lettering realizada en Procreate, impresa en papel fine art o canvas.', 
      formato: '35 x 35 cms.',
      autor: 'Ine Sotomayor',
      categoria: ['caligrafia', 'lettering', 'lettering-digital'], 
      stock: 10
    },
    { 
      id: 22, 
      nombre: 'Hope',
      ano: 2024,
      precio: 60000, 
      foto: '/images/hope.jpg', 
      descripcion: 'Pieza de lettering realizada en Procreate, impresa en papel fine art o canvas.', 
      formato: '35 x 35 cms.',
      autor: 'Ine Sotomayor',
      categoria: ['lettering', 'lettering-digital'], 
      stock: 10
    },
    { 
      id: 23, 
      nombre: 'Cuatro plantas',
      ano: 2024,
      precio: 60000, 
      foto: '/images/plantas-4.jpg', 
      descripcion: 'Ilustración realizada en Procreate, impresa en papel fine art o canvas.', 
      formato: '35 x 35 cms.',
      autor: 'Ine Sotomayor',
      categoria: 'ilustracion', 
      stock: 10
    },
    { 
      id: 24, 
      nombre: 'Ficus',
      ano: 2024,
      precio: 60000, 
      foto: '/images/plantas-3.jpg', 
      descripcion: 'Ilustración realizada en Procreate, impresa en papel fine art o canvas.', 
      formato: '35 x 35 cms.',
      autor: 'Ine Sotomayor',
      categoria: 'ilustracion', 
      stock: 10
    },
    { 
      id: 25, 
      nombre: 'Suculenta 1',
      ano: 2024,
      precio: 60000, 
      foto: '/images/plantas-2.jpg', 
      descripcion: 'Ilustración realizada en Procreate, impresa en papel fine art o canvas.', 
      formato: '35 x 35 cms.',
      autor: 'Ine Sotomayor',
      categoria: 'ilustracion', 
      stock: 10
    },
    { 
      id: 26, 
      nombre: 'Suculenta 2',
      ano: 2024,
      precio: 60000, 
      foto: '/images/plantas-1.jpg', 
      descripcion: 'Ilustración realizada en Procreate, impresa en papel fine art o canvas.', 
      formato: '35 x 35 cms.',
      autor: 'Ine Sotomayor',
      categoria: 'ilustracion', 
      stock: 10
    },
]

const traerProductos = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000) // Delay de 2 seg. para simular carga
  })
  
  export default traerProductos