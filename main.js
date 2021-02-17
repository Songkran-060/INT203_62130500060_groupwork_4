const app = {
  data() {
    return {
      thaides: [
        {
          name: 'บุหลันดั้นเมฆ',
          url: './images/1.jpg',
          isLike: false
        },
        {
          name: 'บุหลันดั้นหมอก',
          url: './images/2.jpg',
          isLike: false
        },
        {
          name: 'จ่ามงกุฏ ไทยแท้ดั้งเดิม สมัย ร.๒',
          url: './images/3.jpg',
          isLike: false
        },
        {
          name: 'จ่ามงกุฏ ยุคปัจจุบัน',
          url: './images/4.jpg',
          isLike: false
        },
        {
          name: 'ลืมกลืน',
          url: './images/5.jpg',
          isLike: false
        },
        {
          name: 'พระพาย',
          url: './images/6.jpg',
          isLike: false
        },
        {
          name: 'ช่อม่วง',
          url: './images/7.jpg',
          isLike: false
        },
        {
          name: 'ลูกชุบ',
          url: './images/8.jpg',
          isLike: false
        },
        {
          name: 'ทองเอก',
          url: './images/9.jpg',
          isLike: false
        }
      ]
    }
  }
  ,
  methods: {
    likeIt(index){
      this.thaides[index].isLike = !this.thaides[index].isLike
    }
  }
  ,
  computed: {
    countLike(){
        return this.thaides.filter( t => t.isLike ).length
    }
}

}
Vue.createApp(app).mount('#app')