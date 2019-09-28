<script>
  import 'normalize.css'; // Import normalize here because parcel does weird things if I try to include it in the CSS

  export let name;
</script>

<style>
  /* Handy system font, stolen from CSS Tricks */
  @font-face {
    font-family: system;
    font-style: normal;
    font-weight: 300;
    src: local('.SFNSText-Light'), local('.HelveticaNeueDeskInterface-Light'),
      local('.LucidaGrandeUI'), local('Ubuntu Light'), local('Segoe UI Light'),
      local('Roboto-Light'), local('DroidSans'), local('Tahoma');
  }

  /* A bit of reset styling */
  :global(html) {
    height: 100%;
    margin: 0;
    font-family: 62.5%;
    padding: 0;
  }

  :global(body) {
    font-family: 'system', Arial, sans-serif;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  h1 {
    color: purple;
  }
</style>

<h1>Hello {name}</h1>
