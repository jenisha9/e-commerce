<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>

<template>
  <div>
    <header class="bg-myorange text-white py-2">
      <div class="container mx-auto flex justify-between items-center">
          <ul class="flex items-center justify-center">
            <li class="mr-4">Online order : <a href="#">(2210)-9862564</a></li>
            <li class="mr-4"><a href="#">Order tracking</a></li>
          </ul>
        <ul class="flex items-center justify-center">
          <p class="h-8 mr-20">
            Free worldwide shipping for above united kingdom !
          </p>
         <li>
          <input
            type="text"   
            placeholder="Find our search"
            class=" mr-2 border-none placeholder-white bg-transparent"
          /> 
         </li>
         <font-awesome-icon :icon="['fasr', 'magnifying-glass']" class=" mr-20"/>
          <li class="mr-7">Email now : <a href="#">demo@demo.com</a></li>
        </ul>
      </div>
    </header>
  </div>
  <div>
    <header class="bg-white text-black py-4">
      <div class="container mx-auto flex justify-between items-center">
        <nav>
          <ul class="flex items-center justify-center">
            <li class="mr-4"><a href="#">Home</a></li>
            <li class="mr-4"><a href="#">Collection</a></li>
            <li class="mr-4"><a href="#">Product</a></li>
            <li class="mr-4"><a href="#">Blog</a></li>
            <li class="mr-4"><a href="#">Pages</a></li>
          </ul>
        </nav>
        <div>
          <img src="../assets/images/logo.png" alt="logo" class="h-12">
        </div>
        <ul class="flex items-center justify-center">
          <font-awesome-icon :icon="['far', 'user']" class="mr-2"/>
          <li class="mr-1"><a href="#">Login</a> &</li>
          <li class="mr-4"><a href="#">Register</a></li>
          <font-awesome-icon :icon="['fasl', 'heart']" class="mr-2"/>
          <li class="mr-4"><a href="#">My wishlist</a></li>
          <font-awesome-icon :icon="['fasl', 'bag-shopping']" class="mr-2" />
          <li class="mr-4"><a href="#">My cart</a></li>
        </ul>
      </div>
    </header>
  </div>
</template>