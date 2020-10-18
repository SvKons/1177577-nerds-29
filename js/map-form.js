ymaps.ready(function () {
  const myMap = new ymaps.Map('map', {
    zoom: 17,
    center: [59.9388,30.3232]
  }, 

  {
    searchControlProvider: 'yandex#search',
  }),

    myPlacemarkWithContent = new ymaps.Placemark([59.938784, 30.32312], {
    },

  );

    myMap.geoObjects

      .add(myPlacemarkWithContent);
});