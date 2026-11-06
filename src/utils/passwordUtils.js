
const ITERATIONS = 600000;

function toBase64(bytes) {
  return btoa(String.fromCharCode(...bytes));
}

function fromBase64(value) {
  return Uint8Array.from(atob(value), char =>
    char.charCodeAt(0)
  );
}

async function derivePassword(password, salt) {
  const encoder = new TextEncoder();

  const keyMaterial = await crypto.subtle.importKey(
    "raw",
    encoder.encode(password),
    "PBKDF2",
    false,
    ["deriveBits"]
  );

  const bits = await crypto.subtle.deriveBits(
    {
      name: "PBKDF2",
      salt,
      iterations: ITERATIONS,
      hash: "SHA-256"
    },
    keyMaterial,
    256
  );

  return new Uint8Array(bits);
}

export async function hashPassword(password) {
  const salt = crypto.getRandomValues(
    new Uint8Array(16)
  );

  const hash = await derivePassword(password, salt);

  return {
    passwordHash: toBase64(hash),
    salt: toBase64(salt),
    iterations: ITERATIONS
  };
}

export async function verifyPassword(
  password,
  storedHash,
  storedSalt
) {
  const salt = fromBase64(storedSalt);

  const computedHash = await derivePassword(
    password,
    salt
  );

  const originalHash = fromBase64(storedHash);

  if (computedHash.length !== originalHash.length) {
    return false;
  }

  let difference = 0;

  for (let i = 0; i < computedHash.length; i++) {
    difference |= computedHash[i] ^ originalHash[i];
  }

  return difference === 0;
}
