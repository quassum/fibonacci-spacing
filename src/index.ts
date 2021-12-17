type Unit = 'px' | 'pt' | '%' | 'rem' | 'none' | string;

interface Options<S extends Unit> {
  unit?: S;
  invert?: boolean;
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

type FibonacciSpacing<S extends Unit> = {
  [K in FibonacciKey]: `${K}${S}`;
};

const FIBONACCI: FibonacciKey[] = [
  1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584,
];

/**
 * Returns Fibonacci Spacing based on the options.
 */
export const getFibonacciSpacing = <S extends Unit>(
  options?: Options<S>
): FibonacciSpacing<S> => {
  const { unit = 'px', invert } = options;

  return FIBONACCI.reduce(
    (o, val) => ({
      ...o,
      [val]: `${invert ? (1 / val).toString().replace(/\.?\0+$/, '') : val}${
        unit === 'none' ? '' : unit
      }`,
    }),
    {}
  ) as FibonacciSpacing<S>;
};
