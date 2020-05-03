const {
  Fastfood,
  Cake,
  School,
  Computer,
  Spa,
  Store,
  PersonPinCircle,
} = require('styled-icons/material-rounded');
const { Hammer, Heartbeat } = require('styled-icons/fa-solid');

const categories = [
  {
    title: 'Alimentação',
    slug: 'alimentacao',
    color: '#f26419',
    subcategories: ['Caldos e sopas', 'Churrasco', 'Comida caseira'],
    icon: Fastfood,
  },
  {
    title: 'Confeitaria',
    slug: 'confeitaria',
    color: '#472d30',
    subcategories: ['Bolos', 'Doces'],
    icon: Cake,
  },
  {
    title: 'Construção e reformas',
    slug: 'construcao_e_reformas',
    color: '#283845',
    subcategories: ['Vidraçaria'],
    icon: Hammer,
  },

  {
    title: 'Educação',
    slug: 'educacao',
    color: '#0466c8',
    subcategories: ['Aulas particulares'],
    icon: School,
  },

  {
    title: 'Estética e Beleza',
    slug: 'estetica_e_beleza',
    color: '#00a896',
    subcategories: [],
    icon: Spa,
  },

  {
    title: 'Informática',
    slug: 'informatica',
    color: '#50514f',
    subcategories: ['Recarga de cartuchos'],
    icon: Computer,
  },

  {
    title: 'Lojas e Comércios',
    slug: 'lojas_e_comercios',
    color: '#f25f5c',
    subcategories: ['Açougue e casa de carnes'],
    icon: Store,
  },
  {
    title: 'Saúde',
    slug: 'saude',
    color: '#B30000',
    subcategories: ['Psicologia'],
    icon: Heartbeat,
  },
  {
    title: 'Serviços Profissionais',
    slug: 'servicos_profissionais',
    color: '#9e0059',
    subcategories: ['Fotografia e filmagem', 'Insulfilm'],
    icon: PersonPinCircle,
  },
];

module.exports = categories;
