const z = require("zod");
const schema = z.string().email();

const response = schema.parse("asas@a.sas");
console.log(response);
console.log(response.error);
