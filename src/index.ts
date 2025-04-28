export function roundTowardsZero(num: number) {
	if (num < 0) {
		return math.ceil(num);
	} else {
		return math.floor(num);
	}
}
