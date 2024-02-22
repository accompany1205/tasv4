export const _addDoc = async (documentName: string, data: any): Promise<void> => {
	try {
		await fetch('/api/doc', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
				// Add any additional headers here
			},
			body: JSON.stringify({documentName, data}),
		});
	} catch (error) {
		console.log('Error adding the doc: ', documentName);
	}
};
export const _deleteDoc = async (documentName: string, id: string): Promise<void> => {
	try {
		await fetch('/api/doc', {
			method: 'delete',
			headers: {
				'Content-Type': 'application/json',
				// Add any additional headers here
			},
			body: JSON.stringify({documentName, id}),
		});
	} catch (error) {
		console.log('Error deleting the doc: ', documentName);
	}
};
export const _updateDoc = async (documentName: string, data: any): Promise<void> => {
	try {
        await fetch('/api/doc', {
			method: 'put',
			headers: {
				'Content-Type': 'application/json',
				// Add any additional headers here
			},
			body: JSON.stringify({documentName, data}),
		});
	} catch (error) {
		console.log('Error updating the doc: ', documentName);
	}
};
