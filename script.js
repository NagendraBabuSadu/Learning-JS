// // // // let i, j, sum = 0;
// // // // for(i =0, j = 0; i<10; i++, j--){
// // // //     sum += i * j;
// // // //     console.log(sum)
// // // // }

// // // function tail(obj){
// // //     for(; obj.next; obj = obj.next)
// // //     return obj;
// // // }

// // // let object = new obj;
// // // object = {'hello':'key'};
// // // console.log(tail(object))

// // let data = [1,2,3,4,5], sum = 0;
// // for(let element of data){
// //     sum += element;
// // }
// // console.log(sum);

// // // let o = {x:1, y:2, z:3};
// // // for (let ele of o){
// // //     console.log(ele)
// // // };

// // let o = {x:1, y:2, z:3};
// // let keys = "";
// // for(let k of Object.keys(o)){
// //     keys += k;
// // }
// // console.log(keys);

// // let sum2 = 0;
// // for (let v of Object.values(o)){
// //     sum2 += v;
// // }
// // console.log(sum2);

// // let pairs = "";
// // for (let [k,v] of Object.entries(o)){
// //     pairs += (k + v);
// // }

// // console.log(pairs)

// // let text = "na nanana Na na na na Batman!";
// // let wordSet = new Set(text.split(" "));
// // let unique = [];
// // for(let word of wordSet){
// //     // unique += word;
// //     unique.push(word);
// // }

// // console.log(unique)

// // let m = new Map([[1, "one"]]);
// // for (let [key, value] of m){
// //     console.log(key + ":" + value);
// //     // console.log(value)
// // }

// let book = {
//     "main title": "JavaScript",
//     "sub-title": "The Definitive Guide",
//     for: "all audiences",
//     author: {
//         firstname : "David",
//         surname : "Flangnan"
//     }
// };

// console.log(book.author);

// let author = book.author;
// let surname = author.surname;
// console.log(author);
// console.log(surname);
// let title = book["main title"];
// console.log(title);
// book.edition = 7;
// console.log(book.edition);
// console.log(book);
// book["main title"] = "ECMA Script";

// console.log(book["main title"]);

// console.log(book)

// let customer = {
//     // address : ""
// }

// let addr = "";
// for(let i = 0; i< 4;  i++){
//         addr +=  `address${i}` + "\n";
//     }
// // console.log(customer);
// // console.log(customer["address"]);
// console.log(addr);



// console.log(customer.addr.length);
// console.log(customer.addr)


// let portfolio = {
//     stockname : this.stockname,
//     shares : this.shares
// }

// let IBM = portfolio{"ibm" : 50};
// console.log(IBM.shares);

// let shares = 0;
// let stockname = "";


// let portfolio = {
//     stockname : shares
// }

// let IBM = Object.create(Object.prototype);
// IBM = {"ibm" : 50};
// // {"ibm" : 50});
// console.log(IBM)
// console.log(IBM.ibm);

// function addStock(portfolio, stockname, shares){
//     portfolio[stockname] = shares;
// }

// addStock("bluechipfund", 39);


// console.log(ICICI);


// let o = {};
// o.x = 1;
// let p = Object.create(o);
// p.y = 2;
// let q = Object.create(p);
// q.z = 4;

// q.x = 6;

// console.log(o)

// console.log(q.x + q.y);

// console.log(q.u);

// let book = {
//     "main title" : "JavaScript",
//     'sub-title' : "The Definitive Guide",
//     author : {
//         firstname : "David",
//         surname : "king"
//     }
// }

// console.log(book);
// // console.log(book["subtitle"]);
// // console.log(book.subtitle.length);

// let surname2 = "hero" ;
// // surname = book && book.author && book.author.surname;
// surname2 = book ?. author ?. surname;

// console.log(surname2 +" world");

// let o = {
//     p : null
// }

// console.log(o.p)
// delete o.p;
// console.log(o.p);


// let square = {
//     // area: function() {return this.x*this.x},
//     area() {return this.x*this.x},
//     x: 10
// };
// let y = square.area();
// console.log(y);


// let o = {x:1};
// let p = {x: 0, ...o};
// console.log(p.x);
// let q = Object.create({x:3});
// // let q = {x:3};
// let p = {...q};
// console.log(p.x);

