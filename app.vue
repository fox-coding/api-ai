<template>
  <div style="width:900px;margin:auto;min-height:100vh;display:flex;flex-direction: column; align-items: center; justify-content: center; text-align: center;">
    <form @submit.prevent="submitForm" style="width: 100%;">
      <input style="font-size:18px; width: 400px; height: 20px; padding:10px;" type="text" v-model="text">
    </form>
    <h1>{{ message || 'Ask me something' }}</h1>
  </div>
</template>

<script setup>
  const config = useRuntimeConfig()
  const apiKey = config.public.runtimeConfig;

  const submitForm = ()=>{
    const { data, error } = useAsyncData(async () => {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ',
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{"role": "user", "content": text.value}]
        }),
      });
      const data = await response.json();
      message.value = data.choices[0].message.content
      return { data };
      });
    }
  const message = ref('')
  const text = ref('')
  
</script>