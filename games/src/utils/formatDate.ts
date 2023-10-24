/* eslint-disable no-restricted-globals */
const value = "__/__/__";

const formatDate = (date?: string) => {
  if (!date) return value;

  const inputDate = new Date(date);

  if (isNaN(inputDate.getTime())) {
    return value; // Data inválida
  }

  // Ajustar para o fuso horário local
  inputDate.setHours(
    inputDate.getHours() + new Date().getTimezoneOffset() / 60,
  );

  const day = inputDate.getDate().toString().padStart(2, "0");
  const month = (inputDate.getMonth() + 1).toString().padStart(2, "0");
  const year = inputDate.getFullYear();

  return `${day}/${month}/${year}`;
};

export { formatDate };
