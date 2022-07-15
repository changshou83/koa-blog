<script lang='ts' setup>
import { useUserStore } from "@/store/user"
import { reactive, computed } from 'vue';
import { routePathToPage } from '@/utils/route/routePathToPage';
import { useMessage } from '@/composables/core/useMessage';

import { Form } from 'ant-design-vue';
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';

import type { FormProps } from 'ant-design-vue';
import type { Rule } from 'ant-design-vue/es/form';
import { LoginForm } from '@/types';

const user = useUserStore();
const formState = reactive<LoginForm>({
  username: '',
  password: '',
});

const rules = reactive<Record<string, Rule[]>>({
  username: [{
    required: true,
    message: "username为必填"
  }],
  password: [{
    required: true,
    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/,
    message: "password至少包含大小写字母和数字，长度为8-16"
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
      message: '登录成功',
      duration: 0.5
    })
    setTimeout(toArticlePage, 1000)
  } catch(err: any) {
    formState.password = '';
    Message.error({
      message: "登陆失败",
      description: err.reason || '未知错误',
      duration: 2
    })
  }
};
</script>

<template>
  <main class="login">
    <a-form
      class="login-form shadow"
      layout="vertical"
      :model="formState"
      @submit="handleSubmit"
    >
      <a-form-item v-bind="validateInfos.username">
        <a-input v-model:value="formState.username" placeholder="Username">
          <template #prefix><UserOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
        </a-input>
      </a-form-item>
      <a-form-item v-bind="validateInfos.password">
        <a-input-password v-model:value="formState.password" type="password" placeholder="Password">
          <template #prefix><LockOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
        </a-input-password>
      </a-form-item>
      <a-form-item>
        <a-button
          type="primary"
          html-type="submit"
          block
          :disabled="!canLogin"
        >
          Log in
        </a-button>
      </a-form-item>
    </a-form>
  </main>
</template>

<style scoped>
.login {
  height: 80vh;
  padding: 0 50px;
  display: grid;
  place-content: center;
}
.login-form {
  width: 330px;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  border: 1px solid #CFD8DC;
}
</style>
