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
  <form @submit.prevent="handleSubmit">
    <div>
      <label for="username">Username:</label>
      <input
        id="username"
        placeholder="Enter your username"
        v-model="form.username"
      />
    </div>

    <div>
      <label for="password">Password:</label>
      <input
        id="password"
        placeholder="Enter your username"
        v-model="form.password"
        type="password"
      />
    </div>

    <button type="submit">Login</button>
  </form>
</template>

<style scoped>
</style>