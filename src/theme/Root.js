import {useEffect} from 'react';
import {useLocation} from '@docusaurus/router';
import '@site/src/css/sidebar.css';
import '@site/src/css/command-palette.css';
import CommandPalette from '@site/src/components/CommandPalette/CommandPalette';

const SCROLL_THRESHOLD = 12;
const REVEAL_SELECTOR =
  '.theme-doc-markdown > :is(h2, h3, h4, p, ul, ol, table, blockquote, pre, .theme-code-block)';

export default function Root({children}) {
  const {pathname} = useLocation();
  useEffect(() => {
    const updateScrollState = () => {
      const scrolled = window.scrollY > SCROLL_THRESHOLD;
      document.documentElement.dataset.scrolled = String(scrolled);
      document
        .querySelector('.navbar')
        ?.setAttribute('data-scrolled', String(scrolled));
    };

    updateScrollState();
    window.addEventListener('scroll', updateScrollState, {passive: true});
    window.addEventListener('resize', updateScrollState);

    return () => {
      window.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, []);

  useEffect(() => {
    if (
      typeof IntersectionObserver === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return undefined;
    }

    let observer;
    let contentObserver;
    let readyObserver;

    const markReady = () => {
      if (!document.documentElement.classList.contains('ag-reveal-ready')) {
        document.documentElement.classList.add('ag-reveal-ready');
      }
    };

    const attach = () => {
      if (observer) {
        return true;
      }
      const blocks = document.querySelectorAll(REVEAL_SELECTOR);
      if (blocks.length === 0) {
        return false;
      }

      markReady();
      readyObserver = new MutationObserver(markReady);
      readyObserver.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['class'],
      });
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) {
              continue;
            }
            entry.target.classList.remove('ag-reveal-pending');
            entry.target.classList.add('ag-reveal-visible');
            observer.unobserve(entry.target);
          }
        },
        {rootMargin: '0px 0px -8% 0px', threshold: 0.08},
      );
      blocks.forEach((block) => {
        block.classList.add('ag-reveal-pending');
        observer.observe(block);
      });
      return true;
    };

    if (!attach()) {
      contentObserver = new MutationObserver(() => {
        if (attach()) {
          contentObserver.disconnect();
        }
      });
      contentObserver.observe(document.body, {childList: true, subtree: true});
    }

    return () => {
      contentObserver?.disconnect();
      readyObserver?.disconnect();
      observer?.disconnect();
    };
  }, [pathname]);

  return (
    <>
      <CommandPalette />
      {children}
    </>
  );
}
