class OrderSystem {
    constructor() {
        this.chefs = new Map();
        this.dishes = new Map();
        this.orders = new Map();
    }

    addChef(name, specialization) {
        this.chefs.set(name, specialization);
    }

    addDish(dishName, specialization) {
        this.dishes.set(dishName, specialization);
    }

    addOrder(customer, dishNames) {
        this.orders.set(customer, dishNames);
    }

    getChefForDish(dish) {
        const specialization = this.dishes.get(dish);
        for (let [chef, chefSpecialization] of this.chefs) {
            if (chefSpecialization === specialization) {
                return chef;
            }
        }
        return null;
    }

    showOrders() {
        for (let [customer, customerOrders] of this.orders) {
            console.log(`${customer.name} заказал(а):`);
            customerOrders.forEach(dish => {
                const chef = this.getChefForDish(dish);
                console.log(`  - ${dish} готовит повар ${chef}`);
            });
        }
    }
}

const orderSystem = new OrderSystem();

// Добавляем поваров и их специализации
orderSystem.addChef("Виктор", "Пицца");
orderSystem.addChef("Ольга", "Суши");
orderSystem.addChef("Дмитрий", "Десерты");

orderSystem.addDish("Пицца Маргарита", "Пицца");
orderSystem.addDish("Пицца Пепперони", "Пицца");
orderSystem.addDish("Суши Филадельфия", "Суши");
orderSystem.addDish("Суши Калифорния", "Суши");
orderSystem.addDish("Тирамису", "Десерты");
orderSystem.addDish("Чизкейк", "Десерты");

const alexey = { name: "Алексей" };
const maria = { name: "Мария" };
const irina = { name: "Ирина" };

orderSystem.addOrder(alexey, ["Пицца Пепперони", "Тирамису"]);
orderSystem.addOrder(maria, ["Суши Калифорния", "Пицца Маргарита"]);
orderSystem.addOrder(irina, ["Чизкейк"]);

orderSystem.showOrders();