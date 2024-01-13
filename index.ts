const redPercent = <HTMLInputElement>document.getElementById("red-percent");
const greenPercent = <HTMLInputElement>document.getElementById("green-percent");
const bluePercent = <HTMLInputElement>document.getElementById("blue-percent");

[redPercent, greenPercent, bluePercent].forEach((percent) => {
  percent.addEventListener("change", (event: Event) => {
    console.log((<HTMLInputElement>event.target).value);
  });
});
