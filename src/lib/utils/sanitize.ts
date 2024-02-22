export function sanitizeForFirestore(obj: Record<string, any>): Record<string, any> {
	const sanitizedObj = { ...obj };
	Object.keys(sanitizedObj).forEach((key) => {
		if (sanitizedObj[key] === undefined) {
			// Convert undefined values to null
			sanitizedObj[key] = null;
		}
	});
	return sanitizedObj;
}