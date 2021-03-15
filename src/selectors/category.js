export default (products = [], category) => {
  const productsWithOneCategory = products.filter(
    (productFoundWithCategory) => (
      productFoundWithCategory.categories.length !== 0
    ),
  );
  // Filter products with two categories
  const productsWithTwoCategories = products.filter(
    (productFoundWithCategory) => (
      productFoundWithCategory.categories.length === 2
    ),
  );
  // Filter products of one category with params
  const productsFilterWithFirstCategory = productsWithOneCategory.filter(
    // The trim() method removes whitespace from both ends of a string.
    (productFilter) => productFilter.categories[0].label.toLowerCase().trim() === category.trim(),
  );
  // Filter products of two categories with params
  const productsFilterWithSecondCategory = productsWithTwoCategories.filter(
    (productFilter) => (
      productFilter.categories[1].label.toLowerCase().trim() === category.trim()
    ),
  );
  return [...productsFilterWithFirstCategory, ...productsFilterWithSecondCategory];
};
