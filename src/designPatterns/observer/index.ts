// class Display {
//   temperature: number;
//   humidity: number;
//   pressure: number;

//   constructor() {
//     this.temperature = 0;
//     this.humidity = 0;
//     this.pressure = 0;
//   }

//   display(): void {
//     console.log("temp: ", this.temperature);
//     console.log("humi: ", this.humidity);
//     console.log("pres: ", this.pressure);
//   }
// }

// class WeatherData {
//   temperature: number;
//   humidity: number;
//   pressure: number;

//   constructor() {
//     this.temperature = 0;
//     this.humidity = 0;
//     this.pressure = 0;
//   }

//   setMeasurements(temp: number, humi: number, pres: number): void {
//     this.temperature = temp;
//     this.humidity = humi;
//     this.pressure = pres;
//     this.measurementsChanged();
//   }

//   getTemperature(): number {
//     // 気温を取得
//     return this.temperature;
//   }

//   getHumidity(): number {
//     // 湿度を取得
//     return this.humidity;
//   }

//   getPressure(): number {
//     // 気圧を取得
//     return this.pressure;
//   }

//   // 値に変更があった場合に呼び出される
//   measurementsChanged() {}
// }
