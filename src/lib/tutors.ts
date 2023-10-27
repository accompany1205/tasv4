const featured_images_import = import.meta.glob('$lib/assets/tutors/**/img/*.webp', {
	query: {
		format: 'webp;jpeg',
		w: '512;256;128;', //120;240;480;
		picture: '',
		as: 'srcset',
	},
	import: 'default',
	eager: true,
});
let featured_images: Record<string, string> = {};
Object.entries(featured_images_import).map(([key,value]) => {
	let segments = key.split('/'); 
	// console.log(segments)
	featured_images[segments[5]] = value;
})


const headshots_import = import.meta.glob('$lib/assets/tutors/**/hs.webp', {
	query: {
		format: 'webp;jpeg',
		w: '512;256;128;', //120;240;480;
		picture: '',
		as: 'srcset',
	},
	import: 'default',
	eager: true,
});
let headshots: Record<string, string> = {};
Object.entries(headshots_import).map(([key,value]) => {
	let segments = key.split('/'); 
	// console.log(segments)
	headshots[segments[5]] = value;
})

export {featured_images, headshots}

enum Status {
	Active,
	Full,
	OnHold,
}

export type Tutor = {
	id: string;
	first: string;
	last: string;
	name: string;
	hourlyRate: number;

	title?: string;
	software?: string[];
	services?: string[];
	ratingScore?: number;
	ratingCount?: number;
};

export function getTutors(tutorIds: string[]): Tutor[] {
	const selectedTutors = tutorIds
		.map((id) => tutors.find((tutor) => tutor.id === id))
		.filter(Boolean) as Tutor[];
	return selectedTutors;
}

