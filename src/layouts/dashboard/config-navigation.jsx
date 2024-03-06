import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'movies',
    path: '/',
    icon: icon('ic_movie'),
  },
  {
    title: 'my favorite',
    path: '/favorite',
    icon: icon('ic_heart'),
  },
  {
    title: 'logout',
    path: '/#',
    icon: icon('ic_lock'),
  },
];

export default navConfig;
