export const getTutorWithUserID = async ( userId: string): Promise<any> => {
	try {
		const res = await fetch('/api/tutor', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
				// Add any additional headers here
			},
			body: JSON.stringify({ userId }),
		});
		if (res.ok) {
			const data = await res.json();
			return data.body.tutor;
		}
		return null;
	} catch (error) {
		console.log('Error updating the doc: Tutors');
		return null;
	}
};
