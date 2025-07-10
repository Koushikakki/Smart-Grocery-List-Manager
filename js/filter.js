function setupFilters(items) {
  const searchInput = document.getElementById('search');
  const categorySelect = document.getElementById('category-filter');

  function filterAndRender() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categorySelect.value;

    const filteredItems = items.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm);
      const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    renderList(filteredItems);
  }

  searchInput.addEventListener('input', filterAndRender);
  categorySelect.addEventListener('change', filterAndRender);
}
