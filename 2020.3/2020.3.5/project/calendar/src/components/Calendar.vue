<template>
  <div class="calendar">
    <article>
        <div>1</div>
        <div>2</div>
        <div>3</div>
    </article>
  </div>
</template>

<script>
import '../assets/font_5nkp3jsd3nk/iconfont'
export default {
  name: "Calendar",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
    padding: 0;
    margin: 0;
}

article{
    border:solid 5px blueviolet;
    display: flex;
    flex-direction: column-reverse;
}

article *{
    width: 100px;
    height: 100px;
    background: red;
    margin: 10px; 
}


</style>