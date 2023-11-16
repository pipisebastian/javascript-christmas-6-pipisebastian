export const EVENT = Object.freeze({
  year: 2023,
  startDate: 1,
  endDate: 31,
  discountTriggerPrice: 10000,
});

export const VALIDATION = Object.freeze({
  minMenuCount: 1,
  maxMenuCount: 20,
});

export const DELIMITER = Object.freeze({
  orderDelimiter: ',',
  menuDelimiter: '-',
});

export const BADGE = Object.freeze({
  santa: {
    name: '산타',
    price: 20000,
  },
  tree: {
    name: '트리',
    price: 10000,
  },

  star: {
    name: '별',
    price: 5000,
  },
});

Object.freeze(BADGE.santa, BADGE.tree, BADGE.star);
