<template>
  <div class="homepage panel">
    <div class="farm-icon">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="48px" height="48px" viewBox="0 0 48 48" enable-background="new 0 0 48 48" xml:space="preserve">
        <polygon fill="#F44336" points="37.781,13.656 24,8 10.219,13.656 6,23 7,23 7,42 41,42 41,23 42,23 "></polygon>
        <rect x="15" y="29" fill="#FF8A80" width="18" height="12"></rect>
        <g>
          <rect x="20" y="14" fill="#FFFFFF" width="8" height="8"></rect>
          <path fill="#FFFFFF" d="M32,30v10H16V30H32 M34,28H14v14h20V28L34,28z"></path>
          <rect x="23" y="29" fill="#FFFFFF" width="2" height="13"></rect>
          <polyline fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linejoin="bevel" points="16,41 24,29 32,41 	"></polyline>
        </g>
        <g>
          <polygon fill="#B71C1C" points="39,12.001 24,6 24,8 37.781,13.656 	"></polygon>
          <polygon fill="#B71C1C" points="42,24 44,24 39,12.001 37.781,13.656 	"></polygon>
          <polygon fill="#B71C1C" points="9,12.001 24,6 24,8 10.219,13.656 	"></polygon>
          <polygon fill="#B71C1C" points="6,24 4,24 9,12.001 10.219,13.656 	"></polygon>
        </g>
        <rect x="22.001" y="16" fill="#4E342E" width="3.999" height="4"></rect>
      </svg>
    </div>
    <div class="homepage-text">
      <h2 class="homepage-text-title">ישר מהשדה הוא מנוע חיפוש למשקים חקלאיים.</h2>
      <p>בעזרת רכישת תוצרת מקומית אתם מצמצמים את פערי התיווך, תומכים בחקלאים ומרוויחים סחורה איכותית.</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'homepage'
}

</script>

<style lang="scss">
@import "../assets/scss/mixins";

.homepage {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.homepage-text-title {
  margin-top: 0;
  margin-bottom: 10px;
}

</style>
