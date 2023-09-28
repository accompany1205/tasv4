enum Status {
    Active,
    Full,
    OnHold,
  }

export type Tutor = {
    //Personal Info
    id: string;

    // first: string;
    // last: string;
    name: string;
    // email: string;
    // phone: string;


    // status: Status;
    // statusNotes: string;
    hourlyRate: number;

    // location: string;
    // availability: string;
    // aboutMe: string;

    //Web
    title: string;
    // description: string;
    // specialOffer: string;

    //Services
    // software: string[];
    // services: string[];

    //Testimonials
    // testimonials: string[];
  };
  
export const tutors: Tutor[] = [
    {
        id: '2652',
        name: 'Tim D',
        title: 'SketchUp & Solid WORKS Introductory Tutor & 3D Printing',
        hourlyRate: 40
    },
    {
        id: '12112',
        name: 'Aims A',
        title: 'SketchUp Beginner Tutor and VRAY Rendering Services',
        hourlyRate: 40
    },
    {
        id: '24291',
        name: 'Vladamir S',
        title: 'Engineering 3D Visualization and Sketchup Training',
        hourlyRate: 40
    },
    {
        id: '1619',
        name: 'Shanthi O',
        title: 'Sketchup Interior 3D Modelling and Rendering Services',
        hourlyRate: 45
    },
    {
        id: '12081',
        name: 'Kyle T',
        title: 'Sketchup and Layout Tutor for Beginners to Intermediate',
        hourlyRate: 45
    },
    {
        id: '12113',
        name: 'Michael H',
        title: 'AutoCAD Manager, Drafting Specialist and Sketchup Tutor',
        hourlyRate: 45
    },
    {
        id: '18035',
        name: 'Joshua B',
        title: 'Custom 3D Model Drawing Tutor/Service for Architecture &more',
        hourlyRate: 45
    },
    {
        id: '12115',
        name: 'Juan S',
        title: '3D Multi-Program & Multidisciplinary Tutor (English/Spanish)',
        hourlyRate: 50
    },
    {
        id: '20684',
        name: 'Paul H',
        title: 'Sketchup Trainer for Terrain, Landscape & Garden Design',
        hourlyRate: 75
    },
    {
        id: '2515',
        name: 'Geoff B',
        title: 'Sketchup Architectural & Custom 3D Modeling Tutor / Services',
        hourlyRate: 80
    },
    {
        id: '2972',
        name: 'Curt A',
        title: 'Architectural Designer/3D Visualizer/3D Modeling & Rendering',
        hourlyRate: 80
    },
    {
        id: '18836',
        name: 'Matthew W',
        title: 'Advanced AutoCAD and Sketchup Tutor for Architecture',
        hourlyRate: 100
    },
    {
        id: '22530',
        name: 'Joanne S',
        title: 'Interior Design Training with Sketchup and Layout',
        hourlyRate: 100
    }
]