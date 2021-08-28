<template>
 <section>
    <h2>Department of Conservation
      <br>
      <br>
      Birdstagram
    </h2>
    
  </section>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>

section {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  background-color: #1b4036;
  height: 100vh;
  width: 100vw;
  color: #1b4036;
}

section:hover {
  color: white;
  border-radius: 15em;
  width:40vw;
  height:40vw;
  transition: 4s ease all;
  background-color: rgb(43, 70, 59);
}

</style>