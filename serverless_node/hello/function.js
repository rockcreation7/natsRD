exports.handler = async (event) => {
    console.log('Event: ', event);
    let responseMessage = 'Hello, World2222!';

    if (event.queryStringParameters && event.queryStringParameters['Name']) {
        responseMessage = 'Hello, ' + event.queryStringParameters['Name'] + '!';
    }

    if (event.httpMethod === 'POST') {
        const body = JSON.parse(event.body);
        responseMessage = 'Hello, ' + body.name + '!';
    }

    const response = {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            message: responseMessage
        }),
    };

    return response;
};