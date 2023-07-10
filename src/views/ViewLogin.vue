<!-- https://onethejay.tistory.com/128 -->
<!-- https://velog.io/@nahyyun/vue-calendar-project-Calendar-%EB%A7%8C%EB%93%A4%EA%B8%B0-3 -->
<template>
  <div id="app">
    <form @submit="onSubmit">
        <div class="container mb-4 w-25">
          <div class="userIcon">
            <font-awesome-icon icon="circle-user" size="5px" color="lightgray" />
          </div>
          <Field name="id" type="id" v-slot="{ field, errorMessage, meta }">
            <div class="field">
              <label for="id" class="form-label">아이디</label>
              <input class="form-control" v-bind="field" :class="{ 'is-invalid': !meta.valid && errorMessage }"/>
              <span class="errMsg" v-if="errorMessage && !meta.valid">{{ errorMessage }}</span>
            </div>
          </Field>
          <Field name="password" type="password">
            <div class="field">
              <label for="pwd" class="form-lael">비밀번호</label>
              <input class="form-control" type="password"/>
              <span class="errMsg"></span>
            </div>
          </Field>
          <div class="loginErr" v-if="loginErr">로그인에 실패하였습니다.</div>
          <button type="submit" class="btn btn-secondary mb-3">로그인</button>
        </div>
    </form>
  </div>
</template>

<script>
import { Field } from 'vee-validate';
import { object , string } from 'yup';
export default {
  name: 'ViewLogin',
  components: {
    Field,
  },
  data: () => ({
    min: 6,
  }),
  computed: {
    schema() {
      return object({
        id: string().required('아이디를 입력해주세요.'),
        password: string().required('미리번호를 입력해주세요').matches(/^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[#?!@$%^&*-])(?=.{8,})/,'영문자, 숫자, 특수문자를 조합하여 최소8자리를 입력해주세요.')
      });
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#loginForm {
  width: 500px;
  margin: auto;
}
</style>