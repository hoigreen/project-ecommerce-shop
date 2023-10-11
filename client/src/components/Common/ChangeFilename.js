const changeFileName = (fileName, newFileName) => {
  const fileExtension = fileName.split('.').pop();
  const newFileNameWithExtension = `${newFileName}.${fileExtension}`;
  return newFileNameWithExtension;
};

export default changeFileName;
