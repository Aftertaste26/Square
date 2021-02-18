const square = (n, squares) => {
  squares = squares || [];
  if (squares[n]) return squares[n];
  if (n <= 1) return 1;
  return (squares[n] = square(n - 1, squares) + n + n - 1);
};

module.exports = { square };
