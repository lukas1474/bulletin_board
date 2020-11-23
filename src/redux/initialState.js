export const initialState = {
  posts: {
    data: [
      {
        id: 1,
        author: `Jan Latkowski`,
        title: `Imprimatur`,
        description: `imperare sibi maximum imperium est.`,
        status: 'published',
        date: '2020-11-22 at 15:55',
      },
      {
        id: 2,
        author: `Anna Łoza`,
        title: `Secretum`,
        description: `Adversus stímulum calcitrare.`,
        status: 'draft',
      },
      {
        id: 3,
        author: `Anna Łoza`,
        title: `Veritas`,
        description: `Amicos res secundae parant, res adversae prabant.`,
        status: 'draft',
      },
      {
        id: 4,
        author: `Janusz Galant`,
        title: `Mysterium`,
        description: `Balnea, vina, venus corrumpunt corpora nostra, sed vitam feciunt balnea, vina, venus.`,
        status: 'published',
      },
      {
        id: 72,
        author: `Tomasz Ciupak`,
        title: `Uniqom`,
        description: `Barba crescit, caput nescit`,
        status: 'closed',
      },
    ],
    loading: {
      active: false,
      error: false,
    },
  },
  users: {
    data: [
      {
        id: 101,
        name: `Niezalogowany`,
        role: `Not Logged`,
        active: false,
      },
      {
        id: 102,
        name: `Jan Latkowski`,
        role: `Logged`,
        active: true,
      },
      {
        id: 103,
        name: `Anna Łoza`,
        role: `Logged`,
        active: true,
      },
      {
        id: 104,
        name: `Administrator`,
        role: `Admin`,
        active: true,
      },
    ],
    activeUser: {
      id: 101,
      name: `Niezalogowany`,
      role: `Not Logged`,
      active: false,
    },
  },
};
