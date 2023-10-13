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
<<<<<<< HEAD
    <div class="row container-center ">
        <form>
         <div class="row justify-content-center">
            <div class="col-4  mb-4">
                <label class="form-label" for="registerName">Name</label>
                <input type="text" id="registerName" class="form-control input " />
            </div>

            <!-- Username input -->
            <div class="col-4  mb-4">
                <label class="form-label" for="registerUsername">Username</label>
                <input type="text" id="registerUsername" class="form-control input" />
            </div>
        </div>
           <div class="row justify-content-center">
             <!-- Email input -->
             <div class="col-4  mb-4">
                <label class="form-label" for="registerEmail">Email</label>
                <input type="email" id="registerEmail" class="form-control input" />
            </div>

            <!-- Password input -->
            <div class="col-4  mb-4">
                <label class="form-label" for="registerPassword">Password</label>
                <input type="password" id="registerPassword" class="form-control input" />
            </div>
           </div>
=======
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
>>>>>>> 5b4c3e4dd00a10f0382c1c031b0c46011d0f056e
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
<<<<<<< HEAD
            </div>
            <div class="text-center">
                <button type="button" class="btn btn-light m-2 "><router-link class="nav-link" to="login">Sign Up</router-link></button>
            </div>
        
=======
            </div><br>
            <div class="text-center">
                <button type="submit" class="btn btn-outline-primary btn-block mb-3"><router-link class="nav-link" to="login">Sign Up</router-link></button>
            </div>
>>>>>>> 5b4c3e4dd00a10f0382c1c031b0c46011d0f056e
        </form>
    </div>

    <div style="padding: 40px;"></div>
    <Footer></Footer>
</template>

<style scoped>
.center {
    text-align: center;
}
<<<<<<< HEAD
.bgheader {
    background-color: #A8D1E7;
    color: black;
}
.btn-light{
    border-color: #374785;
    color: #374785;
    border-radius: 20px;
}
.button:hover{
  filter: drop-shadow(0 0 px #374785);
}
.input{
    border-color: #A8D1E7;
    color: #A8D1E7;
    border-radius: 20px;
}
label,p{
    color: #374785; 
    margin-left: 20px;
}

=======
>>>>>>> 5b4c3e4dd00a10f0382c1c031b0c46011d0f056e
</style>

