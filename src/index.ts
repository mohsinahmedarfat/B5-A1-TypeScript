// Problem 1
function formatString(input: string, toUpper?: boolean): string {
  if (toUpper === false) {
    return input.toLowerCase();
  } else {
    return input.toUpperCase();
  }
}

// Problem 2
type RatedItems = {
  title: string;
  rating: number;
};

function filterByRating(arrayOfObjects: RatedItems[]): RatedItems[] | string {
  const filteredItems = arrayOfObjects.filter((item) => item.rating >= 4);
  if (filteredItems.length > 1) {
    return filteredItems;
  } else {
    return "There's no 4 or above rating item in this array. Please add an good item.";
  }
}

// Problem 3
function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.flat();
}

// Problem 4
class Vehicle {
  protected _make: string;
  protected _year: number;

  constructor(_make: string, _year: number) {
    this._make = _make;
    this._year = _year;
  }

  getInfo() {
    return `Make: ${this._make}, Year: ${this._year}`;
  }
}

class Car extends Vehicle {
  private _model: string;
  constructor(_make: string, _year: number, _model: string) {
    super(_make, _year);
    this._model = _model;
  }
  getModel() {
    return `Model: ${this._model}`;
  }
}

// Problem 5
function processValue(input: string | number): number | undefined {
  if (typeof input === "string") {
    return input.length;
  }
  if (typeof input === "number") {
    return input * 2;
  }
}

// Problem 6
interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | undefined {
  const prices = products.map((product) => product.price);
  const maxPrice = Math.max(...prices);
  const mostExpensiveProduct = products.find(
    (product) => product.price === maxPrice
  );
  return mostExpensiveProduct;
}

// Problem 7
enum Day {
  Saturday,
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
}

function getDayType(day: Day) {
  if (day === Day.Saturday || day === Day.Sunday) {
    return "Weekend";
  } else {
    return "Weekday";
  }
}

// Problem 8
const squareAsync = (num: number): Promise<number> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num >= 0) {
        resolve(num * num);
      } else {
        reject("Error: Negative number not allowed");
      }
    }, 1000);
  });
};
