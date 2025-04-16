export function Kelvin({ value = 0 }) {
  console.log("Kelvin rendered");
  return <div className="temp">{value + 273.15}K</div>;
}

export function Fahrenheit({ value = 0 }) {
  console.log("Fahrenheit rendered");
  return <div>{(value * 9) / 5 + 32}F</div>;
}
export function SomeTemperature() {
  console.log("Some Temperature rendered");
  return <div>Some Temperature</div>;
}
