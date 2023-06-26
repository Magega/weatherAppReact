export const normalize = (data) => {
  const normalizedData = ((data - 32) * 5) / 9;
  return Math.round(normalizedData);
};
