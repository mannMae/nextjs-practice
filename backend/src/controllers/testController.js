export const test = (request, response) => {
  console.log(request.body);
  return response.send('Success');
};
