interface Options {
  unit: 'px' | 'pt' | '%' | 'none';
}

type FibonacciKey =
  | 1
  | 2
  | 3
  | 5
  | 8
  | 13
  | 21
  | 34
  | 55
  | 89
  | 144
  | 233
  | 377
  | 610
  | 987
  | 1597
  | 2584;

type FibonacciSpacing = Record<FibonacciKey, string>;

const FIBONACCI: FibonacciKey[] = [
  1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584,
];

/**
 * Returns Fibonacci Spacing based on the options.
 */
export const getFibonacciSpacing = (options?: Options): FibonacciSpacing => {
  const { unit = 'px' } = options;

  return FIBONACCI.reduce(
    (o, val) => ({
      ...o,
      [val]: `${val}${unit === 'none' ? '' : unit}`,
    }),
    {}
  ) as FibonacciSpacing;
};
