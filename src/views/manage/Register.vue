<script lang='ts' setup>
import { Form } from 'ant-design-vue';
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';

import type { FormProps } from 'ant-design-vue';
import type { Rule } from 'ant-design-vue/es/form';
import { LoginForm } from '@/types';
import { Register } from '@/model/user';

const template = (key: string) => t(`pages.Manage.Register.${key}`)
const LoginTemplate = (key: string) => t(`pages.Manage.Login.${key}`)
const formState = reactive<LoginForm>({
  username: '',
  password: '',
});

const rules = reactive<Record<string, Rule[]>>({
  username: [{
    required: true,
    message: LoginTemplate('Rules.username')
  }],
  password: [{
    required: true,
    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/,
    message: LoginTemplate('Rules.password')
  }]
})

const { validateInfos } = Form.useForm(formState, rules)
const canRegister = computed(() => {
  const status = [
    validateInfos.username.validateStatus,
    validateInfos.password.validateStatus
  ].every(status => status === 'success');

  return status;
});

// 提交数据处理
const Message = useMessage();
const toLogin = routePathToPage('/manage/login')
const handleSubmit: FormProps['onSubmit'] = async () => {
  try {
    await Register(formState)
    Message.success({
      message: template('Message.Register.SuccessText'),
      duration: 0.5
    })
    setTimeout(toLogin, 1000)
  } catch (err: any) {
    formState.username = '';
    formState.password = '';
    Message.error({
      message: template('Message.Register.ErrorText.message'),
      description: err.reason || template('Message.Register.ErrorText.description'),
      duration: 2
    })
  }
};
</script>

<template>
  <main class="register">
    <a-form class="register-form shadow" layout="vertical" :model="formState" @submit="handleSubmit">
      <a-form-item>
        <h2 class="form-title">{{ template("Title") }}</h2>
      </a-form-item>
      <a-form-item v-bind="validateInfos.username">
        <a-input class="input-username" v-model:value="formState.username"
          :placeholder="LoginTemplate('PlaceHolder.Username')">
          <template #prefix>
            <UserOutlined style="color: rgba(0, 0, 0, 0.25)" />
          </template>
        </a-input>
      </a-form-item>
      <a-form-item v-bind="validateInfos.password">
        <a-input-password class="input-password" v-model:value="formState.password" type="password"
          :placeholder="LoginTemplate('PlaceHolder.Password')">
          <template #prefix>
            <LockOutlined style="color: rgba(0, 0, 0, 0.25)" />
          </template>
        </a-input-password>
      </a-form-item>
      <a-form-item>
        <a-button html-type="submit" block :disabled="!canRegister">
          {{ template("ButtonText") }}
        </a-button>
      </a-form-item>
    </a-form>
  </main>
</template>

<style scoped>
.register {
  width: 100%;
  height: 80vh;
  padding: 0 50px;
  display: grid;
  place-content: center;
}

.register-form {
  width: 330px;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  border: 1px solid #CFD8DC;
  background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
}

.form-title {
  text-align: center;
  font-weight: 200;
  font-size: 2em;
  margin-top: 10px;
  color: #34495e;
}

.register-form .input-username,
.register-form .input-password,
.register-form button {
  width: 85%;
  margin-left: 7.5%;
  margin-bottom: 15px;
  height: 40px;
  border-radius: 5px;
  outline: 0;
}

.register-form button {
  font-size: 14px;
  font-weight: 200;
  cursor: pointer;
  padding: 0 20px;
}
</style>

