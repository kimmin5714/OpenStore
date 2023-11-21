<script setup></script>

<template>
  <div id="left-menu-nav">
    <div>
      <a href="/">
        <svg
          width="36"
          height="37"
          viewBox="0 0 36 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="sc-bkldj jcclqa">
          <path
            d="M35.9659 8.89569L18 0.172607L0.0340945 8.89569L0.03125 36.6546H35.9688L35.9659 8.89569Z"
            fill="#3D99F5"></path>
          <path
            d="M18 27.9426L0.03125 36.649V36.6547H35.9688V36.649L18 27.9426Z"
            fill="#0566C7"></path>
          <path
            d="M0.0341345 8.88501L0.03125 8.88644V36.6549L13.0994 30.394V8.88501H0.0341345Z"
            fill="#0082E5"></path>
          <path
            d="M17.9892 26.0454V8.88501H13.0996V30.6479V30.6653H22.9007V30.6595V26.0454H17.9892Z"
            fill="white"></path>
          <path
            d="M18 8.88473H35.9688L18 0.172607V8.88473Z"
            fill="#0082E5"></path>
        </svg>
      </a>
    </div>

    <div>
      <hr color="#DFE5EB" />
    </div>

    <ul class="navbar-list">
      <li>
        <router-link :to="{ name: 'apart-navbar-home' }" aria-current="page">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#1A8CFF"
            xmlns="http://www.w3.org/2000/svg"
            class="swk-icon">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.94202 5.83475C2.7372 6.55765 2 7.85967 2 9.26472V19C2 20.6568 3.34315 22 5 22H19C20.6569 22 22 20.6568 22 19V9.26472C22 7.85967 21.2628 6.55765 20.058 5.83475L13.5435 1.92606C12.5934 1.35603 11.4066 1.35603 10.4565 1.92606L3.94202 5.83475ZM13.0999 12.9999C13.0999 12.3924 12.6074 11.8999 11.9999 11.8999C11.3924 11.8999 10.8999 12.3924 10.8999 12.9999V17.9999C10.8999 18.6074 11.3924 19.0999 11.9999 19.0999C12.6074 19.0999 13.0999 18.6074 13.0999 17.9999L13.0999 12.9999Z"
              fill="#1A8CFF"></path>
          </svg>
        </router-link>
        <span class="sc-eVspGN jDxtXU">홈</span>
      </li>
      <li>
        <router-link :to="{ name: 'apart-navbar-search' }" aria-current="page">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#BCC4CC"
            xmlns="http://www.w3.org/2000/svg"
            class="swk-icon">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.8937 18.4513C15.2741 19.7341 13.2265 20.5 11 20.5C5.75329 20.5 1.5 16.2467 1.5 11C1.5 5.75329 5.75329 1.5 11 1.5C16.2467 1.5 20.5 5.75329 20.5 11C20.5 13.2275 19.7334 15.2759 18.4496 16.8959L22.2763 20.7226C22.7058 21.1521 22.7058 21.8486 22.2763 22.2782C21.8467 22.7078 21.1502 22.7078 20.7206 22.2782L16.8937 18.4513ZM18.3 11C18.3 15.0317 15.0317 18.3 11 18.3C6.96832 18.3 3.7 15.0317 3.7 11C3.7 6.96832 6.96832 3.7 11 3.7C15.0317 3.7 18.3 6.96832 18.3 11Z"
              fill="#BCC4CC"></path>
          </svg>
        </router-link>
        <span class="sc-eVspGN fBdFoC">탐색</span>
      </li>
      <li>
        <router-link
          :to="{ name: 'apart-navbar-bookmarks' }"
          aria-current="page">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#BCC4CC"
            xmlns="http://www.w3.org/2000/svg"
            class="swk-icon">
            <mask id="path-1-inside-1_10629_132742" fill="white">
              <path
                d="M3 5C3 3.34315 4.34315 2 6 2H18C19.6569 2 21 3.34315 21 5V19.6172C21 21.2705 19.3676 22.4287 17.8072 21.8825L12.6607 20.0812C12.233 19.9315 11.767 19.9315 11.3393 20.0812L6.19284 21.8825C4.63242 22.4287 3 21.2705 3 19.6172V5Z"></path>
            </mask>
            <path
              d="M12.6607 20.0812L11.967 22.0633L12.6607 20.0812ZM11.3393 20.0812L12.033 22.0633L11.3393 20.0812ZM6.19284 21.8825L5.4991 19.9004L6.19284 21.8825ZM17.8072 21.8825L17.1134 23.8646L17.8072 21.8825ZM6 4.1H18V-0.0999999H6V4.1ZM18.9 5V19.6172H23.1V5H18.9ZM5.1 19.6172V5H0.9V19.6172H5.1ZM18.5009 19.9004L13.3544 18.0991L11.967 22.0633L17.1134 23.8646L18.5009 19.9004ZM10.6456 18.0991L5.4991 19.9004L6.88658 23.8646L12.033 22.0633L10.6456 18.0991ZM13.3544 18.0991C12.4776 17.7922 11.5224 17.7922 10.6456 18.0991L12.033 22.0633C12.0116 22.0708 11.9884 22.0708 11.967 22.0633L13.3544 18.0991ZM0.9 19.6172C0.9 22.7171 3.96079 24.8886 6.88658 23.8646L5.4991 19.9004C5.30405 19.9687 5.1 19.8239 5.1 19.6172H0.9ZM18.9 19.6172C18.9 19.8239 18.6959 19.9687 18.5009 19.9004L17.1134 23.8646C20.0392 24.8886 23.1 22.7171 23.1 19.6172H18.9ZM18 4.1C18.4971 4.1 18.9 4.50294 18.9 5H23.1C23.1 2.18335 20.8167 -0.0999999 18 -0.0999999V4.1ZM6 -0.0999999C3.18335 -0.0999999 0.9 2.18335 0.9 5H5.1C5.1 4.50294 5.50294 4.1 6 4.1V-0.0999999Z"
              fill="#BCC4CC"
              mask="url(#path-1-inside-1_10629_132742)"></path>
          </svg>
        </router-link>
        <span class="sc-eVspGN fBdFoC">북마크</span>
      </li>
      <li>
        <router-link
          :to="{ name: 'apart-navbar-notifications' }"
          aria-current="page">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#BCC4CC"
            xmlns="http://www.w3.org/2000/svg"
            class="swk-icon">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.9993 20C10.9993 20.5523 11.447 21 11.9993 21C12.5515 21 12.9993 20.5523 12.9993 20H14.9993C14.9993 21.6569 13.6561 23 11.9993 23C10.3424 23 8.99926 21.6569 8.99926 20H10.9993Z"
              fill="#BCC4CC"></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M19.3033 18L19.0675 17.515C18.4742 16.2945 18.1659 14.9552 18.1659 13.5982V10.1667C18.1659 6.76091 15.405 4 11.9993 4C8.5935 4 5.83259 6.76091 5.83259 10.1667V13.5982C5.83259 14.9552 5.52432 16.2945 4.93104 17.515L4.69527 18H19.3033ZM11.9993 2C7.48893 2 3.8326 5.65634 3.8326 10.1667V13.5982C3.8326 14.6523 3.59314 15.6926 3.1323 16.6406L2.75088 17.4252C2.17245 18.6151 3.03907 20 4.36213 20H19.6364C20.9595 20 21.8261 18.6151 21.2476 17.4252L20.8662 16.6406C20.4054 15.6926 20.1659 14.6523 20.1659 13.5982V10.1667C20.1659 5.65634 16.5096 2 11.9993 2Z"
              fill="#BCC4CC"></path>
          </svg>
        </router-link>
        <span class="sc-eVspGN fBdFoC">공지사항</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
#left-menu-nav {
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  padding: 20px 0px 12px;
  width: 70px;
  height: 100%;
  background-color: rgb(255, 255, 255);
  border-right: 1px solid rgb(223, 229, 235);
  z-index: 1000;
}
.navbar-list {
  list-style-type: none;
}
</style>
