const carwale = require("./car.js");


global.fetch = jest.fn((res) =>
    Promise.resolve({
        json: () => Promise.resolve({ status: 200 })
    })
)

// describe("carwale test cases", () => {
//     carwale.data_for_search = null;
//     beforeAll(() => {
//         carwale.data_for_search = [
//             {
//                 "name": "Kia Carens",
//                 "model": "2019",
//                 "price": "999900",
//                 "fuel": "petrol",
//                 "description": "1 year old car, maintained in good condition.",
//                 "brand": "kia",
//                 "image": "https://www.kia.com/content/dam/kia2/in/en/images/360vr/carens/tyw71mc5ftt004/exterior/mpb/08-d.png"
//             },
//             {
//                 "name": "Kia SONET GT Line",
//                 "model": "2020",
//                 "price": "795000",
//                 "fuel": "disel",
//                 "description": "2 year old car, maintained in good condition.",
//                 "brand": "kia",
//                 "image": "https://www.kia.com/content/dam/kia2/in/en/images/360vr/sonet/sxw5k2g1uhh023/exterior/a6r/08-d.png"
//             },
//             {
//                 "name": "Tata Nexon",
//                 "model": "2020",
//                 "price": "739000",
//                 "fuel": "petrol",
//                 "description": "1 year old car, maintained in good condition.",
//                 "brand": "tata",
//                 "image": "https://imgd.aeplcdn.com/664x374/n/cw/ec/41645/tata-nexon-right-front-three-quarter3.jpeg?q=75"
//             },
//             {
//                 "name": "Tata Altroz",
//                 "model": "2021",
//                 "price": "599000",
//                 "fuel": "disel",
//                 "description": "1 year old car, maintained in good condition.",
//                 "brand": "tata",
//                 "image": "https://imgd.aeplcdn.com/664x374/n/cw/ec/32597/tata-altroz-right-front-three-quarter20.jpeg?q=75"
//             },
//             {
//                 "name": "Mahindra XUV700",
//                 "model": "2020",
//                 "price": "599000",
//                 "fuel": "petrol",
//                 "description": "1 year old car, maintained in good condition.",
//                 "brand": "mahindra",
//                 "image": "https://imgd.aeplcdn.com/664x374/n/cw/ec/42355/xuv700-exterior-right-front-three-quarter.jpeg?isig=0&q=75"
//             },
//             {
//                 "name": "mahindra Thar",
//                 "model": "2021",
//                 "price": "300000",
//                 "fuel": "disel",
//                 "description": "3 year old car, maintained in good condition.",
//                 "brand": "mahindra",
//                 "image": "https://imgd.aeplcdn.com/664x374/n/cw/ec/40087/thar-exterior-right-front-three-quarter-11.jpeg?q=75"
//             },
//             {
//                 "name": "Hyundai Creta",
//                 "model": "2020",
//                 "price": "321000",
//                 "fuel": "petrol",
//                 "description": "1 year old car, maintained in good condition.",
//                 "brand": "hyundai",
//                 "image": "https://imgd.aeplcdn.com/664x374/n/cw/ec/41564/hyundai-creta-right-front-three-quarter9.jpeg?q=75"
//             },
//             {
//                 "name": "Hyundai Grand i10 Nios",
//                 "model": "2021",
//                 "price": "300000",
//                 "fuel": "disel",
//                 "description": "3 year old car, maintained in good condition.",
//                 "brand": "hyundai",
//                 "image": "https://imgd.aeplcdn.com/664x374/n/cw/ec/35465/grand-i10-nios-exterior-right-front-three-quarter-2.jpeg?q=75"
//             },
//             {
//                 "name": "Renault Kwid",
//                 "model": "2018",
//                 "price": "543000",
//                 "fuel": "petrol",
//                 "description": "1 year old car, maintained in good condition.",
//                 "brand": "renault",
//                 "image": "https://imgd.aeplcdn.com/664x374/n/cw/ec/48543/kwid-exterior-right-front-three-quarter-18.jpeg?isig=0&q=75"
//             },
//             {
//                 "name": "Renault Duster",
//                 "model": "2021",
//                 "price": "250000",
//                 "fuel": "disel",
//                 "description": "3 year old car, maintained in good condition.",
//                 "brand": "renault",
//                 "image": "https://imgd.aeplcdn.com/664x374/n/cw/ec/47028/duster-exterior-right-front-three-quarter-4.jpeg?q=75"
//             }
//         ]
//     })


   // test case to fetch data
    test("getting data from json file", async () => {
        const apicall = await carwale("car.json");
        expect(apicall.status).toEqual(200);
    })


    //test case to check after applying brand filter, if we get only cars with the selected brand
    // test("result on selected brand", () => {
    //     ["kia", "tata", "mahindra", "hyundai", "renault"].forEach(elem => {
    //         let result = carwale.brandFilter(elem);
    //         result.forEach(car => {
    //             expect(car.brand).toMatch(elem)
    //         })
    //     })
    // })

    // //test case to check after applying price filter, if we get only cars of price less than or equal to selected price
    // test("filter for price", () => {
    //     ["500000", "600000", "700000"].forEach(price => {
    //         carwale.seach_result = []
    //         let result = carwale.priceFilter(price);
    //         result.forEach(car => {
    //             expect(Number(car.price)).toBeLessThanOrEqual(Number(price));
    //         })
    //     })
    // })


    // //test case to check after applying fuel filter, if we get only cars with the selected fuel type
    // test("filter for fuel", () => {
    //     ["petrol", "disel"].forEach(fuelType => {
    //         carwale.seach_result = []
    //         let result = carwale.fuelFilter(fuelType);
    //         result.forEach(car => {
    //             expect(car.fuel).toMatch(fuelType)
    //         })
    //     })
    // })
// })