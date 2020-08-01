function sum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw TypeError("Both arguments must be numbers");
  }

  return a + b;
}

module.exports = sum;
