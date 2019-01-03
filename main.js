exports.handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello WORLD-> TESTING LAMBDA JENKINS WEBHOOK'),
    };
    return response;
};
