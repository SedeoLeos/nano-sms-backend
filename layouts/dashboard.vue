<script lang="ts" setup>
const { drawer, toogle } = useDrawer();
definePageMeta({
  // middleware: ["auth"]
  // or middleware: 'auth'
})

</script>
<template>
  <div class="relative h-screen w-screen ">
    <LayoutNavbar />
    <LayoutSidbar />
    <div :class="drawer.layout.main" class="p-4 absolute top-20 z-0 right-0 ">
      <div class="w-full p-5">
        <slot />

      </div>
    </div>

  </div>
</template>
<style scoped></style>
