<template>
  <div>
    <navigation :landing-page="true" />
    <app-content>
      <div class="landing-page">
        <div class="background-container">
          <div class="background" />
        </div>

        <div class="container">
          <div class="row">
            <div class="nexushub-logo">
              <div class="search-logo">
                <img src="/img/brand/nexushub-logo-typeface-wow-classic.svg" alt="Nexushub Logo" class="logo">
                <span>.co</span>
              </div>
              <div class="tsm-logo">
                <span>Powered by</span>
                <img src="/img/wow-classic/tsm-logo.svg" alt="TradeSkillMaster Logo" class="logo">
              </div>
            </div>
          </div>

          <div class="row">
            <h2 class="subtitle">
              Select your WoW Classic server
            </h2>
          </div>

          <div class="row">
            <div class="server-box">
              <module>
                <template slot="header">
                  <h2>Europe</h2>
                </template>
                <template slot="body">
                  <div class="server-list">
                    <div v-for="s in serverlist.EU" :key="s.slug" class="server">
                      <span>{{ s.name }}</span>
                      <div class="logo-wrapper">
                        <router-link :to="`/wow-classic/${s.slug}-alliance`">
                          <img src="/img/wow-classic/ui/alliance.svg" alt="Alliance Logo" class="logo">
                        </router-link>
                        <router-link :to="`/wow-classic/${s.slug}-horde`">
                          <img src="/img/wow-classic/ui/horde.svg" alt="Horde Logo" class="logo">
                        </router-link>
                      </div>
                    </div>
                  </div>
                </template>
              </module>
            </div>
            <div class="server-box">
              <module>
                <template slot="header">
                  <h2>United States</h2>
                </template>
                <template slot="body">
                  <div class="server-list">
                    <div v-for="s in serverlist.US" :key="s.slug" class="server">
                      <span>{{ s.name }}</span>
                      <div class="logo-wrapper">
                        <router-link :to="`/wow-classic/${s.slug}-alliance`">
                          <img src="/img/wow-classic/ui/alliance.svg" alt="Alliance Logo" class="logo">
                        </router-link>
                        <router-link :to="`/wow-classic/${s.slug}-horde`">
                          <img src="/img/wow-classic/ui/horde.svg" alt="Horde Logo" class="logo">
                        </router-link>
                      </div>
                    </div>
                  </div>
                </template>
              </module>
            </div>
          </div>
        </div>
      </div>
    </app-content>
  </div>
</template>


<script>
import appContent from 'src/app-content.vue'
import meta from 'src/components/seo/meta.js'
import module from 'src/components/ui/module.vue'
import navigation from 'src/components/ui/nav/wow-classic.vue'

export default {
  components: {
    appContent,
    module,
    navigation
  },

  computed: {
    serverlist () {
      return {
        EU: this.$store.state.servers.serverlist.filter(s => s.region === 'EU'),
        US: this.$store.state.servers.serverlist.filter(s => s.region === 'US')
      }
    }
  },

  head: {
    title: 'NexusHub · All WoW Classic Auction House data in one place!',
    meta: meta({
      title: 'NexusHub · All WoW Classic Auction House data in one place!',
      description: 'Get up-to-date data and prices from all World of Warcraft: Classic servers and auction houses!',
      image: 'https://nexushub.co/img/brand/og-banner-wow-classic.jpg'
    })
  }
}
</script>


<style lang='scss' scoped>
@import '~src/styles/partials/wow-classic/importer';

.landing-page {
  position: relative;
  width: 100%;
  min-height: calc(100vh - 56px);
  padding-bottom: 75px;
  align-items: center;
  @include gradient-background-dg($color-bg, $color-bg-dark);

  .background-container {
    position: absolute;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }
  .background {
    background: url('/img/warframe/index-blob.svg');
    background-size: cover;
    width: 100%;
    height: 100%;
    animation-name: pulse;
    animation-timing-function: ease-in-out;
    animation-duration: 35s;
    animation-iteration-count: infinite;
  }
}
.container {
  .row {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: nowrap;

    @media (max-width: $breakpoint-s) {
      flex-wrap: wrap;
      .server-box:first-of-type {
        margin-bottom: 25px;
      }
    }
  }
}

.nexushub-logo {
  //display: flex;
  //align-items: center;
  animation: fadeinUp 0.6s forwards;
  animation-delay: 0.1s;
  margin-top: 75px;
  margin-bottom: 25px;

  .search-logo {
    display: flex;
    align-items: center;

    .logo {
      height: 50px;
    }
    span {
      font-size: 2.2em;
      color: white;
      font-family: 'Circular';
    }
  }

  .tsm-logo {
    position: relative;
    top: -4px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .logo {
      position: relative;
      top: -0.85px;
      height: 10px;
      margin-left: 3px;
    }
    span {
      @include uppercase();
      font-size: 14px;
      line-height: 12px;
      color: white;
      font-family: 'Circular';
    }
  }

  @media (max-width: $breakpoint-s) {
    .search-logo {
      .logo {
        height: 40px !important;
      }
      span {
        font-size: 1.8em !important;
      }
    }
    .tsm-logo {
      top: -2px !important;
      .logo {
        height: 8px !important;
      }
      span {
        font-size: 10px !important;
        line-height: 9px !important;
      }
    }
  }
}
.subtitle {
  margin-top: 25px;
  margin-bottom: 25px;

  @media (max-width: $breakpoint-s) {
    font-size: 1.2em;
  }
}

.server-box {
  width: 100%;
  padding: 0 10px;

  h2 {
    text-align: center;
  }
}
.server-list {
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  max-height: 50vh;

  .server {
    min-height: 32px; // Fuck you safari trash software
    // cursor: pointer;
    padding: 10px 15px;
    @include ease(0.15s);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .logo-wrapper {
      opacity: 0;
      flex: 1;
      display: flex;
      justify-content: space-evenly;
    }
    .logo {
      height: 32px;
    }

    span {
      pointer-events: none;
      flex: 1;
      color: white;
    }
  }
  .server:hover {
    background: rgba(0,0,0,0.15);

    .logo-wrapper {
      opacity: 1;
    }
  }
}
</style>
