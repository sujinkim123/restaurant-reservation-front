<template>
  <div id="app">
    <div class="board-contents">
      <h3>{{ title }}</h3>
      <div>
        <strong class="w3-large">{{ writer }}</strong>
        <br>
        <span>{{  formatDate(createdAt) }}</span>
      </div>
    </div>
    <div class="board-contents">
      <span>{{  contents }}</span>
    </div>
    <div class="common-buttons">
      <button type="button" class="w3-round w3-gray" v-on:click="fnList">목록으로</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ViewBoard',
  data() {
    return {
      requestBody: this.$route.query,
      idx: this.$route.query.idx,
      title: '',
      writer: '',
      contents: '',
      createdAt: ''
    }
  },
  mounted() {
    this.fnGetView()
  },
  methods: {
    fnGetView() {
      this.$axios.get(this.$serverUrl + '/board/' + this.idx, {
        params: this.requestBody
      }).then((res) => {
        this.title = res.data.title
        this.writer = res.data.writer
        this.contents = res.data.contents
        this.createdAt = res.data.createdAt
      }).catch((err) => {
        if (err.message.indexOf('Network Error') > -1) {
          alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
        }
      })
    },
    fnList() {
      delete this.requestBody.idx
      this.$router.push({
        path: './list',
        query: this.requestBody
      })
    },
    formatDate: function(dateString) {
      var date = new Date(dateString);
      var year = date.getFullYear();
      var month = ('0' + (date.getMonth() + 1)).slice(-2);
      var day = ('0' + date.getDate()).slice(-2);
      return `${year}-${month}-${day}`;
    }
  }
}
</script>

<style>
@font-face {
  font-family: 'imcreSoojin';
  src:url('../assets/font/ImcreSoojin.ttf')
}
@font-face {
  font-family: 'korta-hope';
  src: url('../assets/font/KOTRA HOPE.ttf');
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>