<script setup>
//import { RouterLink, RouterView } from 'vue-router'
import headermuf from '../views/headermuf.vue'
import Footer from '../components/footer.vue'
</script>

<template>
    <div class="header">
        <headermuf></headermuf>
    </div>
    <br>
    <div class="container">
        <h1 class="center">Welcome to Muvfin!</h1>
        <div>
            <h2 class="center">Sign Up</h2>
        </div>
    </div><br>
    <div class="container-md ">
        <form>
            <div class="form-outline mb-4">
                <label class="form-label" for="registerName">Name</label>
                <input type="text" id="registerName" class="form-control" />
            </div>

            <!-- Username input -->
            <div class="form-outline mb-4">
                <label class="form-label" for="registerUsername">Username</label>
                <input type="text" id="registerUsername" class="form-control" />
            </div>

            <!-- Email input -->
            <div class="form-outline mb-4">
                <label class="form-label" for="registerEmail">Email</label>
                <input type="email" id="registerEmail" class="form-control" />
            </div>

            <!-- Password input -->
            <div class="form-outline mb-4">
                <label class="form-label" for="registerPassword">Password</label>
                <input type="password" id="registerPassword" class="form-control" />
            </div>
            <div class="text-center">
            <p>or sign up with:</p>
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
            </div><br>
            <div class="text-center">
                <button type="submit" class="btn btn-outline-primary btn-block mb-3"><router-link class="nav-link" to="login">Sign Up</router-link></button>
            </div>
        </form>
    </div>

    <div style="padding: 40px;"></div>
    <Footer></Footer>
</template>

<style scoped>
.center {
    text-align: center;
}
</style>

