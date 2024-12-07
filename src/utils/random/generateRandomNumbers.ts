export function generateRandomNumbers(count: number): string {
  let randomNumbers = "";
  for (let i = 0; i < count; i++) {
    randomNumbers += Math.floor(Math.random() * 10); // Generates a single-digit number (0-9)
  }
  return randomNumbers;
}
