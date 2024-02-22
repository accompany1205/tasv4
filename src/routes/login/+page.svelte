<script lang="ts">
    import { onMount } from "svelte";
    import { login } from "$lib/api";
    import { goto } from '$app/navigation';
    import { currentUser } from "$lib/stores/sessions";

    let email = '';
    let password = '';
    let errorMessage = '';

    import { Section, Register } from 'flowbite-svelte-blocks';
    import { Button, Checkbox, Label, Input } from 'flowbite-svelte';


    import Logo from "$lib/assets/logos/logo.webp";

    async function signIn() {
        try {
            const user = await login(email, password);
            console.log("success", user); 
            goto("/");
        } catch (error:any) {
            errorMessage = error.message;
        }
    }

    onMount(()=>{
        // console.log({currentUser});
        const { subscribe } = currentUser;
		const unsubscribe = subscribe((value: any) => {
			console.log({ auth: value });
			if (value) {
				// goto('/');
			}
		});
        
        
        return unsubscribe;
        // if(currentUser) goto("/")
    })
</script>

<Section name="login">
    <Register href="/">
        <svelte:fragment slot="top">
            <img class="w-56" src={Logo} alt="logo" />
        </svelte:fragment>

        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div class="flex flex-col space-y-6">
                <h3 class="text-xl font-medium text-gray-900 dark:text-white p-0">Login</h3>
                <Label class="space-y-2">
                    <span>Your email</span>
                    <Input type="email" name="email" bind:value={email}/>

                </Label>
                    <Label class="space-y-2">
                    <span>Your password</span>

                <Input type="password" name="password" bind:value={password}/>
                    </Label>
                    <div class="flex items-start">

                <!-- <Checkbox>Remember me</Checkbox>
                <a href="/" class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Forgot password?</a> -->

                </div>
                <Button class="w-full" on:click={signIn}>Sign in</Button>
            </div>

            {#if errorMessage}
                <p class="text-red-500">{errorMessage}</p>
            {/if}
        </div>
    </Register>
</Section>