<template>
  <div v-if="!farm" class="spinner"></div>
  <div v-else class="panel" itemscope itemtype="http://schema.org/LocalBusiness">
    <h2 class="farm-name" itemprop="name">{{ farm.name }}</h2>
    <h3 class="farm-description" itemprop="description" v-if="farm.description">{{ farm.description }}</h3>

    <div class="farm-info">
      <div class="farm-info__right-section">
        <div class="farm-info__item" itemscope itemtype="http://schema.org/PostalAddress">
          <img src="/static/images/icons/place.svg" class="farm-info__icon" alt="">
          <span itemprop="address">{{ farm.street }}, {{ farm.city }}</span>
        </div>
        <div class="farm-info__item" v-if="farm.phone">
          <img src="/static/images/icons/phone.svg" class="farm-info__icon" alt="">
          <a itemprop="telephone" :href="'tel:' + farm.phone">{{ farm.phone }}</a>
        </div>
        <div class="farm-info__item" v-if="farm.email">
          <img src="/static/images/icons/email.svg" class="farm-info__icon" alt="">
          <a :href="'mailto:' + farm.email ">{{ farm.email }}</a>
        </div>
        <div class="farm-info__item" v-if="farm.website">
          <img src="/static/images/icons/website.svg" class="farm-info__icon" alt="">
          <a :href="farm.website" target="_blank">אתר אינטרנט</a>
        </div>
        <div class="farm-info__item" v-if="farm.facebook">
          <img src="/static/images/icons/facebook.svg" class="farm-info__icon" alt="">
          <a :href="farm.facebook" target="_blank">עמוד פייסבוק</a>
        </div>
      </div>
      <div class="farm-info__left-section" v-if="farm.props">
        <div class="farm-info__item" v-if="farm.props.organic">
          <img src="/static/images/icons/organic.svg" class="farm-info__icon" alt="">
          <span>אורגני</span>
        </div>
        <div class="farm-info__item" v-if="farm.props.pest_control">
          <img src="/static/images/icons/pest_control.svg" class="farm-info__icon" alt="">
          <span>ללא ריסוס</span>
        </div>
        <div class="farm-info__item" v-if="farm.props.shipping">
          <img src="/static/images/icons/shipping.svg" class="farm-info__icon" alt="">
          <span>משלוחים</span>
        </div>
        <div class="farm-info__item" v-if="farm.props.direct_sell">
          <img src="/static/images/icons/store.svg" class="farm-info__icon" alt="">
          <span>מכירה במקום</span>
        </div>
        <div class="farm-info__item" v-if="farm.props.online_sell">
          <img src="/static/images/icons/computer.svg" class="farm-info__icon" alt="">
          <span>הזמנה באינטרנט</span>
        </div>
      </div>
    </div>
    <div id="map"></div>
  </div>
  -->
</template>

<script>
import { displayMap } from '../../helpers/GoogleWidgets';
import { getFarmLocation } from '../../helpers/Location';

export default {
  name: 'farm-page',
  props: ['id'],
  data () {
    return {
      farm: null,
      apiKey: GOOGLE_API_KEY
    }
  },
  computed: {
    title () {
      if (this.farm != null) {
        return this.farm.name;
      }
      else {
        return 'טוען..';
      }
    }
  },
  metaInfo () {
    return {
      title: this.title
    }
  },
  methods: {
    // Fetch the farm using ID parameter from route
    fetchFarm() {
      return new Promise((resolve, reject) => {
        const farmId = this.id;
        const farmRef = this.$root.$firebaseRefs.farms.child(farmId);
        farmRef.once('value', snapshot => resolve(snapshot.val()));
      })
    }
  },
  created () {
    this.fetchFarm().then(farm => {
      this.farm = farm;
      this.$ua.trackView(farm.name);
      // Set page title & description
      // document.title = farm.name + ' | ישר מהשדה';
      getFarmLocation(this.id).then(location => {
        displayMap(document.getElementById('map'), location);
      });
    });
  },
}
</script>

<style lang="scss">
  .farm-name {
    margin: 0;
    margin-bottom: 20px;
  }

  .farm-info {
    margin-bottom: 20px;

    @media (min-width: 480px) {
      display: flex;
    }
  }

  .farm-info__right-section {
    @media (min-width: 480px) {
      margin-left: 50px;
    }
  }

  .farm-info__item {
    display: flex;
    margin-bottom: 10px;
  }

  .farm-info__icon {
    width: 20px;
    height: 20px;
    margin-left: 15px;
    -webkit-user-select: none;
    user-select: none;
  }

  #map {
    width: 100%;
    height: 300px;
  }
</style>
