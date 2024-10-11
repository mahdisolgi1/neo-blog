import {defineConfig} from "orval";


export default defineConfig({
    NeoBlog: {
        output: {
            mode: "tags-split",
            target: "src/services/generated/index.ts",
            schemas: "src/services/generated/models",
            client: "swr",
            baseUrl:"http://localhost:1337/api"
        },
        input: {
            target: "../backend/src/extensions/documentation/documentation/1.0.0/full_documentation.json",
        },
    },

});
