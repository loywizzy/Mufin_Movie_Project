<script setup>
//import { RouterLink, RouterView } from 'vue-router'
import headermuf from '../views/headermuf.vue'
import Footer from '../components/footer.vue'
import { userlogin } from '../store/user'
const login = userlogin()

</script>

<template>
    <div class="header">
        <headermuf></headermuf>
    </div>
    <br>
    <div class="container">
        <h1 class="center">Welcome to Muvfin!</h1>
        <div>
            <h2 class="center">Sign In</h2>
        </div>
    </div><br>
    <div class="container-md">
        <form>

            <div class="mb-4">
                <label for="form2Example1" class="form-label">Email address</label>
                <input type="email" id="form2Example1" class="form-control" />
            </div>

            <div class="mb-4">
                <label for="form2Example2" class="form-label">Password</label>
                <input type="password" id="form2Example2" class="form-control" />
            </div>

            <div class="text-center">
                <button type="button" class="btn btn-outline-primary btn-block mb-4"><router-link to="/" class="nav-link" @click="login.logined()">Sign in</router-link></button>
            </div>

            <div class="text-center">
                <p>Not a member? <router-link class="nav-link" to="signup" style="color: rgb(0, 47, 255);"> Register</router-link></p>
                <p>or sign in with:</p>
                <div class="btn-group" role="group" aria-label="Social Sign Up">
                    <button type="button" class="btn btn-link btn-floating mx-1">
                        <i class="fab fa-facebook-f"></i>
                    </button>

                    <button type="button" class="btn btn-link btn-floating mx-1">
                        <i class="fab fa-google"></i>
                    </button>

                    <button type="button" class="btn btn-link btn-floating mx-1">
                        <i class="fab fa-twitter"></i>
                    </button>

                    <button type="button" class="btn btn-link btn-floating mx-1">
                        <i class="fab fa-github"></i>
                    </button>
                </div>
            </div>
        </form>
    </div>
    <div style="padding: 110px;"></div>


    <Footer></Footer>
</template>

<style scoped>
.center {
    text-align: center;
}
</style>

