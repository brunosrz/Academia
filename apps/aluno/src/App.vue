<template>
  <main>
    <header><strong>Academia · Aluno</strong></header>
    <RouterView />
  </main>
</template>
<style>
body {
  margin: 0;
  font-family: system-ui, sans-serif;
  background: #f5f7fa;
  color: #172332;
}
main {
  max-width: 72rem;
  margin: auto;
  padding: 2rem;
}
header {
  border-bottom: 1px solid #d9e1eb;
  padding-bottom: 1rem;
}
</style>
