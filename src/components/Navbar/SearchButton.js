import LucideIcon from '@site/src/components/icons/LucideIcon';

export default function SearchButton() {
  return (
    <button
      type="button"
      className="ag-search-button"
      aria-label="Buscar en el manual (Ctrl+K)"
      onClick={() =>
        window.dispatchEvent(new CustomEvent('ag:open-command-palette'))
      }>
      <LucideIcon name="Search" size={16} />
      <span className="ag-search-button__label">Buscar</span>
      <kbd className="ag-search-button__kbd">Ctrl K</kbd>
    </button>
  );
}
