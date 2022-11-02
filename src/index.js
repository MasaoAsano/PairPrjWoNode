
window.addEventListener('load', function () {
    // ...
    // Place code here.
    // ...
    // document.getElementById〜
    const ctx = document.getElementById('ex_chart');
    
    console.log("ctx:",ctx);
    
    // //データの取得
    const url="https://api.open-meteo.com/v1/forecast?latitude=35.6785&longitude=139.6823&hourly=temperature_2m&timezone=Asia%2FTokyo";

    getData= (data)=>data.json();  
    fetch(url)
    .then(data => data.json())
    .then(obj => {
        console.log(obj);
        
        console.log("keys: ",Object.keys(obj));

        console.log("time: ",obj.hourly.time);

        console.log("temperature_2m: ", obj.hourly.temperature_2m);

        const data = {
            labels: obj.hourly.time,
            datasets: [{
                label: '気温',
                data: obj.hourly.temperature_2m,
                borderColor: 'rgba(255, 100, 100, 1)'
            }]
        };        
        
        // const data = {
        //     labels: ["1月", "2月", "3月", "4月", "5月"],
        //     datasets: [{
        //         label: 'プリンター販売台数',
        //         data: [880, 740, 900, 520, 930],
        //         borderColor: 'rgba(255, 100, 100, 1)'
        //     }]
        // };
        
        console.log(data);
        
        const options = {};
        
        const ex_chart = new Chart(ctx, {
            type: 'line',
            data: data,
            options: options
        });
    })
        
});
    
    // /* exported gameGenerator accountGenerator randomInteger */
    
    // function randomInteger(n) {
        //   return Math.floor(Math.random() * (n + 1));
        // }
        
        // function gameGenerator(bound) {
            //   return {
//     answer: randomInteger(bound),
//     count: 0,
//     guess: function (num) {
//       console.log(this);
//       this.count++;
//       if (num === this.answer) {
//         return true;
//       }
//     },
//     reset: function () {
//       this.count = 0;
//       this.answer = randomInteger(bound);
//     },
//     giveUp: function () {
//       const answer = this.answer;
//       this.reset();
//       return answer;
//     },
//     numberGuesses: function () {
//       window.alert(`${this.count}`);
//     },
//   };
// }
// gameGenerator();

// const accountGenerator = (initial) => {
//   let balance = initial;

//   return {
//     withdraw: function (amount) {
//       console.log(amount);
//       console.log(balance);
//       if (balance - amount >= 0) {
//         balance = balance - amount;
//         const withdraw = {
//           type: "withdraw",
//           amount: amount,
//           before: balance,
//           after: balance - amount,
//           status: "approved",
//           time: Date(),
//         };
//         console.log(withdraw);
//         return withdraw;
//       } else {
//         const notWithdraw = {
//           type: "notWithdraw",
//           amount: amount,
//           before: balance,
//           after: balance,
//           status: "denied",
//           time: Date(),
//         };
//         console.log(notWithdraw);
//         return notWithdraw;
//       }
//     },
//     deposit: function (amount) {
//       balance = balance + amount;
//       const deposit = {
//         type: "deposit",
//         amount: amount,
//         before: balance,
//         after: balance + amount,
//         status: "approved",
//         time: Date(),
//       };
//       console.log(deposit);
//       return deposit;
//     },
//     getBalance: function () {
//       // console.log(balance);
//       return balance;
//     },
//     transactionHistory: function () {},
//     averageTransaction: function () {},
//   };
// };
