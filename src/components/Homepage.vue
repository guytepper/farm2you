<template>
  <div class="homepage">
    <div class="homepage__content">
      <p>פרוייקט ישר מהשדה עוזר לחבר את החקלאים ישירות אליכם - הלקוחות.</p>
      <p>הפרוייקט נמצא בשלב איסוף הנתונים - אתם מוזמנים להוסיף משקים, לעקוב בעמוד הפייסבוק, או להרשם לעדכונים במייל:</p>
    </div>
  </div>
</template>

<style lang="scss">
  .homepage {
    margin: -15px -20px 0; // Reset container margins
    height: calc(100vh - 55px);
    background: url('/static/images/hero-image-2.jpg') no-repeat center center fixed;
    background-size: cover;
  }

  .homepage__content {
    display: flex;
    height: 100%;
    max-width: 550px;
    margin: 0 auto;
    padding: 50px 0;
    flex-direction: column;
    align-items: center;
    // justify-content: center;
    font-size: 40px;
    font-weight: bold;
    text-align: center;
    // color: white
  }
</style>
