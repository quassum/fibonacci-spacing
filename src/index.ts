interface Options {
  unit: 'px' | 'pt' | '%' | 'none';
}

const FIBONACCI = [
  1, 2, 3, 5, 8, 12, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584,
];

/**
 * Returns Fibonacci Spacing based on the options.
 */
export const getFibonacciSpacing = (options?: Options) => {
  const { unit = 'px' } = options;
  return FIBONACCI.map((value) => `${value}${unit === 'none' ? '' : unit}`);
};
