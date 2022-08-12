
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let len = matrix.length;
  if (!matrix || len <= 0) {
    return [];}

  for (let i = 0; i < len; i++) {
    if (i % 2 != 0) {
      matrix[i] = matrix[i].reverse();
    } let res = [].concat(matrix[i]);}
  return res;
}
