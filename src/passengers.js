import passenger1 from './assets/passenger1.jpg';
import passenger2 from './assets/passenger2.jpg';
import passenger3 from './assets/passenger3.jpg';

const passengers = [
    {
        id: 1,
        imgURL: passenger1,
        name: 'Clark Kent',
        email: 'clarkent@email.com',
        phone: '+123 456 789',
        location: 'Metropolis, US',
        departure: 'Jackson Heights',
        address1: '37-27 74th Street',
        arrival: 'Greenpoint',
        address2: '81 Gate St Brookling',
        distance: 12,
        time: 20,
        energy: 120,
    },
    {
        id: 2,
        imgURL: passenger2,
        name: 'Lois Lane',
        email: 'loislane@email.com',
        phone: '+987 654 321',
        location: 'Metropolis, US',
        departure: 'Princeton Avenue',
        address1: 'Bronx, NY 10472',
        arrival: 'Creek Road',
        address2: '75028 Flower Mound',
        distance: 9,
        time: 12,
        energy: 85,
    },
    {
        id: 3, 
        imgURL: passenger3,
        name: 'Lara Lor-Van',
        email: 'lara@email.com',
        phone: '+918 372 574',
        location: 'Krypton, SP',
        departure: 'Trout Ave',
        address1: 'QC G4A 7T2',
        arrival: 'Sierra Street',
        address2: 'Winter Park, 32792',
        distance: 40,
        time: 56,
        energy: 274,
    }
];

export default passengers;