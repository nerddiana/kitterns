<template>
  <div>
    <Tabs :tablist="tabs" @change="activeTab = $event" />
    <div>Active tab {{ activeTab }}</div>
    <div v-show="activeTab === 'signin'">
      <form>
        <legend>Acceder</legend>
      </form>
    </div>
    <div v-show="activeTab === 'signup'">
      <form>
        <legend>Registrarme</legend>
      </form>
    </div>
  </div>
</template>

<script>
const tabs = [
  {
    tabId: 'signin',
    label: 'Sign In',
  },
  {
    tabId: 'signup',
    label: 'Sign Up',
  },
]

export default {
  layout: 'session',
  data() {
    return {
      tabs,
      activeTab: tabs[1].tabId,
    }
  },
}
</script>
