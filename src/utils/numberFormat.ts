export default function formatCurrency(number?: number) {
  if (number) {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }
}
