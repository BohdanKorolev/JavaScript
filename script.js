var appData = {
    money: Number(1200),
    time: Date("2019-09-25"),
    expenses: {},
    optionalExpenses: {},
    income:[],
    savings: false,
};

appData.time = Date(prompt("Введите дату в формате YYYY-MM-DD"));
appData.money = Number(prompt("Ваш бюджет на месяц?"));

appData.expenses[prompt("Введите обязательную статью расходов в этом месяце")] = 
    Number(prompt("Во сколько обойдется?"));

appData.expenses[prompt("Введите обязательную статью расходов в этом месяце")] = 
    Number(prompt("Во сколько обойдется?"));

console.log(appData);