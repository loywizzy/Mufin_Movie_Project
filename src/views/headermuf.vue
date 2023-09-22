<script setup>
</script>
<template>
    <nav class="navbar navbar-expand-lg bgheader" id="bgheader">
        <div class="container-fluid">
            <a class="navbar-brand p-2 m-3" href="#">MUFIN</a>
            
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <!-- ลิงค์ไปหน้า Popula -->
                    <li class="nav-item">
                        <a class="nav-link" href="popula.html">Popula</a>
                    </li>
                    <!-- ปุ่ม Login -->
                    <li class="nav-item">
                        <a class="nav-link" href="#">Login</a>
                    </li>
                    <!-- ปุ่ม Register -->
                    <li class="nav-item">
                        <a class="nav-link" href="#">Register</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>

.bgheader {
    background-color: #A8D1E7;
    color: black;
}

</style>