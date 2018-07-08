import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      { imageUrl: 'https://lonelyplanetimages.imgix.net/mastheads/64275521.jpg?sharp=10&vib=20&w=1200', id: 'asdadada', title: 'Meetup in Istanbul', date: '2018-04-16' },
      { imageUrl: 'http://i.hurimg.com/i/hdn/75/0x0/5ab0ff9ad3806d12540aada2.jpg', id: 'ssss2323', title: 'Meetup in Istanbul', date: '2018-04-19' }
    ],
    user: {
      id: 'adasd733',
      registeredMeetups: ['ssss2323']
    }
  },
  mutations: { },
  actions: { },
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    }
  }
})