// const METHOD_NAME = "m";
// const symbol = Symbol();
// let weirdMethods = {
//     "method With Spaces"(x) {return x+1;},
//     [METHOD_NAME](x) {return x+4;},
//     [symbol](x) {return x+9;}
// };


// console.log(weirdMethods["method With Spaces"](3));
// console.log(weirdMethods[METHOD_NAME](11));
// console.log(weirdMethods[symbol](23));

// let value = 12;
// let o = {

//     dataProp : value, 

//     get accessorProp() { return this.accessorProp; },
//     set accessorProp(value) {this.dataProp = value; }
// // }


// let point = {
//     x: 1.0, 
//     y: 1.0, 

//     get r() { return Math.hypot(this.x, this.y);}, 

//     set r(newValue){
//         let oldValue = Math.hypot(this.x, this.y);
//         let ratio = newValue/oldValue;
//         this.x *= ratio;
//         this.y *= ratio;

//         console.log(this.y)
//     },
//     // console.log(this.x);

//     get theta() {return Math.atan2(this.y, this.x);}


// };

// let newR = point.r;
// let newTheta = point.theta;

// // console.log(r);
// // console.log(x, y);
// console.log(newR);
// console.log(newTheta);


// console.log("New Object Creation");

// let q = Object.create(point);
// q.x = 6, q.y = 5;
// // console.log(newR);
// console.log(q.r);
// console.log(q.theta)

// const serialNum = {
//     _n: 0,

//     get Next() {return this._n++;},

//     set Next(value) {
//         if (value > this._n) this._n = value;
//         else throw new Error("Serial number can only be set to larger value. ");

//     },
//     // get Next() { return this._n++; },



//     get Previous() { return this._n--; },

//     set Previous(value) {
//         if (value < this._n) this._n = value;
//         else return this._n;
//         // else throw new Error("Error message hello");

//     },



// }


// serialNum.Previous = -1;
// console.log(serialNum.Previous);
// console.log(serialNum.Previous);
// console.log(serialNum.Next);
// console.log(serialNum.Next);
// serialNum.Next = 1;
// console.log(serialNum.Next);
// console.log(serialNum.Next);
// console.log(serialNum.Previous);
// console.log(serialNum.Previous);


// const random = {
//     get octet(){ return Math.floor(Math.random()*256)}
// }

// console.log(random.octet)

// let o = { x: 1};
// let p = Object.assign({y:2}, o);

// console.log(p)



// let a = [1,,3]
// console.log([a[1], a[0]])
// console.log(a.length);

// let b = [0, ...a, 6];

// console.log(b);
// let string = [..."abcd"];
// console.log(string);


// let letters = [..."hello world"];
// let letters2 = [...new Set(letters)];

// console.log(letters);

// console.log(letters2)

// let c = new Array(10);
// console.log(c);
// console.log(c.length)

// console.log(c[2]);

// c = [1,3,4];
// console.log(c)




// const serialNum = {
//     _n: 0,
//     // value : 0,
//     get next() { return this._n++ },

//     set next(x) {
//         if(this.previous){ this._n = x}
//         else {

//             // x = this.previous;
//             if (x > this._n) this._n = x;
//             else { throw new Error("Hello") }}
//         },

//     get previous() { 
//         return this._n--},

//     set previous(x) {
//         if(this.next){
//             x =this.next;
//             if(x< this._n) this._n = x;
//             else throw new Error("Bye")
//         }
//     }
// };

// // serialNum.next = 15;
// console.log(serialNum.next)
// console.log(serialNum.next)
// console.log(serialNum.next)
// console.log(serialNum.previous)
// console.log(serialNum.previous)


// console.log(serialNum.previous)



const incDecNum = {
    // _x: 0,
    get increment() {
        console.log("Get Increment Method running");
       
        this._x++;
        return this._x;
    },
    get decrement() {
        console.log("Get Decrement method running");
       
        return this._x--;
    }
}

incDecNum._x = 10;
console.log(incDecNum.increment);
console.log(incDecNum.increment);
console.log(incDecNum.increment);
console.log(incDecNum.decrement)
console.log(incDecNum.decrement)







































