<template lang="pug">
  v-app
    v-content
      v-container.fill-height(fluid)
        v-row.mx-auto(align="center" justify="center" no-gutters)
          v-col.pt-0(cols="auto")
            slot
</template>
