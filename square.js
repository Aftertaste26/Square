const square = (n, squares) => {
  squares = squares || [];
  if (squares[n]) return squares[n];
  if (n == 0) return 1;
  return (squares[n] = square(n - 1, squares) + square(n - 1, squares));
};

module.exports = { square };
