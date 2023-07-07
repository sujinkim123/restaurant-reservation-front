<!-- PageHeader.vue -->
<template>
  <header>
    <!-- 참고 사이트 https://onethejay.tistory.com/73 -->
    <!--
    <div>
      <select v-model="search_key">
        <option value="">- 선택 -</option>
        <option value="author">작성자</option>
        <option value="title">제목</option>
        <option value="contents">내용</option>
      </select>
      &nbsp;
      <input type="text" v-model="search_value" @keyup.enter="fnPage()">
      &nbsp;
      <button @click="fnPage()">검색</button>
    </div>
    로 검색하면 쉽게 찾을 수 있음
    -->
    <div id="search">
      오늘은 무엇을 먹을까요?
      <input type="text" placeholder="상호명을 입력해주세요.." v-model="search_value">&nbsp;
      <button>검색</button>
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/weather">오늘의 날씨</router-link> |
      <router-link to="/best100">맛집 목록</router-link> |
      <router-link to="/tabling">실시간 웨이팅</router-link> |
      <router-link to="/ticket">레저/티켓</router-link> |
      <router-link to="/board/list">커뮤니티</router-link> |
      <router-link to="/signup">회원가입</router-link> |
      <router-link to="/login">로그인</router-link>
    </div>
  </header>
  <hr/>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>