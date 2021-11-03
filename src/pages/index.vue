<script setup lang="ts">
import { ref, toRefs } from "vue";

interface Props {
  modelValue?: string;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: "",
});

const { modelValue } = toRefs(props);

const emit = defineEmits(["update:modelValue"]);

const value = ref("");
</script>

<template>
  <div>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa dolorem,
    quaerat voluptates totam, expedita eligendi in sint consequatur quas
    dignissimos perspiciatis quidem alias libero, non veritatis! Sapiente
    ratione exercitationem perspiciatis.
  </div>
</template>

<style scoped>
</style>