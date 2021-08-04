const nodeRSA = require("node-rsa");

let secret = "this is secret";

// let encryptedString = key.encrypt(secret, "base64");
// console.log(encryptedString);

// let decryptedString = key.decrypt(encryptedString, "utf8");
// console.log(decryptedString);

// let pub_key = key.exportKey("public");
// let pri_key = key.exportKey("private");

let pub_key =
  "-----BEGIN PUBLIC KEY-----\n" +
  "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCv92Yu4RrOeV/TpcT/aOFhFVG/\n" +
  "yOvwpXEobSSKTM5bkLxjaE3Dfab+4i+iwIRicxyZkZ/U3TEYAXZu1DW5CJW7RECN\n" +
  "3xoyC8x6nDkdv3TtGjnTnDzpCBjmrpIAMQw8Fuw4lvZ6PF4Q6mtvW5Si51mNj83h\n" +
  "KV0nAuvWtnuMlCPp0wIDAQAB\n" +
  "-----END PUBLIC KEY-----";

let pri_key =
  "-----BEGIN RSA PRIVATE KEY-----\n" +
  "MIICXgIBAAKBgQCv92Yu4RrOeV/TpcT/aOFhFVG/yOvwpXEobSSKTM5bkLxjaE3D\n" +
  "fab+4i+iwIRicxyZkZ/U3TEYAXZu1DW5CJW7RECN3xoyC8x6nDkdv3TtGjnTnDzp\n" +
  "AoGASZJN1eHmPFfA+hPAFu259cZdJKuUAkyZ0EY51d0hFmWgbouon8jEbqMROaH2\n" +
  "d9cbKRYa1nwYz6mk49e0EoYFW9Hfj4FTMxF4gGqbdGvmSPKfn5upZR/Y2lIBEONe\n" +
  "2G86D1zvx0mWzEHpf3ud2HIoR4iQGThzCRLkefZE3Imwc4ECQQDi8asFfjrvc3wX\n" +
  "NIKEYHwgqICJADjC288YUqhJjYJrGa1SQh66qbsg1FS14qlqpnk3RUmrHAte7HqN\n" +
  "VkvAvvSTAkEAxn7isTkwuJcMtc6RWip0RhHlnPVIu2ygWNfroJrbqMpwOKHk5beu\n" +
  "ZYXJ0ButdLuVkQhPEDHT5gR0AXf3Vw+9wQJBAJarB3XwJkSPEVV+oSAtxnsQI7XR\n" +
  "Fd4YfNeTGPMsJefg9jbkeu5GfVwAW/UddIi/2T4enBgj2FC/A2YOYuCmZk0CQQCa\n" +
  "Eqd3lMLCpUySWnLsoAN82Ct4d9Qq1xhnncIh+dIC5I/TBaccwES4PO73gGRVNb3U\n" +
  "w7RLB8JIyrAY67urcmaBAkEAn4OGou05FNhSMvAkPvyMVh9asoQF0Q1O6LtYevJm\n" +
  "Ah3nr88Nyim2venplMPGYO6Kplx6ibs5FQyft8vy3Mt7sw==\n" +
  "-----END RSA PRIVATE KEY-----";

let key_pri = new nodeRSA(pri_key);
let key_pub = new nodeRSA(pub_key);

// Public key for encryption
let encryptedString = key_pub.encrypt(secret, "base64");
console.log(encryptedString);

// Private key for decryption
let decryptedString = key_pri.decrypt(encryptedString, "utf8");
console.log(decryptedString);
