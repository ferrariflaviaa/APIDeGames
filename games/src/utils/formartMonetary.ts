const formatMonetary = (money: string) => {
  let value = money;
  value = value.replace(/\D/g, ""); // permite digitar apenas numero
  value = value.replace(/(\d{1})(\d{17})$/, "$1.$2"); // coloca ponto antes dos ultimos digitos
  value = value.replace(/(\d{1})(\d{13})$/, "$1.$2"); // coloca ponto antes dos ultimos 13 digitos
  value = value.replace(/(\d{1})(\d{10})$/, "$1.$2"); // coloca ponto antes dos ultimos 10 digitos
  value = value.replace(/(\d{1})(\d{7})$/, "$1.$2"); // coloca ponto antes dos ultimos 7 digitos
  value = value.replace(/(\d{1})(\d{1,2})$/, "$1,$2"); // coloca virgula antes dos ultimos 4 digitos

  return `R$: ${value}`;
};

export { formatMonetary };
