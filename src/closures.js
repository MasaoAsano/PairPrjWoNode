/* exported gameGenerator accountGenerator randomInteger */

function randomInteger(n) {
  return Math.floor(Math.random() * (n + 1));
}

function gameGenerator(bound) {
  return {
    answer: randomInteger(bound),
    count: 0,
    guess: function (num) {
      console.log(this);
      this.count++;
      if (num === this.answer) {
        return true;
      }
    },
    reset: function () {
      this.count = 0;
      this.answer = randomInteger(bound);
    },
    giveUp: function () {
      const answer = this.answer;
      this.reset();
      return answer;
    },
    numberGuesses: function () {
      window.alert(`${this.count}`);
    },
  };
}
gameGenerator();

const accountGenerator = (initial) => {
  let balance = initial;

  return {
    withdraw: function (amount) {
      console.log(amount);
      console.log(balance);
      if (balance - amount >= 0) {
        balance = balance - amount;
        const withdraw = {
          type: "withdraw",
          amount: amount,
          before: balance,
          after: balance - amount,
          status: "approved",
          time: Date(),
        };
        console.log(withdraw);
        return withdraw;
      } else {
        const notWithdraw = {
          type: "notWithdraw",
          amount: amount,
          before: balance,
          after: balance,
          status: "denied",
          time: Date(),
        };
        console.log(notWithdraw);
        return notWithdraw;
      }
    },
    deposit: function (amount) {
      balance = balance + amount;
      const deposit = {
        type: "deposit",
        amount: amount,
        before: balance,
        after: balance + amount,
        status: "approved",
        time: Date(),
      };
      console.log(deposit);
      return deposit;
    },
    getBalance: function () {
      // console.log(balance);
      return balance;
    },
    transactionHistory: function () {},
    averageTransaction: function () {},
  };
};
