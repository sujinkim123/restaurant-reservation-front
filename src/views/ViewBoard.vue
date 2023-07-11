<!-- https://onethejay.tistory.com/72 -->

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
      <div class="pagination w3-bar w3-padding-16 w3-small" v-if="paging.totalListCnt > 0">
        <span class="pg" style="display: flex; justify-content: center;">
          <a href="javascript:;" @click="fnPage(1)" class="first w3-button w3-bar-item w3-border">&lt;&lt;</a>
          <a href="javascript:;" v-if="paging.startPage > 10" @click="fnPage(`${paging.startPage-1}`)"
            class="prev w3-button w3-bar-item w3-border">&lt;</a>
            <template v-for=" (n, index) in paginavigation()">
              <template v-if="paging.page ==n">
                <strong class="w3-button w3-bar-item w3-border w3-green" :key="index">{{ n }}</strong>
              </template>
              <template v-else>
                <a class="w3-button w3-bar-item w3-border" href="javascript:;" @click="fnPage(`${n}`)" :key="index">{{ n }}</a>
              </template>
            </template>
              <a href="javascript:;" v-if="paging.totalPageCnt > paging.endPage" @click="fnPage(paging.endPage + 1)" class="next w3-button w3-bar-item w3-border">&gt;</a>
              <a href="javascript:;" @click="fnPage(paging.totalPageCnt)" class="last w3-button w3-bar-item w3-border">&gt;&gt;</a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import '../assets/css/w3.css';

export default {
  name: 'ViewBoard',
  data() {
    return {
      requestBody: {},
      list: {},
      no: '',
      paging: {
        block: 0,
        endPage: 0,
        nextBlock: 0,
        page: 0,
        pageSize: 0,
        prevBlock: 0,
        startIndex: 0,
        startPage: 0,
        totalBlockCnt: 0,
        totalListCnt: 0,
        totalPageCnt: 0,
      },
      page: this.$route.query.page ? parseInt(this.$route.query.page) : 1,
      size: this.$route.query.size ? parseInt(this.$route.query.size) : 10,
      keyword: this.$route.query.keyword,
      paginavigation: function() {
        let pageNumber = [];
        let startPage = this.paging.startPage;
        let endPage = this.paging.endPage;
        for (let i = startPage; i <= endPage; i++) pageNumber.push(i);
        return pageNumber;
      },
    };
  },
  mounted() {
    this.fnGetList();
  },
  methods: {
    fnGetList() {
      this.requestBody = {
        keyword: this.keyword,
        page: this.page,
        size: this.size,
      };

      this.$axios
        .get(this.$serverUrl + '/board/list', {
          params: this.requestBody,
          headers: {},
        })
        .then((res) => {
          if (res.data.resultCode === 'OK') {
            console.log(res.data.pagination);
            this.list = res.data.data;
            this.paging = res.data.pagination;
          }
        })
        .catch((err) => {
          if (err.message.indexOf('Network Error') > -1) {
            alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.');
          }
        });
    },
    fnView(idx) {
      this.$router.push({
        path: './detail',
        query: {
          idx: idx,
        },
      });
    },
    fnPage(n) {
      if (this.page !== n) {
        this.page = n;
        this.fnGetList();
      }
    },
    formatDate: function (dateString) {
      var date = new Date(dateString);
      var year = date.getFullYear();
      var month = ('0' + (date.getMonth() + 1)).slice(-2);
      var day = ('0' + date.getDate()).slice(-2);
      return `${year}-${month}-${day}`;
    },
  },
};
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
  margin-left: 200px;
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
.pagination {
  display: flex;
  justify-content: center;
}
</style>