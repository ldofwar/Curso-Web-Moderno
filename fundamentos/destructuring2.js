const [a] = [10]
console.log(a)
const [n1, , n3, , n5, n6 = 0] = [a, 5, 7, 8]
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[, 8, 9], [5, 3, 8]]
console.log(nota)