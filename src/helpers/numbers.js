const formatToDecimal = (number) => {
  if (!number || Number.isNaN(number)) return '';

  const opt = { style: 'decimal', useGrouping: true };
  const format = Number(number).toLocaleString('en', opt);

  return format;
};

export default { formatToDecimal };
