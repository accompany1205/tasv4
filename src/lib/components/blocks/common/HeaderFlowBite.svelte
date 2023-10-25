<script>
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button, Input, MegaMenu  } from 'flowbite-svelte';
    import LogoUnframedDynamicText from '$lib/assets/svg/LogoUnframedDynamicText.svelte';
    import { ChevronDownOutline } from 'flowbite-svelte-icons';

    let software = [
    { name: 'Blender', href: '/blender' },
    { name: 'SketchUp', href: '/sketchup' },
    { name: 'Fusion 360', href: '/fusion360' },
    { name: 'AutoCAD', href: '/autocad' },
    { name: 'Revit', href: '/revit' },
    { name: 'Unreal Engine', href: '/unrealengine' },
    { name: 'Rhino', href: '/rhino' },
    { name: 'ZBrush', href: '/zbrush' },
    { name: 'Cinema 4D', href: '/cinema4d' },
    { name: 'Civil 3D', href: '/civil3d' },
    { name: 'SolidWorks', href: '/solidworks' }
    ];

    let services = [
    { name: 'Architectural Modeling', href: '/architectural-modeling' },
    { name: 'Architectural Rendering', href: '/architectural-rendering' },
    { name: 'Construction Documentation', href: '/construction-documentation' },
    { name: 'Construction Modeling', href: '/construction-modeling' },
    { name: 'Landscape Modeling', href: '/landscape-modeling' },
    { name: 'MEP Drawings', href: '/mep-drawings' },
    { name: 'Parametric Modeling', href: '/parametric-modeling' },
    { name: 'Sketchup Certification Test', href: '/sketchup-certification-test' },
    { name: 'Interior Design', href: '/interior-design' },
    { name: 'Interior Modeling', href: '/interior-modeling' },
    { name: 'Interior Rendering', href: '/interior-rendering' }
    ];

    let more = [
    { name: 'Sketchup Interior Design Course', href: '/sketchup-interior-design-course' },
    { name: 'Take the SketchUp Test. Get Certified!', href: '/sketchup-test-certification' },
    { name: 'See Our Google Reviews', href: '/google-reviews' },
    { name: 'Jobs', href: '/jobs' }
    ];
 



</script>
  
<Navbar fluid={true} class="flex justify-evenly bg-transparent m-0 p-0" let:hidden let:toggle let:NavContainer>
    <NavContainer class="m-0 mx-0 md:m-auto">
        <LogoUnframedDynamicText
            fill="black"
            class="font-serif mt-auto h-[40px] max-h-[inherit] text-lg max-w-1/4"
            >
            <text class="dyntext" transform="translate(195 34)"> Sketchup </text>
            <text class="dyntext" transform="translate(195 76)"> Tutors & </text>
            <text class="dyntext" transform="translate(195 117)"> Services </text>
        </LogoUnframedDynamicText>

        <NavHamburger on:click={toggle} />
        <NavUl class="order-1" {hidden}>
            <NavLi href="/" active={true}>Home</NavLi>

            <!-- Tutors -->
            <NavLi class="cursor-pointer">
                Tutors<ChevronDownOutline class="w-3 h-3 ml-2 text-primary-800 dark:text-white inline" />
            </NavLi>
                <MegaMenu items={software} let:item class="z-50">
                    <a href={item.href} class="hover:text-primary-600 dark:hover:text-primary-500">{item.name}</a>
                </MegaMenu>

            <!-- Services -->
            <NavLi class="cursor-pointer">
                Services<ChevronDownOutline class="w-3 h-3 ml-2 text-primary-800 dark:text-white inline" />
            </NavLi>
                <MegaMenu items={services} let:item class="z-50">
                    <a href={item.href} class="hover:text-primary-600 dark:hover:text-primary-500">{item.name}</a>
                </MegaMenu>
            
            <!-- More -->
            <NavLi class="cursor-pointer">
                More<ChevronDownOutline class="w-3 h-3 ml-2 text-primary-800 dark:text-white inline" />
            </NavLi>
                <MegaMenu items={more} let:item class="z-50">
                    <a href={item.href} class="hover:text-primary-600 dark:hover:text-primary-500">{item.name}</a>
                </MegaMenu>
        </NavUl>
        
        <Button class="flex bg-emerald-500 rounded py-1 text-xl md:order-2" size="sm">720-335-5282</Button>
    </NavContainer>
</Navbar>


