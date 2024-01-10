const arr = [
    "1° Nível",
    ["2° Nível", 42, true],
    [
        ["3° Nível, 1° item", "Olá, mundo!"],
        ["3° Nível, 2° item", "Oi, mundão"],
    ],
    []
]

console.log(arr)
console.log(arr[0])
console.log(arr[1])
console.log(arr[1][2])
console.log(arr[2])
console.log(arr[2][0])
console.log(arr[2][1])

// Podemos ver claramente a estrutura de uma matriz em uma tabela
const matriz = [
    ["l1, c1", "l1, c2", "l1, c3", "l1, c4"],
    ["l2, c1", "l2, c2", "l2, c3", "l2, c4"],
    ["l3, c1", "l3, c2", "l3, c3", "l3, c4"],
  ]
  console.table(matriz)

  // Podemos usar vários níveis de laços FOR para iterar facilmente pela matriz
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      const elemento = matriz[i][j]
      console.log("Posição: (" + i + ", " + j + ") Valor: " + elemento)
    }
  }