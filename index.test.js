const isLetter = require("./index");
const solution = require("./system/solution");

const { getRandomInt } = require("./system/environment");

test('Функция должна вернуть булиновое значение', () => {
	const type = typeof isLetter(72);

	expect(type).toBe('boolean');
});

test('Тест. charCode: 72', () => {
	const res = isLetter(72);

	expect(res).toBe(true);
});

test('Тест. charCode: -68', () => {
	const res = isLetter(-68);

	expect(res).toBe(false);
});

test('Тест. charCode: 12', () => {
	const res = isLetter(12);

	expect(res).toBe(false);
});

test('Тест. charCode: 96', () => {
	const res = isLetter(96);

	expect(res).toBe(false);
});

test('Тест. charCode: 122', () => {
	const res = isLetter(122);

	expect(res).toBe(true);
});

test('Тест. charCode: 64', () => {
	const res = isLetter(64);

	expect(res).toBe(false);
});

test('Тест. charCode: 90', () => {
	const res = isLetter(90);

	expect(res).toBe(true);
});

test('Auto: random outcomes', () => {
	let failed = false;

	for (let i = 0; i < 100; i++) {
		const rand = getRandomInt(-200, 200);

		if (solution(rand) !== isLetter(rand)) {
			failed = 'failed';
			break;
		}
	}

	expect(failed).not.toBe('failed');
});