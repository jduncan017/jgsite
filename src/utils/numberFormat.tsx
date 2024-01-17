export default function formatCurrency(number: number) {
  return number.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}
