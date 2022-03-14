const express = require("express");
const app = express();
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

//Documentation: https://swagger.io/specification/
const swaggerOptions = {
    swaggerDefinition: {
        info:{
            title: 'Pomelo Thi Nguyen API',
            description: 'Pomelo API Information',
            contact : {
                name: "Thi Nguyen"
            },
            servers : ["http://localhost:8080"]
        }
    },
    apis: ["app.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions)
app.use("/api-docs",swaggerUi.serve, swaggerUi.setup(swaggerDocs))

const port = process.env.PORT || 8080;
// Routes
/**
 * @swagger
 * /customers:
 *  get:
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: A successful response
 */
app.get("/customers", (req,res) => {
    res.send("Pomelo Customer results");
});

/**
 * @swagger
 * /customers:
 *    put:
 *      description: Use to return all customers
 *    parameters:
 *      - name: customer
 *        in: query
 *        description: Name of our customer
 *        required: false
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '201':
 *        description: Successfully created user
 */
 app.put("/customer", (req, res) => {
    res.status(200).send("Successfully updated customer");
  });

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});
