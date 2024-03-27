import {createRouter, createWebHistory} from "vue-router";
import HomePage from "@/components/UserAuth/HomePage.vue";
import LogIn from "@/components/UserAuth/LogIn.vue";
import DashboardUser from "@/components/UserAuth/DashboardUser.vue";
import AllUser from "@/components/UserAuth/AllUser.vue";

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomePage,
            meta: { requiresAuth: true }, // Add this meta field for routes that require authentication
        },
        {
            path: '/oauth2',
            name: 'Login',
            component: LogIn,
        },
        {
            path: '/dashboard',
            name: 'Dashboard',
            component: DashboardUser,
        },
        {
            path:'/allUser',
            name: 'AllUser',
            component: AllUser,
        }

    ],
});
router.beforeEach((to, from, next) => {
    // Check if the route requires authentication and if the access token is present
    console.log("fjhd",to.meta.requiresAuth && !localStorage.getItem('access_token'));

    if (to.meta.requiresAuth && !localStorage.getItem('access_token')) {
        // Redirect to the login route or perform any other action
            var current_url=  window.open("http://localhost:8085/oauth2/authorize?client_id=R2dpxQ3vPrtfgF72&response_type=code&scope=openid&redirect_uri=http://localhost:8081/oauth2&code_challenge=y52Dtb0Sx1vWQOZWQNlAhkEz81u-pxvt-LcCMc2GkMk&code_challenge_method=S256","_self");
        // next({ name: 'Login' });
        // var current_url=   window.open("http://localhost:8085/oauth2/authorize?client_id=R2dpxQ3vPrtfgF72&response_type=code&scope=openid&redirect_uri=http://localhost:8081/oauth2&code_challenge=l3HZFJ-kEPA_PRnAJKVGseEeQ0JGabmfPZ1o2_E8X8o&code_challenge_method=S256")
        console.log(current_url);
        next();
        // next('/');



    } else {
        // Continue with the navigation
        next();
    }
});

// router.beforeEach((to, from, next) => {
//     // Check if the route requires authentication and if the access token is present
//     console.log(localStorage.getItem('access_token'));
//     if (localStorage.getItem('access_token')===null) {
//         // Redirect to the login route or perform any other action
//         console.log("hey");
//         // window.location.href = "http://localhost:8085/oauth2/authorize?client_id=R2dpxQ3vPrtfgF72&response_type=code&scope=openid&redirect_uri=http://localhost:8081/oauth2&code_challenge=X_A9mT2l0nS42glb0GXpJaC_4QfvKlP8jNSihUgrxOM&code_challenge_method=S256"
//         window.open("http://localhost:8085/oauth2/authorize?client_id=R2dpxQ3vPrtfgF72&response_type=code&scope=openid&redirect_uri=http://localhost:8081/oauth2&code_challenge=X_A9mT2l0nS42glb0GXpJaC_4QfvKlP8jNSihUgrxOM&code_challenge_method=S256")
//         // next("/")
//     } else {
//         // Continue with the navigation
//         next();
//     }
// });

export default  router;
