// Deliver the data through an exported object, making things simple and keeping the data out of the main classes
// We would also add some META CONFIGURATION DATA, however due to time, this data has been hardcoded.
const Infringements = [
    {
        "year": 2013,
        "offences": [
            { key: "Parking", "value": 72362, "faceValue": 8136122, label: "Parking" },
            { key: "Fare Evasion", "value": 69705, "faceValue": 13038900, label: "Fare Evasion" },
            { key: "Compliance", "value": 25172, "faceValue": 6652750, label: "Compliance" },
            { key: "Vehicle", "value": 652, "faceValue": 121359, label: "Vehicle" },
            { key: "Feet on Seat", "value": 330, "faceValue": 35000, label: "Feet on Seat" },
            { key: "Smoking", "value": 371, "faceValue": 87500, label: "Smoking" },
            { key: "Littering", "value": 108, "faceValue": 17860, label: "Littering" },
            { key: "Animal", "value": 91, "faceValue": 22150, label: "Animal" }
        ]
    },
    {
        "year": 2014,
        "offences": [
            { key: "Parking", "value": 91891, "faceValue": 9297100, label: "Parking" },
            { key: "Fare Evasion", "value": 69705, "faceValue": 13038900, label: "Fare Evasion" },
            { key: "Compliance", "value": 32189, "faceValue": 7131850, label: "Compliance" },
            { key: "Vehicle", "value": 7810, "faceValue": 212132, label: "Vehicle" },
            { key: "Feet on Seat", "value": 617, "faceValue": 61700, label: "Feet on Seat" },
            { key: "Smoking", "value": 4500, "faceValue": 100250, label: "Smoking" },
            { key: "Littering", "value": 167, "faceValue": 29150, label: "Littering" },
            { key: "Animal", "value": 1230, "faceValue": 25171, label: "Animal" }
        ]
    }
];

export default Infringements;
