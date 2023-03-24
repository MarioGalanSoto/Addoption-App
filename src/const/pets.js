const pets = [
    {
        pet: 'cats',
        pets: [
            {
                id: '1',
                name: 'lara',
                image: require('../../assets/cat1.png'),
                type: 'Chausie',
                age: '4 years old'
            },
            {
                id: '2',
                name: 'maria',
                image: require('../../assets/cat2.png'),
                type: 'Bobtail',
                age: '2 years old'
            },
            {
                id: '3',
                name: 'Alina',
                image: require('../../assets/cat3.png'),
                type: 'Ragamuffin',
                age: '2 years old'
            },
        ],
    },
    {
        pet: 'dogs',
        pets: [
            {
                id: '1',
                name: 'Scott',
                image: require('../../assets/dog1.png'),
                type: 'Golden Retriever',
                age: '2 years old'
            },
            {
                id: '2',
                name: 'Barry',
                image: require('../../assets/dog2.png'),
                type: 'German Shepherd',
                age: '2 years old'
            },
            {
                id: '3',
                name: 'Max',
                image: require('../../assets/dog3.png'),
                type: 'Foxhound',
                age: '2 years old'
            },
        ]

    },
    {
        pet: 'birds',
        pets: [
            {
                id: '1',
                name: 'Coco',
                image: require('../../assets/bird1.png'),
                type: 'Parrot',
                age: '2 years old'
            },
            // {
            //     id:'2',
            //     name:'Alfredo',
            //     image: require('../../assets/Parakeet-image.jpg'),
            //     type: 'Parrot',
            //     age: '2 years old'
            // },
            {
                id: '3',
                name: 'Rio',
                image: require('../../assets/bird2.png'),
                type: 'Parrot',
                age: '4 years old'
            },
        ]

    },
    {
        pet: "bunnies",
        pets: [
            {
                id: '1',
                name: 'Hopper',
                image: require('../../assets/bunny1.png'),
                type: 'Angora',
                age: '1 years old'
            },
            {
                id: '2',
                name: 'Pokey',
                image: require('../../assets/bunny2.png'),
                type: 'Angora',
                age: '1 years old'
            }
        ]
    },

];

export default pets;