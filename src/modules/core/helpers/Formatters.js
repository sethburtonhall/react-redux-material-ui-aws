export function currencyFormat(amount, currency) {
  return Intl.NumberFormat(undefined, { style: 'currency', currency }).format(amount);
}
