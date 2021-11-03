<script setup lang="ts">
import { computed, watch } from "vue";
import { useStore } from "vuex";
import { authState, useAuth } from "../auth";

const { user, forceLogout } = useAuth();
const { loggedIn } = authState();

console.log(user, loggedIn);
</script>

<template>
  <div class="bg-indigo-500">
    <div
      class="
        container
        flex
        justify-between
        items-center
        mx-auto
        py-4
        text-white
      "
    >
      <div class="space-x-6">
        <span class="font-bold">Vue Auth Demo</span>
        <router-link to="/" class="font-semibold">Home</router-link>
      </div>

      <div class="space-x-4">
        <template v-if="loggedIn">
          <a> Hi, {{ user?.name }} </a>
          <button
            type="button"
            @click="forceLogout"
            class="
              px-4
              inline-block
              py-2
              border border-white
              rounded-lg
              hover:bg-white hover:text-indigo-600
              transition
              duration-300
            "
          >
            Logout
          </button>
        </template>

        <router-link
          v-else
          to="/login"
          class="
            px-4
            inline-block
            py-2
            border border-white
            rounded-lg
            hover:bg-white hover:text-indigo-600
            transition
            duration-300
          "
        >
          Login
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>