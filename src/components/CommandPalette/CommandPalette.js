import {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {usePluginData} from '@docusaurus/useGlobalData';
import {useHistory} from '@docusaurus/router';
import LucideIcon from '@site/src/components/icons/LucideIcon';

const CATEGORY_ORDER = [
  'Autenticación',
  'Administración',
  'Logística',
  'Nomenclaturas',
  'Seguridad',
  'Reportes',
  'Calidad',
  'Configuración',
  'Perfil',
  'Acerca del Sistema',
  'General',
];

function normalize(value) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

function getEntries(pluginData) {
  return pluginData?.entries ?? [];
}

function scoreEntry(entry, tokens) {
  const title = normalize(entry.title);
  const headings = normalize((entry.headings ?? []).join(' '));
  const text = normalize(entry.text ?? '');
  const category = normalize(entry.category ?? '');
  let score = 0;

  for (const token of tokens) {
    if (title.includes(token)) {
      score += 8;
    } else if (headings.includes(token)) {
      score += 4;
    } else if (category.includes(token)) {
      score += 2;
    } else if (text.includes(token)) {
      score += 1;
    } else {
      return -1;
    }
  }

  return score;
}

function getSnippet(entry, tokens) {
  const source =
    (entry.headings ?? []).find((heading) =>
      tokens.some((token) => normalize(heading).includes(token)),
    ) ?? entry.text ?? '';
  const normalizedSource = normalize(source);
  const tokenIndex = tokens.reduce(
    (found, token) => {
      const index = normalizedSource.indexOf(token);
      return index >= 0 && (found < 0 || index < found) ? index : found;
    },
    -1,
  );

  if (tokenIndex < 0 || source.length <= 90) {
    return source;
  }

  const start = Math.max(0, tokenIndex - 30);
  const end = Math.min(source.length, tokenIndex + 60);
  return `${start > 0 ? '…' : ''}${source.slice(start, end)}${
    end < source.length ? '…' : ''
  }`;
}

function groupResults(results) {
  const groups = new Map();
  for (const result of results) {
    if (!groups.has(result.entry.category)) {
      groups.set(result.entry.category, []);
    }
    groups.get(result.entry.category).push(result);
  }

  return [...groups.entries()].sort(
    ([categoryA], [categoryB]) =>
      CATEGORY_ORDER.indexOf(categoryA) - CATEGORY_ORDER.indexOf(categoryB),
  );
}

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef(null);
  const dialogRef = useRef(null);
  const previousFocusRef = useRef(null);
  const history = useHistory();
  const pluginData = usePluginData('local-search-index');
  const entries = useMemo(() => getEntries(pluginData), [pluginData]);

  const tokens = useMemo(
    () => normalize(query).split(/\s+/).filter(Boolean),
    [query],
  );

  const results = useMemo(() => {
    if (tokens.length === 0) {
      return entries.slice(0, 12).map((entry) => ({entry, score: 0}));
    }
    return entries
      .map((entry) => ({entry, score: scoreEntry(entry, tokens)}))
      .filter((result) => result.score >= 0)
      .sort((a, b) => b.score - a.score || a.entry.title.localeCompare(b.entry.title))
      .slice(0, 20);
  }, [entries, tokens]);

  const groups = useMemo(() => groupResults(results), [results]);

  const close = useCallback(() => {
    setOpen(false);
    setQuery('');
    setActiveIndex(0);
    previousFocusRef.current?.focus?.();
  }, []);

  const navigateTo = useCallback(
    (result) => {
      if (!result) {
        return;
      }
      close();
      history.push(result.entry.permalink);
    },
    [close, history],
  );

  const openPalette = useCallback(() => {
    previousFocusRef.current = document.activeElement;
    setOpen(true);
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        openPalette();
      }
    };
    const onOpenRequest = () => openPalette();

    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('ag:open-command-palette', onOpenRequest);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('ag:open-command-palette', onOpenRequest);
    };
  }, [openPalette]);

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    inputRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  const onDialogKeyDown = (event) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      close();
      return;
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setActiveIndex((index) => Math.min(index + 1, results.length - 1));
      return;
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      setActiveIndex((index) => Math.max(index - 1, 0));
      return;
    }

    if (event.key === 'Enter') {
      event.preventDefault();
      navigateTo(results[activeIndex]);
      return;
    }

    if (event.key === 'Tab') {
      const focusable = dialogRef.current?.querySelectorAll(
        'input, button:not([disabled])',
      );
      if (!focusable?.length) {
        return;
      }
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  };

  if (!open) {
    return null;
  }

  let flatIndex = -1;

  return (
    <div
      className="ag-command-overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          close();
        }
      }}>
      <div
        className="ag-command-dialog"
        role="dialog"
        aria-modal="true"
        aria-label="Búsqueda global del manual"
        ref={dialogRef}
        onKeyDown={onDialogKeyDown}>
        <div className="ag-command-input-row">
          <LucideIcon name="Search" size={20} className="ag-command-search-icon" />
          <input
            ref={inputRef}
            className="ag-command-input"
            type="search"
            value={query}
            placeholder="Buscar en el manual…"
            aria-label="Buscar en el manual"
            onChange={(event) => setQuery(event.target.value)}
          />
          <kbd className="ag-command-kbd">Esc</kbd>
        </div>

        <div className="ag-command-results" role="listbox">
          {results.length === 0 ? (
            <div className="ag-command-empty">
              No encontramos resultados para «{query}». Prueba con otro término.
            </div>
          ) : (
            groups.map(([category, items]) => (
              <div className="ag-command-group" key={category}>
                <div className="ag-command-group-title">{category}</div>
                {items.map((result) => {
                  flatIndex += 1;
                  const index = flatIndex;
                  return (
                    <button
                      type="button"
                      role="option"
                      aria-selected={index === activeIndex}
                      className={`ag-command-result ${
                        index === activeIndex ? 'ag-command-result--active' : ''
                      }`}
                      key={result.entry.permalink}
                      onMouseEnter={() => setActiveIndex(index)}
                      onClick={() => navigateTo(result)}>
                      <span className="ag-command-result-title">
                        {result.entry.title}
                      </span>
                      <span className="ag-command-result-snippet">
                        {getSnippet(result.entry, tokens)}
                      </span>
                    </button>
                  );
                })}
              </div>
            ))
          )}
        </div>

        <div className="ag-command-footer">
          <span>
            <kbd className="ag-command-kbd">↑</kbd>
            <kbd className="ag-command-kbd">↓</kbd> Navegar
          </span>
          <span>
            <kbd className="ag-command-kbd">↵</kbd> Abrir
          </span>
          <span>
            <kbd className="ag-command-kbd">Esc</kbd> Cerrar
          </span>
        </div>
      </div>
    </div>
  );
}
