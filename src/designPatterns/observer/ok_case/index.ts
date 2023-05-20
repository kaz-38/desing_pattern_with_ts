interface Subject {
  observers: Observer[];
  registerObserver(o: Observer): void;
  removeObserver(o: Observer): void;
  notifyObservers(): void;
}

interface Observer {
  update(temperature: number, humidity: number, pressure: number): void;
}

class Display implements Observer {
  temperature: number;
  humidity: number;
  pressure: number;

  constructor(w: WeatherData) {
    this.temperature = 0;
    this.humidity = 0;
    this.pressure = 0;
    // Observerとして登録する
    w.registerObserver(this);
  }

  display(): void {
    console.log("temp: ", this.temperature);
    console.log("humi: ", this.humidity);
    console.log("pres: ", this.pressure);
  }

  // 値を反映
  update(temperature: number, humidity: number, pressure: number): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
  }
}

class WeatherData implements Subject {
  temperature: number;
  humidity: number;
  pressure: number;
  observers: Observer[];

  constructor() {
    this.temperature = 1;
    this.humidity = 2;
    this.pressure = 3;
    this.observers = [];
  }

  registerObserver(o: Observer): void {
    this.observers = [...this.observers, o];
  }
  removeObserver(o: Observer): void {
    this.observers = this.observers.filter((v) => v !== o);
  }
  notifyObservers(): void {
    this.observers.forEach((o) => {
      o.update(this.temperature, this.humidity, this.pressure);
    });
  }

  setMeasurements(temp: number, humi: number, pres: number): void {
    this.temperature = temp;
    this.humidity = humi;
    this.pressure = pres;
    this.measurementsChanged();
  }

  getTemperature(): number {
    // 気温を取得
    return this.temperature;
  }
  getHumidity(): number {
    // 湿度を取得
    return this.humidity;
  }
  getPressure(): number {
    // 気圧を取得
    return this.pressure;
  }
  // 値に変更があった場合に呼び出される
  measurementsChanged() {
    this.notifyObservers();
  }
}

const wd = new WeatherData();
const dp = new Display(wd);

wd.setMeasurements(1, 2, 3);
dp.display();
