import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import LucideIcon from '@site/src/components/icons/LucideIcon';

export default function BackofficeButton() {
  const {siteConfig} = useDocusaurusContext();
  const href =
    siteConfig.customFields?.backofficeUrl ?? 'https://agrimpex.eicma.cu';

  return (
    <a className="navbar__link ag-backoffice-button" href={href}>
      <LucideIcon name="LogIn" size={16} />
      <span>Volver al sistema</span>
    </a>
  );
}
