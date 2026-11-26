import OriginalCategory from '@theme-original/DocSidebarItem/Category';

const LABEL_TO_ICON = {
  Autenticación: 'LogIn',
  Administración: 'ClipboardList',
  Logística: 'Truck',
  Nomenclaturas: 'Boxes',
  Seguridad: 'Shield',
  Reportes: 'BarChart3',
  Calidad: 'Info',
  Configuración: 'Settings2',
  Perfil: 'UserRound',
  'Acerca del Sistema': 'BookOpen',
};

export default function Category(props) {
  const {item} = props;
  const icon = item.customProps?.icon ?? LABEL_TO_ICON[item.label];
  if (!icon) {
    return <OriginalCategory {...props} />;
  }

  const className = [
    item.className,
    'ag-sidebar-category',
    `ag-sidebar-category--${icon.toLowerCase()}`,
  ]
    .filter(Boolean)
    .join(' ');

  return <OriginalCategory {...props} item={{...item, className}} />;
}
