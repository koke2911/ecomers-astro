// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    output: 'server', // <--- ESTO ES CLAVE para el envio de los datos al servidor via GET
});



