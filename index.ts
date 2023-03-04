import { generateAuthenticationOptions } from "@simplewebauthn/server";

const options = generateAuthenticationOptions({});

console.log(options.challenge); // no type hint for challenge here
