import App from "./App.svelte";
import Admin from "./admin/App.svelte";

const app = new App({
    target: document.body,
    props: {
        name: "world",
    },
});
const admin = new Admin({
    target: document.getElementById("admin-menu"),
});
