// Step 1: Define Interfaces for Pizza and Pizzeria
interface Pizza {
  id: string;
  type: string;
  slices: number;
}

interface Pizzeria {
  id: string;
  name: string;
  menu: Pizza[];
  estimatedDeliveryTime: number; // in minutes
}

// Step 2: Create a class for the Pizza Ordering Process
class PizzaOrder {
  private pizzas: Pizza[] = [];
  private totalCost: number = 0;
  private participants: string[] = [];
  private pizzeria?: Pizzeria;

  constructor(
    private pizzeriaName: string,
    private menu: Pizza[],
  ) {
    this.pizzeria = {
      id: 'asdf',
      name: pizzeriaName,
      menu,
      estimatedDeliveryTime: 30,
    }; // Default delivery time
  }

  // Step 1: Gather Requirements
  gatherRequirements(
    participants: string[],
    pizzaOrders: { type: string; slices: number }[],
  ) {
    this.participants = participants;
    pizzaOrders.forEach((order) => {
      const pizza = this.menu.find((p) => p.type === order.type);
      if (pizza) {
        this.pizzas.push(pizza);
        this.totalCost += pizza.slices * 2; // Assume each slice costs $2
      }
    });
    console.log(`Total cost calculated: $${this.totalCost}`);
  }

  // Step 2 & 4: Place Order
  placeOrder() {
    if (!this.pizzeria) {
      console.error('No pizzeria selected.');
      return;
    }
    console.log(`Placing order at ${this.pizzeria.name}...`);
    console.log(`Ordered pizzas:`, this.pizzas);
    console.log(
      `Estimated delivery time is ${this.pizzeria.estimatedDeliveryTime} minutes.`,
    );

    // Simulate waiting for delivery
    setTimeout(
      () => this.receiveDelivery(),
      this.pizzeria.estimatedDeliveryTime * 1000,
    );
  }

  // Step 5: Receive Delivery
  private receiveDelivery() {
    console.log('Pizzas have arrived!');
    this.distributePizzas();
  }

  // Step 6: Distribute Pizzas
  private distributePizzas() {
    console.log('Distributing pizzas to participants...');
    this.participants.forEach((participant) => {
      console.log(`${participant} is enjoying their pizza!`);
    });
  }

  // Step 3: Collect Money (simulated)
  public collectMoney() {
    const amountPerPerson = this.totalCost / this.participants.length;
    console.log(
      `Collecting $${amountPerPerson.toFixed(2)} from each participant.`,
    );
  }
}

// Example Usage
const menu = [
  { id: 'mar', type: 'Margherita', slices: 8 },
  { id: 'pep', type: 'Pepperoni', slices: 8 },
  { id: 'veg', type: 'Vegetarian', slices: 8 },
];

const pizzaOrder = new PizzaOrder('Best Pizzeria', menu);

// Gathering requirements from participants
pizzaOrder.gatherRequirements(
  ['Jan', 'Alicja', 'Mariusz'],
  [
    { type: 'Margherita', slices: 1 },
    { type: 'Pepperoni', slices: 2 },
  ],
);

// Collecting money from participants
pizzaOrder.collectMoney();

// Placing the order
pizzaOrder.placeOrder();
