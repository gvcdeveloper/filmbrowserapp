export const categoryClassMapper = (
  classPrefix: string,
  categories: string[]
) => {
  if (categories.length === 0) {
    return { default: `${classPrefix}--default` };
  }

  return categories.reduce(
    (acc, category) => ({
      ...acc,
      [category.toLowerCase()]: `${classPrefix}--${category.toLowerCase()}`,
    }),
    {}
  );
};
