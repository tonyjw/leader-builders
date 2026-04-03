import lunr from 'lunr';

export function initializeSearch(serializedIndex: string) {
  const searchInput = document.getElementById('skill-search') as HTMLInputElement;
  const cards = document.querySelectorAll('.skill-card');
  const noResultsMessage = document.getElementById('no-results');
  const skillsGrid = document.getElementById('skills-grid');

  if (!searchInput) return;

  // Deserialize the Lunr index
  const index = lunr.Index.load(JSON.parse(serializedIndex));

  function performSearch() {
    const query = searchInput.value.trim();
    let visibleCount = 0;
    let matchedSlugs = new Set();

    if (query === '') {
      // Show all cards if search is empty
      cards.forEach(card => {
        (card as HTMLElement).style.display = '';
        visibleCount++;
      });
    } else {
      // Search using Lunr
      try {
        const results = index.search(query);
        matchedSlugs = new Set(results.map(r => r.ref));
      } catch (e) {
        // If Lunr query fails (e.g., special characters), fall back to empty results
        matchedSlugs = new Set();
      }

      cards.forEach(card => {
        const slug = (card as HTMLElement).dataset.slug;
        if (matchedSlugs.has(slug || '')) {
          (card as HTMLElement).style.display = '';
          visibleCount++;
        } else {
          (card as HTMLElement).style.display = 'none';
        }
      });
    }

    // Show/hide no results message
    if (noResultsMessage && skillsGrid) {
      if (visibleCount === 0 && query !== '') {
        noResultsMessage.style.display = 'block';
        skillsGrid.style.display = 'none';
      } else {
        noResultsMessage.style.display = 'none';
        skillsGrid.style.display = 'grid';
      }
    }
  }

  searchInput.addEventListener('input', performSearch);
}
