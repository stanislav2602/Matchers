import sortHeroes from "../src/index.js";

test ('sort heroes', () => {
    const heroes = [
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
    ];

    expect(sortHeroes(heroes)).toEqual([
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10},
    ]);

    expect(heroes).toEqual([
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
    ]);
});

test('empty array', ()=> {
    expect(sortHeroes([])).toEqual([]);
});