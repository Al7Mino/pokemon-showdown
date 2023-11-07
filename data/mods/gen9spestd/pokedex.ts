export const Pokedex: {[k: string]: ModdedSpeciesData} = {
	abomasnow: {
		inherit: true,
		baseStats: {hp: 100, atk: 92, def: 75, spa: 92, spd: 85, spe: 60},
	},
	newpok: {
		num: 9001,
		name: "NewPok",
		types: ["Normal"],
		baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 105, spe: 100},
		abilities: {0: "Keen Eye", 1: "Tangled Feet", H: "Big Pecks"},
		heightm: 1.2,
		weightkg: 85.5,
		color: "White",
		eggGroups: ["Monster", "Grass"],
	}
};
