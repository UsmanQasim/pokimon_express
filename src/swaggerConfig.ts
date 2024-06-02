import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Pokemon API",
      version: "1.0.0",
      description: "A simple Express Pokemon API",
    },
  },
  apis: ["./routes/*.ts"], // Adjust the path if needed
};

const swaggerDocument = swaggerJSDoc(options);

export default swaggerDocument;
