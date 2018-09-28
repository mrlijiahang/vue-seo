<template>
  <div class="hello">
    {{msg}}
    <h1>3333</h1>
  </div>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: "vuesso-three",
      meta: [
        {
          name: "vuesso-three-name",
          content: "vuesso-three-content"
        }
      ],
      link: [
        {
  
          href: "https://www.baidu.com/"
        }
      ]
    };
  },
  data() {
    return {
      msg: "Welcome to ssodemo-one"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
