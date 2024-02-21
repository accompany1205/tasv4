<script lang="ts">
    import { db } from "$lib/firebase";
    import { collection, getDocs } from "firebase/firestore";
    import { onMount } from "svelte";
    import { singIn } from "$lib/auth";
    import { firebaseAuth } from "$lib/firebase";
    import { signInWithEmailAndPassword } from "firebase/auth";
    import { goto } from '$app/navigation';

    let email = '';
    let password = '';
    let errorMessage = '';

    import { Section, Register } from 'flowbite-svelte-blocks';
    import { Button, Checkbox, Label, Input } from 'flowbite-svelte';


    import Logo from "$lib/assets/logos/logo.webp";

    async function login() {
        try {
            const user = await signInWithEmailAndPassword(firebaseAuth, email, password);
            singIn(user);
            console.log("success"); 
            goto("/tas");
        } catch (error:any) {
            errorMessage = error.message;
        }
    }
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
                <Button class="w-full" on:click={login}>Sign in</Button>
            </div>

            {#if errorMessage}
                <p class="text-red-500">{errorMessage}</p>
            {/if}
        </div>
    </Register>
</Section>