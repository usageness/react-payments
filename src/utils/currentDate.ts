export const currentDate = () => {
  const currentDate = new Date();
  const currentYear = Number(String(currentDate.getFullYear()).slice(2, 4));
  const currentMonth = currentDate.getMonth() + 1;

  return { currentYear, currentMonth };
};
