describe("gameGenerator", () => {
  it("should be there", () => {
    expect(gameGenerator).toBeDefined();
    expect(typeof gameGenerator).toBe("function");
  });

  it("should generate some games!", () => {
    const game = gameGenerator(4);
    expect(typeof game).toBe("object");
  });

  it("should have just one winning number", () => {
    const bound = 4;
    const game = gameGenerator(bound);
    const number = [];
    for (let i = 0; i <= bound; i++) {
      if (game.guess(i)) {
        number.push(i);
      }
    }
    expect(number.length).toBe(1);
  });

  it("should have a reset method", () => {
    expect(gameGenerator().reset).toBeDefined();
    const game = gameGenerator(3);
    for (let i = 0; i <= 3; i++) {
      game.guess(i);
    }
    game.reset();
    expect(game.count).toBe(0);
  });

  it("should have a giveUp method", () => {
    expect(gameGenerator().giveUp).toBeDefined();
    const game = gameGenerator(3);
    for (let i = 0; i <= 3; i++) {
      game.guess(i);
    }
    game.giveUp();
    const answer = game.answer;
    const feedback = game.giveUp();
    expect(feedback).toBe(answer);
  });

  it("should have a numberGuesses method", () => {
    expect(gameGenerator().numberGuesses).toBeDefined();
    const game = gameGenerator(3);
    for (let i = 0; i < 3; i++) {
      game.guess(i);
    }
    game.numberGuesses();
    expect(game.count).toBe(3);
  });
});

describe("accountGenerator", () => {
  it("should be there", () => {
    expect(accountGenerator).toBeDefined();
    expect(typeof accountGenerator).toBe("function");
  });

  it("should have a getBalance method", () => {
    const account = accountGenerator(1000);
    // console.log(account);
    account.withdraw(2000);
    account.deposit(500);
    // console.log(account.getBalance);
    expect(account.getBalance()).toBe(1500);
  });

  it("should have a withdraw method", () => {
    const account = accountGenerator(1000);
    // console.log(account);
    account.withdraw(2000);
    account.withdraw(1000);
    account.deposit(500);
    // console.log(account.getBalance);
    expect(account.getBalance()).toBe(500);
  });

  it("should have a deposit method", () => {
    const account = accountGenerator(1000);
    // console.log(account);
    account.withdraw(2000);
    account.withdraw(1000);
    account.deposit(500);
    // console.log(account.getBalance);
    expect(account.getBalance()).toBe(500);
  });
});
