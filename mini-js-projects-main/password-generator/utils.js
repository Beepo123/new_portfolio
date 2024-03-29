const alphabet = Array.from({length: 26}, (_, i) => String.fromCharCode(97 + i) + String.fromCharCode(65 + i));
const numbers = Array.from({length: 10}, (_, i) => i);
const specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', ';', ':', '"', "'", '<', '>', ',', '.', '/', '?', '`', '~'];

function generatePassword(length, charSet) {
  let password = '';

  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * charSet.length);
    password += charSet[index];
  }

  return password;
}

export function generateWeakPass() {
  return generatePassword(8, numbers);
}

export function generateAvgPass() {
  const charSet = [...numbers, ...alphabet];
  return generatePassword(12, charSet);
}

export function generateStrongPass() {
  const charSet = [...numbers, ...alphabet, ...specialCharacters];
  return generatePassword(16, charSet);
}
