// // ------- Base

// // 飲料のインターフェース
// interface Beverage {
//   cost(): number;
// }

// // 紅茶クラス
// class Tea implements Beverage {
//   cost() {
//     return 500; // 価格は500円
//   }
// }

// // ミルククラス
// class Milk implements Beverage {
//   cost() {
//     return 200; // 価格は 200円
//   }
// }

// // シナモンクラス
// class Sinamon implements Beverage {
//   cost() {
//     return 50; // 価格は 50円
//   }
// }

// // ------- ハードコードパターンは絶対ダメ
// interface Beverage {
//   cost(): number;
// }
// class Milk implements Beverage {
//   cost() {
//     return 200;
//   }
// }
// class Sinamon implements Beverage {
//   cost() {
//     return 50;
//   }
// }

// class Tea implements Beverage {
//   total: number = 500; // デフォルト価格を内部で保持

//   // ミルクを追加した時処理を追加
//   addMilk() {
//     this.total += new Milk().cost();
//     return this;
//   }

//   addSinamon() {
//     this.total += new Sinamon().cost();
//     return this;
//   }

//   cost() {
//     return this.total;
//   }
// }

// export const result = new Tea().addMilk().addSinamon().cost();

// // -------　もう少しありそうなパターン　　-------

// // トッピングinterfaceを定義
// interface Topping {
//   cost: number;
// }

// // 飲料の抽象クラスを定義
// abstract class Beverage {
//   abstract price: number; // 元々の金額
//   toppings: Topping[] = []; // 特徴は自身に追加された toppings を管理するとこ。Observerパターンに影響受けてますね...

//   // toppings追加メソッド。ここら辺もObserverに近い
//   addTopping(t: Topping): void {
//     this.toppings = [...this.toppings, t];
//   }

//   // トッピングの合計金額から小計を算出する
//   cost(): number {
//     let sum = 0;
//     this.toppings.forEach((t) => {
//       sum += t.cost;
//     });
//     return sum + this.price;
//   }
// }

// class Tea extends Beverage {
//   price = 500;
// }

// class Milk implements Topping {
//   cost = 200;
// }

// class Sinamon implements Topping {
//   cost = 50;
// }

// // 特徴は飲料クラスにトッピングを追加していくイメージ
// const t = new Tea();
// t.addTopping(new Milk());
// t.addTopping(new Sinamon());

// export const result = t.cost();

// // -------　Decoratorパターン　-------
// interface Beverage {
//   cost(): number;
// }

// abstract class AbsBeverage implements Beverage {
//   abstract price: number; // 飲料の値段
//   beverage?: Beverage; // デコレート対象の具象クラス。最初に初期化する飲料クラスはundefinedになる可能性がある

//   constructor(b?: Beverage) {
//     this.beverage = b;
//   }

//   cost() {
//     const preCost = this.beverage ? this.beverage.cost() : 0;
//     return preCost + this.price;
//   }
// }

// class Tea extends AbsBeverage {
//   price = 500;
// }

// class Coffee extends AbsBeverage {
//   price = 600;
// }

// class Milk extends AbsBeverage {
//   price = 200;
// }

// class Sinamon extends AbsBeverage {
//   price = 50;
// }

// // どの掛け合わせも可能。オーダー順も関係ない。(トッピング -> 飲み物順でのオーダーも可能)
// let order = new Milk();
// order = new Sinamon(order);
// order = new Coffee(order);
// order = new Tea(order);

// export const result = order.cost();
