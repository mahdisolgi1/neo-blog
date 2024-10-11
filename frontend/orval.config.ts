import { defineConfig } from 'orval';



export default defineConfig({
    NeoBlog: {
        output: {
            mode: "tags-split",
            target: "src/services/generated/index.ts",
            schemas: "src/services/generated/models",
            client: "swr",
        },
        input: {
            target: "../backend/src/extensions/documentation/documentation/1.0.0/full_documentation.json",
        },
    },
});
