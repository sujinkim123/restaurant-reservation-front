<template>
  <div id="app">
    <div class="table-container">
      <table class="w3-table-all table table-striped">
        <thead>
          <tr>
            <th>NO</th>
            <th>제목</th>
            <th>작성자</th>
            <th>등록일시</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, idx) in list" :key="idx">
            <td>{{ row.idx }}</td>
            <td><a v-on:click="fnView(`${row.idx}`)">{{ row.title }}</a></td>
            <td>{{ row.writer }}</td>
            <td>{{ formatDate(row.createdAt) }}</td>
          </tr>
        </tbody>
      </table>
      <div class="pagination w3-bar w3-padding-16 w3-small" v-if="paging.total_list_cnt > 0">
        <span class="pg">
          <a href="javascript:;" @click="fnPage(1)" class="first w3-button w3-bar-item w3-border">&lt;&lt;</a>
          <a href="javascript:;" v-if="paging.start_page > 10" @click="fnPage(`${paging.start_page-1}`)"
            class="prev w3-button w3-bar-item w3-border">&lt;</a>
            <template v-for=" (n, index) in paginavigation()">
              <template v-if="paging.page ==n">
                <strong class="w3-button w3-bar-item w3-border w3-green" :key="index">{{ n }}</strong>
              </template>
              <template v-else>
                <a class="w3-button w3-bar-item w3-border" href="javascript:;" @click="fnPage(`${n}`)" :key="index">{{ n }}</a>
              </template>
            </template>
            <a href="javascript:;" v-if="paging.total_page_cnt > paging.end_page"
              @click="fnPage(`${paging.end_page+1}`)" class="next w3-button w3-bar-item w3-border">&gt;</a>
            <a href="javascript:;" @click="fnPage(`${paging.total_page_cnt}`)" class="last w3-button w3-bar-item w3-border">&gt;&gt;</a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ViewBoard',
  data() { // 변수 생성
    return {
      requestBody: {}, // 리스트 페이지 데이터 전송
      list: {}, // 리스트 데이터
      no: '', // 게시판 숫자 처리
      paging: {
        block: 0,
        end_page : 0,
        next_block: 0,
        page: 0,
        page_size: 0,
        prev_block: 0,
        start_index : 0,
        start_page : 0,
        total_block_cnt: 0,
        total_list_cnt : 0,
        total_page_cnt : 0,
      }, // 페이징 데이터
      page : this.$route.query.page ? this.$route.query.page : 1,
      size : this.$route.query.size ? this.$route.query.size : 10,
      keyword : this.$route.query.keyword,
      paginavigation : function () {
        let pageNubmer = [];
        let start_page = this.paging.start_page;
        let end_page = this.paging.end_page;
        for (let i = start_page; i <= end_page; i++) pageNubmer.push(i);
        return pageNubmer;
      }
    }
  },
  mounted() {
    this.fnGetList()
  },
  methods: {
    fnGetList() {
      this.requestBody = {
        keyword: this.keyword,
        page: this.page,
        size: this.size
      }

      this.$axios.get(this.$serverUrl + "/board/list", {
        params: this.requestBody,
        headers: {}
      }).then((res) => {
        this.list = res.data
      }).catch((err) => {
        if (err.message.indexOf('Network Error') > -1) {
          alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
        }
      })
    },
    fnView(idx) {
      this.requestBody.idx = idx
      this.$router.push({
        path: './detail',
        query: this.requestBody
      })
    },
    fnPage(n) {
      if (this.page !== n) {
        this.page = n
        this.fnGetList
      }
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
.table-container {
  width: 80%;
  height: 80%;
  margin-left: 150px;
}
.board-list {
  width: 768px;
  margin: auto;
  font-family: 'korta-hope';
  font-size: 30px;
}
.board-detail {
  width: 768px;
  margin: auto;
  text-align:center;
}
.board-contents {
  padding: 12px 8px;
  border-bottom: 1px solid #eee;
}
</style>