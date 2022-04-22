const property = {
    name: 'Asadul',
    age: 2,
    money: 5000,
    parent: ['Saiyadul', 'Sonia'],
    bestFriend: {
        name: 'khairul',
        age: 90,
    },
    subject: ['english', 'bangla', 'mathematics'],
    takeExam: function () {
        console.log(this.name, 'taking exam')
    },
    takeExpense: function (expense, boksis) {
        const cost = this.money - expense - boksis;
        return cost
        // console.log(cost)
    }
}
property.takeExam()
const remaining = property.takeExpense(900, 300);
console.log(remaining)
