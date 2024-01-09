<template>
  <div>
    <div class="nav"></div>
    <div id="content">
      <aside>123</aside>
      <article>
        <a>a链接</a>
        <div>666</div>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
$bb-red: red;
.nav {
  $width: 100px;
  width: $width;
  color: $bb_red;
}

#content {
  background-color: red;
  aside {
    background-color: yellow;
  }
  article a {
    color: blue;
    &:hover {
      color: red;
    }
  }
}
</style>
