<script setup lang="ts">
import { reactive, ref } from "vue";
import { useAuth } from "../auth";
import router from "../router";

const { loginAs } = useAuth();

const form = reactive({
  name: "John Doe",
  username: "",
  password: "",
});

const handleSubmit = async () => {
  const token = "THISISEXAMPLETOKEN1234#";
  const res = await loginAs(form, token);
  if (res.code === 200) {
    router.push("/");
  }
};
</script>

<template>
  <form class="space-y-4" @submit.prevent="handleSubmit">
    <h1 class="text-3xl font-semibold text-gray-900">Login</h1>

    <div class="space-y-1">
      <label class="block font-semibold" for="username">Username:</label>
      <input
        id="username"
        placeholder="Enter your username"
        class="
          border
          px-4
          py-2
          rounded
          w-full
          focus:border-indigo-500 focus:ring-indigo-500
          transition
          duration-300
        "
        v-model="form.username"
      />
    </div>

    <div class="space-y-1">
      <label class="block font-semibold" for="password">Password:</label>
      <input
        id="password"
        placeholder="Enter your username"
        class="
          border
          px-4
          py-2
          rounded
          w-full
          focus:border-indigo-500 focus:ring-indigo-500
          transition
          duration-300
        "
        v-model="form.password"
        type="password"
      />
    </div>

    <button
      type="submit"
      class="
        block
        w-full
        bg-indigo-500
        hover:bg-indigo-600
        transition
        duration-300
        text-white
        rounded-lg
        px-4
        py-3
        font-semibold
      "
    >
      Login
    </button>
  </form>
</template>

<style scoped>
</style>