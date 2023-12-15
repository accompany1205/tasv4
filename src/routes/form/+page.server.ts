import type { Actions } from './$types';
import { JOTFORM_API } from '$env/static/private';

export const actions = {
	default: async ({ cookies , request }) => {
		const formData = await request.formData();
		console.log(formData);

		let body = '';

		for (const entry of formData) {
			const [key, value] = entry;
			if (value instanceof File) {
                } else {
                    body += key + '=' + encodeURIComponent(value) + '&';
                }
		}

        body += 'submission[90]=SketchUp&submission[98]=newsite';


		console.log(body);

		const url2 = "https://api.jotform.com/form/213494772938167/submissions?apiKey={" + JOTFORM_API +"}";

		const response2 = await fetch(url2, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: body
		});

		// const item2 = await response2.json();


        if (response2.ok) {
            return { success: true };
        } else {
            return { success: false, error: 'Form submission failed' };
        }

	},
} satisfies Actions;
