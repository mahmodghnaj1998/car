const state = {
    cars: [{
            id: 1,
            title: "BMW 2010",
            sala: 140000,
            slug: "BMW",
            type: "Abarth",
        },
        {
            id: 2,
            title: "KIA 2010",
            sala: 12545,
            slug: "KIA",
            type: "Kia",
        },
        {
            id: 3,
            title: "DACIA 2010",
            sala: 1500,
            slug: "DACIA",
            type: "Jeep",
        },
        {
            id: 4,
            title: "BMW 2010",
            sala: 5454,
            slug: "BMW",
            type: "Dacia",
        },
        {
            id: 5,
            title: "Hyundai 2010",
            sala: 4544,
            slug: "BMW",
            type: "Hyundai",
        },
        {
            id: 6,
            title: "Daf 2010",
            sala: 4554,
            slug: "BMW",
            type: "Daf",
        },
        {
            id: 7,
            title: "Chevrolet 2010",
            sala: 2366,
            slug: "BMW",
            type: "Chevrolet",
        },
        {
            id: 8,
            title: "Audi 2010",
            sala: 4155,
            slug: "BMW",
            type: "Audi",
        },
        {
            id: 9,
            title: "Aixam 2010",
            sala: 1554,
            slug: "BMW",
            type: "Aixam",
        },
        {
            id: 10,
            title: "Acura 2010",
            sala: 150000,
            slug: "BMW",
            type: "Acura",
        },
        {
            id: 11,
            title: "AC 2010",
            sala: 140000,
            slug: "BMW",
            type: "AC",
        },
        {
            id: 12,
            title: "AC 2010",
            sala: 130000,
            slug: "BMW",
            type: "Buick",
        },
        {
            id: 13,
            title: "AC 2010",
            sala: 140000,
            slug: "BMW",
            type: "Caterham",
        },
        {
            id: 14,
            title: "AC 2010",
            sala: 110000,
            slug: "BMW",
            type: "Corvette",
        },
        {
            id: 15,
            title: "AC 2010",
            sala: 100000,
            slug: "BMW",
            type: "AC",
        },
        {
            id: 16,
            title: "AC 2010",
            sala: 90000,
            slug: "BMW",
            type: "AC",
        },
        {
            id: 17,
            title: "AC 2010",
            sala: 15445,
            slug: "BMW",
            type: "AC",
        },
        {
            id: 18,
            title: "AC 2010",
            sala: 545,
            slug: "BMW",
            type: "AC",
        },
        {
            id: 19,
            title: "AC 2010",
            sala: 54465,
            slug: "BMW",
            type: "AC",
        },
        {
            id: 20,
            title: "AC 2010",
            sala: 54554,
            slug: "BMW",
            type: "AC",
        },
    ]

}
const getters = {
    cars(state) {
        return state.cars
    }
}
const mutations = {

}
const actions = {

}

export default {
    state,
    getters,
    mutations,
    actions
}