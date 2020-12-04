<template>
<div>
  <div class="box">
    <label>Rounds</label>
    <timeselector v-model="rounds"></timeselector>
  </div>
  <div class="box">
    <label>Round</label>
    <input type="number" value="3" />
  </div>
  <div class="box">
    <label>Rest</label>
    <input type="number" value="12" />
  </div>
  </div>
</template>

<script src="./Settings.ts" lang="ts"></script>
<style src="./settings.scss" lang="scss" scoped></style>