export const tutors: Tutor[] = [
	{
		id: '2652',
		first: 'Tim',
		last: 'Delaplane',
		name: 'Tim D',
		title: 'SketchUp & Solid WORKS Introductory Tutor & 3D Printing',
		hourlyRate: 40,
		software: ['Sketchup', 'Solidworks'],
		services: [],
		ratingScore: 4.94,
		ratingCount: 431,
	},
	{
		id: '12112',
		first: 'Aims',
		last: 'Arnhart',
		name: 'Aims A',
		title: 'SketchUp Beginner Tutor and VRAY Rendering Services',
		hourlyRate: 40,
		software: ['VRay', 'Sketchup', 'Layout'],
		services: [
			'Architectural Modeling',
			'Architectural Rendering',
			'Interior Modeling',
			'Interior Rendering',
			'Urban Planning Illustrations',
		],
		ratingScore: 5.0,
		ratingCount: 0,
	},
	{
		id: '24291',
		first: 'Vladimir',
		last: 'Simonovski',
		name: 'Vladimir S',
		title: 'Engineering 3D Visualization and Sketchup Training',
		hourlyRate: 40,
		software: ['Sketchup', 'Layout'],
		services: [
			'3D Visualization',
			'3D Pick Plans',
			'3D Work Plans',
			'Integrated Shop Drawings',
			'Renderings and Animation',
		],
		ratingScore: 0,
		ratingCount: 0,
	},
	{
		id: '1619',
		first: 'Shanthi',
		last: 'OConnell',
		name: 'Shanthi O',
		title: 'Sketchup Interior 3D Modelling and Rendering Services',
		hourlyRate: 45,
		software: ['Sketchup', 'Podium', 'Revit LT', 'Twinmotion', 'Podium Walker', 'Power Point'],
		services: [
			'SketchUp Pro 2020 Interior and Exterior Modeling Services',
			'Layout 2020 for Construction Documentation',
			'Revit LT 2020',
			'Animation Walkthrough',
			'Virtual Staging',
			'Architectural Modeling',
			'Architectural Rendering',
			'Construction Documentation',
		],
		ratingScore: 4.91,
		ratingCount: 534,
	},
	{
		id: '12081',
		first: 'Kyle',
		last: 'Thoe',
		name: 'Kyle T',
		title: 'Sketchup and Layout Tutor for Beginners to Intermediate',
		hourlyRate: 45,
		software: ['Sketchup', 'Layout', 'InDesign', 'Python Programming'],
		services: [
			'Construction Modeling',
			'Conceptual',
			'Product Design Modeling',
			'Architectural Rendering',
			'Construction Documentation',
			'Architectural Modeling',
			'Furniture Modeling',
			'Interior Modeling',
			'Landscape Modeling',
		],
		ratingScore: 4.98,
		ratingCount: 427,
	},
	{
		id: '12113',
		first: 'Michael',
		last: 'Hosler',
		name: 'Michael H',
		title: 'AutoCAD Manager, Drafting Specialist and Sketchup Tutor',
		hourlyRate: 45,
		software: ['AutoCAD', 'Sketchup', 'Layout'],
		services: ['Architectural Modeling'],
		ratingScore: 4.87,
		ratingCount: 127,
	},
	{
		id: '18035',
		first: 'Joshua',
		last: 'Berindei',
		name: 'Joshua B',
		title: 'Custom 3D Model Drawing Tutor/Service for Architecture &more',
		hourlyRate: 45,
		software: ['Sketchup', 'AutoCAD', 'Lumion', 'Archicad'],
		services: [
			'Architectural Modeling',
			'Architectural Rendering',
			'Interior Design',
			'Construction Modeling',
		],
		ratingScore: 0,
		ratingCount: 0,
	},
	{
		id: '12115',
		first: 'Juan',
		last: 'Santizo',
		name: 'Juan S',
		title: '3D Multi-Program & Multidisciplinary Tutor (English/Spanish)',
		hourlyRate: 50,
		software: [
			'Sketchup',
			'Blender',
			'3DS MAX',
			'After Effects',
			'Cinema 4D',
			'VRay',
			'Final Cut',
			'Lumion',
			'Photoshop',
			'Illustrator',
		],
		services: [
			'Architectural Modeling',
			'3D Print Modeling',
			'Product Rendering',
			'Landscape Modeling',
			'Product Development',
			'Architectural Rendering',
			'Construction Documentation',
		],
		ratingScore: 4.89,
		ratingCount: 306,
	},
	{
		id: '20684',
		first: 'Paul',
		last: 'Hensey',
		name: 'Paul H',
		title: 'Sketchup Trainer for Terrain, Landscape & Garden Design',
		hourlyRate: 75,
		software: ['Sketchup', 'Layout', 'Twinmotion'],
		services: [
			'Landscape Modeling',
			'Construction Documentation',
			'Architectural Rendering',
			'Construction Modeling',
		],
		ratingScore: 5.0,
		ratingCount: 3,
	},
	{
		id: '2515',
		first: 'Geoff',
		last: 'Bostwick',
		name: 'Geoff B',
		title: 'Sketchup Architectural & Custom 3D Modeling Tutor / Services',
		hourlyRate: 80,
		software: ['Sketchup', 'Layout', 'Jotform', 'Google Sheets'],
		services: [
			'Conceptual Architectural 3D Sketchup Models',
			'3D Models for Construction and Manufacturing',
			'3D Landscape & Terrain Modeling from 2D Contour Lines',
			'Modeling for 3D Printing',
			'Custom 3D Furniture Modeling',
			'Custom 3D Models for any Industry',
			'Architectural Modeling',
			'Furniture Modeling',
			'Interior Modeling',
			'3D Print Modeling',
		],
		ratingScore: 4.93,
		ratingCount: 155,
	},
	{
		id: '2972',
		first: 'Curt',
		last: 'Adams',
		name: 'Curt A',
		title: 'Architectural Designer/3D Visualizer/3D Modeling & Rendering',
		hourlyRate: 80,
		software: ['Sketchup', 'Layout', 'Enscape', 'Twinmotion'],
		services: [
			'3D Print Modeling',
			'Interior Modeling',
			'Landscape Modeling',
			'Architectural Modeling',
			'Architectural Rendering',
			'Interior Rendering',
			'CNC Modeling',
			'Construction Documentation',
			'Furniture Modeling',
		],
		ratingScore: 4.83,
		ratingCount: 79,
	},
	{
		id: '18836',
		first: 'Matthew',
		last: 'Wheeler',
		name: 'Matthew W',
		title: 'Advanced AutoCAD and Sketchup Tutor for Architecture',
		hourlyRate: 100,
		software: ['Sketchup', 'Layout', 'AutoCAD'],
		services: [
			'Architectural Modeling',
			'Building Custom Dynamic Components',
			'Architectural Plans',
			'Architectural Rendering',
			'3D Modeling',
			'CAD',
		],
		ratingScore: 5.0,
		ratingCount: 2,
	},
	{
		id: '22530',
		first: 'Joanne',
		last: 'Swisterski',
		name: 'Joanne S',
		title: 'Interior Design Training with Sketchup and Layout',
		hourlyRate: 100,
		software: ['Sketchup'],
		services: ['Interior Design'],
		ratingScore: 0,
		ratingCount: 0,
	},
];
