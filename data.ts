interface dateslot {
  date: string;
  slots: Array<object>;
}

const availability: dateslot[] = [
  {
    date: "01/03/2023",
    slots: [
      { 10: { reserved: 10, totalAvailable: 200, availableSlot: 190 } },
      { 11: { reserved: 20, totalAvailable: 300, availableSlot: 280 } },
      { 12: { reserved: 100, totalAvailable: 100, availableSlot: 0 } },
      { 13: { reserved: 50, totalAvailable: 150, availableSlot: 100 } },
    ],
  },
  {
    date: "02/03/2023",
    slots: [
      { 10: { reserved: 0, totalAvailable: 200, availableSlot: 200 } },
      { 11: { reserved: 20, totalAvailable: 100, availableSlot: 80 } },
      { 12: { reserved: 50, totalAvailable: 60, availableSlot: 10 } },
      { 13: { reserved: 30, totalAvailable: 300, availableSlot: 270 } },
    ],
  },
];

export default availability;
