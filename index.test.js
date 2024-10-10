//Não faça nada neste arquivo
const { execSync } = require('child_process');

test('verifica a saída da função cumprimentar', () => {
  const output = execSync('node index.js').toString();
  const expectedOutput = "Olá Maria!\n";
  expect(output).toBe(expectedOutput);
});
