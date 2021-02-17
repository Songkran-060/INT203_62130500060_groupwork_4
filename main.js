const app = {
  data() {
    return {
      thaides: [{
          name: 'Bu Lan Dan Mek',
          url: './images/1.jpg',
          isLike: false
        },
        {
          name: 'Bu Lan Dan Mhok',
          url: './images/2.jpg',
          isLike: false
        },
        {
          name: 'Ja Mong Kut (Original)',
          url: './images/3.jpg',
          isLike: false
        },
        {
          name: 'Ja Mong Kut (Now)',
          url: './images/4.jpg',
          isLike: false
        },
        {
          name: 'Leum Guen',
          url: './images/5.jpg',
          isLike: false
        },
        {
          name: 'Phra Pai',
          url: './images/6.jpg',
          isLike: false
        },
        {
          name: 'Cho maung',
          url: './images/7.jpg',
          isLike: false
        },
        {
          name: 'Look Chub',
          url: './images/8.jpg',
          isLike: false
        },
        {
          name: 'Thong Eak',
          url: './images/9.jpg',
          isLike: false
        }
      ],
      inputs: '',
      searchBoxOpen: false
    }
  },
  methods: {
    likeIt(index) {
      this.thaides[index].isLike = !this.thaides[index].isLike
    },
    openSearch() {
      this.searchBoxOpen = !this.searchBoxOpen
    },
  },
  computed: {
    countLike() {
      return this.thaides.filter(t => t.isLike).length
    },
    filteredList() {
      if (this.inputs) {
        return this.thaides.filter(t => {
          return this.inputs.toLowerCase().split(' ').every(v => t.name.toLowerCase().includes(v))
        })
      }else if(!this.inputs){
        return this.thaides;
      }else{
        
      }
    }
  }

}
Vue.createApp(app).mount('#app')