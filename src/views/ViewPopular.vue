<template>
  <div id="app">

    <div id="list-container">
      <div id="list-text">믿고 보는 맛집 리스트</div>
      <div class="store-container">
        <div v-for="(stores, key) in stores" :key="key" class="store-item">
          <div class="store-info">
            <button>
              <div class="image-container">
                <img class="room-img" :src="stores.imgSrc" alt="image"/>
              </div>
              <div class="title-overlay">{{ stores.title }}</div>
              <div class="description-overlay">{{ stores.description }}</div>
            </button>
          </div>
        </div>
      </div>
    </div>

    <br><br>
    <div id="list-container">
      <div id="list-text">지역별 인기 맛집</div>
      <div class="store-container">
        <div v-for="(sites, key) in sites" :key="key" class="store-item">
          <div class="store-info">
            <button>
              <div class="image-container">
                <img class="room-img" :src="sites.imgSrc" alt="image"/>
              </div>
              <div class="title-overlay">{{ sites.title }}</div>
              <div class="description-overlay">{{ sites.description }}</div>
            </button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'ViewPopular',
  data() {
    return {
      stores : [
        {title: '수육 맛집 베스트 20곳', description: '촉촉하고 야들야들한 수육 한점의 행복~', imgSrc: require('../assets/img/popularStore/soyook.jpg')},
        {title: '덮밥 맛집 베스트 20곳', description: '하얀 밥 위에 맛있는 요리를 덮으면?', imgSrc: require('../assets/img/popularStore/deopbap.jpg')},
        {title: '로제 파스타 맛집 베스트 20곳', description: '토마토? 크림? 난 로제!', imgSrc: require('../assets/img/popularStore/rosepasta.jpg')},
        {title: '제주 서귀포 맛집 베스트 30곳', description: '많고 많은 서귀포의 맛집들 중 엄선해봤어~', imgSrc: require('../assets/img/popularStore/seogyipo.jpg')},
        {title: '갈치 맛집 베스트 20곳', description: '길어서 살도 많은 갈치 먹어볼까?', imgSrc: require('../assets/img/popularStore/galchi.jpg')},
        {title: '보양식 맛집 베스트 25곳', description: '본격 더위 오기 전 지금이 보양 타임!', imgSrc: require('../assets/img/popularStore/boyangsik.jpg')},
      ],
      sites : [
        {title: '2023 경기도 인기 맛집', description: '경기도 찐맛집 여기 다 있네!', imgSrc: require('../assets/img/popularStore/kyeonggi.jpg')},
        {title: '2023 강원도 인기 맛집', description: '역시 강원도 음식이 제일 맛있어', imgSrc: require('../assets/img/popularStore/kangwon.jpg')},
        {title: '2023 강남 인기 맛집', description: '맛집하면 강남, 강남하면 맛집!', imgSrc: require('../assets/img/popularStore/gangnam.jpg')},
        {title: '2023 제주도 인기 맛집', description: '올해는 꼭 제주도 여행을 가고 말테야', imgSrc: require('../assets/img/popularStore/jeju.jpg')},
        {title: '2023 강북 인기 맛집', description: '다양한 먹거리를 찾는다면 강북으로!', imgSrc: require('../assets/img/popularStore/kangbook.jpg')},
        {title: '2023 부산 인기 맛집', description: '마 맛집은 부산이라 안카나', imgSrc: require('../assets/img/popularStore/busan.jpg')},
      ]
    }
  },
  methods: {
    reportPopularStore(num) {
      this.stores[num].popularStore = this.stores[num].popularStore + 1;
      this.sites[num].popularStore = this.sites[num].popularStore + 1;
    },
  }
}
</script>

<style>
@font-face {
  font-family: 'imcreSoojin';
  src:url('../assets/font/ImcreSoojin.ttf')
}
@font-face {
  font-family: 'korta-hope';
  src: url('../assets/font/KOTRA HOPE.ttf');
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.list-container {
  width: 500px;
  height: 1000px;
}
#list-text {
  color: darkgreen;
  text-align: left;
  padding-left: 150px;
  font-family: 'imcreSoojin';
  font-size: 25px;
}
.room-img {
  width:400px;
  height: 300px;
  filter: brightness(50%);
}
.store-container {
  display: flex;
  flex-wrap: wrap;
  padding-left: 100px;
}
.store-item {
  width: 30%;
  padding: 10px;
}
.store-info {
  position: relative;
}
.image-button {
  border: none;
  background-color: none;
  padding: 0;
  cursor: pointer;
  position: relative;
}
.title-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: none;
  color: seashell;
  font-size: 20pt;
  font-family: 'imcreSoojin';
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-top: 130px;
  margin: 0;
  box-sizing: border-box;
}
.description-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: none;
  color: 		seashell	;
  font-size: 20pt;
  font-family: 'korta-hope';
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-top: 170px;
  margin: 0;
  box-sizing: border-box;
}
</style>