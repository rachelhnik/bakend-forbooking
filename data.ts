interface dateslot {
    date: string;
    slots: Array<object>;
}

const availability: dateslot[] = [
    {
        date: "01/03/2023",
        slots: [
            {
                hour: 10,
                reserved: 10,
                totalAvailable: 200,
                availableSlot: 190,
            },
            {
                hour: 11,
                reserved: 20,
                totalAvailable: 300,
                availableSlot: 280,
            },
            {
                hour: 12,
                reserved: 100,
                totalAvailable: 100,
                availableSlot: 0,
            },
            {
                hour: 13,
                reserved: 50,
                totalAvailable: 150,
                availableSlot: 100,
            },
        ],
    },
    {
        date: "02/03/2023",
        slots: [
            { hour: 10, reserved: 0, totalAvailable: 200, availableSlot: 200 },
            { hour: 11, reserved: 20, totalAvailable: 100, availableSlot: 80 },
            { hour: 12, reserved: 50, totalAvailable: 60, availableSlot: 10 },
            { hour: 13, reserved: 30, totalAvailable: 300, availableSlot: 270 },
        ],
    },
];

export default availability;
