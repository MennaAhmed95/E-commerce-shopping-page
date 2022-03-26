const formatCurrency = (num = 0) => {
  return "$ " + Number(num.toFixed(2)).toLocaleString() + " ";
  // "$ " + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};

export default formatCurrency;
