const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  try {
    const params = {
      TableName: 'SimpleWebApplicationTable',
      Key: {
        'id': '1'
      }
    };
    const data = await dynamoDB.get(params).promise();
    return {
      statusCode: 200,
      body: JSON.stringify(data.Item.message)
    };
  } catch (err) {
    console.log(err);
    return {
      statusCode: 500,
      body: JSON.stringify(err)
    };
  }
};
