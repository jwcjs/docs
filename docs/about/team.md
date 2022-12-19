---
layout: page
sidebar: false
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'
const members = [
  {
    avatar: 'https://www.github.com/wibus-wee.png',
    name: 'wibus-wee',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/wibus-wee' },
      { icon: 'twitter', link: 'https://twitter.com/wibus_wee' }
    ]
  },
  {
    avatar: 'https://www.github.com/AkaraChen.png',
    name: 'AkaraChen',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/AkaraChen' },
      { icon: 'twitter', link: 'https://twitter.com/object_nullll' }
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
    <template #lead>
      The development of Jwc.js is led by a small team of passionate developers.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>