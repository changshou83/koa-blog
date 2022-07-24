<script lang='ts' setup>
import { useUserStore } from "@/store/user"

import { Form } from 'ant-design-vue';
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';

import type { FormProps } from 'ant-design-vue';
import type { Rule } from 'ant-design-vue/es/form';
import { LoginForm } from '@/types';

const template = (key: string) => t(`pages.Manage.Login.${key}`)
const user = useUserStore();
const formState = reactive<LoginForm>({
  username: '',
  password: '',
});

const rules = reactive<Record<string, Rule[]>>({
  username: [{
    required: true,
    message: template('Rules.username')
  }],
  password: [{
    required: true,
    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/,
    message: template('Rules.password')
  }]
})

const { validateInfos } = Form.useForm(formState, rules)
const canLogin = computed(() => {
  const status = [
    validateInfos.username.validateStatus,
    validateInfos.password.validateStatus
  ].every(status => status === 'success');

  return status;
});

// 提交数据处理
const Message = useMessage();
const toArticlePage = routePathToPage('/manage/articles/1')
const handleSubmit: FormProps['onSubmit'] = async () => {
  try {
    await user.login(formState)
    Message.success({
      message: template('Message.Login.SuccessText'),
      duration: 0.5
    })
    setTimeout(toArticlePage, 1000)
  } catch(err: any) {
    formState.password = '';
    Message.error({
      message: template('Message.Login.ErrorText.message'),
      description: err.reason || template('Message.Login.ErrorText.description'),
      duration: 2
    })
  }
};

const toRegister = routePathToPage('/manage/register');
</script>

<template>
  <main class="login">
    <a-form
      class="login-form shadow"
      layout="vertical"
      :model="formState"
      @submit="handleSubmit"
    >
      <a-form-item>
        <h2 class="form-title">{{template('Title')}}</h2>
      </a-form-item>
      <a-form-item v-bind="validateInfos.username">
        <a-input class="input-username" v-model:value="formState.username" :placeholder="template('PlaceHolder.Username')">
          <template #prefix><UserOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
        </a-input>
      </a-form-item>
      <a-form-item v-bind="validateInfos.password">
        <a-input-password class="input-password" v-model:value="formState.password" type="password" :placeholder="template('PlaceHolder.Password')">
          <template #prefix><LockOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
        </a-input-password>
      </a-form-item>
      <a-form-item>
        <a-button
          class="submit-button"
          html-type="submit"
          block
          :disabled="!canLogin"
        >
          {{template('ButtonText')}}
        </a-button>
      </a-form-item>
      <a-form-item>
        <div @click="toRegister" class="to-register"><p>{{template('toRegister')}}</p></div>
      </a-form-item>
    </a-form>
  </main>
</template>

<style scoped>
.login {
  width: 100%;
  height: 80vh;
  padding: 0 50px;
  display: grid;
  place-content: center;
}
.login-form {
  width: 350px;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  border: 1px solid #CFD8DC;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
}
.form-title {
  text-align: center;
  font-weight: 200;
  font-size: 2em;
  margin-top: 10px;
  color: #34495e;
}
.login-form .input-username,
.login-form .input-password,
.login-form button {
  width: 85%;
  margin-left: 7.5%;
  margin-bottom: 15px;
  height: 40px;
  border-radius: 5px;
  outline: 0;
}
.login-form button {
  font-size: 14px;
  font-weight: 200;
  cursor: pointer;
  padding: 0 20px;
}
.to-register {
  color: #1890ff;
  text-align: center;
  font-size: 12px;
}
</style>
