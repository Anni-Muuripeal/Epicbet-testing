const getTimestamp = () => {
  return new Date().toLocaleString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
  }).replace(/[\/, :]/g, '-'); 
};
  
  module.exports = {
    getTimestamp, 
  };