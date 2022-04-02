const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

// 测试接口
/**
 * @description 初始化swagger
 * @param {*} app express
 * 
 */
var SwaggerInit = function (app) {
    // 文档：https://swagger.io/specification/
    const options = {
        definition: {
            openapi: '3.0.0',
            info: {
                title: 'Thingsmatrix IOT',
                version: '1.0.0',
            },
        },
        // apis: ['./routes/users.js'], //包含上述注释的文件
        apis: ['./routes/*'], //包含上述注释的文件
    };

    const openApiSpecification = swaggerJsdoc(options);
    app.use('/api', swaggerUi.serve, swaggerUi.setup(openApiSpecification));
}

module.exports = SwaggerInit

