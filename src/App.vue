<script setup lang="ts">
import Sidebar from './components/Sidebar.vue';
import Card from './components/Card.vue';

</script>

<template>
  <div class="page">
    <header>
      <div class="logo">Жилфонд</div>
      <div class="user">Пользователь</div>
    </header>
    <main>
      <Sidebar />
      <Card />
    </main>
  </div>
</template>

<style scoped>
.page {
  width: 1266px;
  margin: 0 auto;
  font-family: 'Montserrat';
}

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 46px 0 30px 0;
}

main {
  min-height: 575px;
  background: #FDFDFD;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: flex;
}

.logo {
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  color: #E31F24;
}

.user {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #333333;
}
</style>
