'use strict';

(function () {

  var templateCard = document.querySelector('#card').content;


  window.renderCard = function (informations) {

    var mapCard = templateCard.querySelector('.map__card').cloneNode(true);

    var popupAvatar = mapCard.querySelector('.popup__avatar');
    popupAvatar.src = informations.author.avatar;

    var popupTitle = mapCard.querySelector('.popup__title');
    popupTitle.textContent = informations.offer.title;

    var popupTextAddress = mapCard.querySelector('.popup__text--address');
    popupTextAddress.textContent = informations.offer.address;

    var popupTextPrice = mapCard.querySelector('.popup__text--price');
    popupTextPrice.textContent = informations.offer.price + ' ₽/ночь';

    var popupType = mapCard.querySelector('.popup__type');
    popupType.textContent = informations.offer.type;


    var houseTypes = {
      palace: 'Дворец ',
      flat: 'Квартира ',
      house: 'Дом ',
      bungalo: 'Бунгало '
    };

    popupType.textContent = houseTypes[informations.offer.type];

    var popupTextCapacity = mapCard.querySelector('.popup__text--capacity');
    popupTextCapacity.textContent = informations.offer.rooms + ' комнаты для ' + informations.offer.guests + ' гостей';

    var popupTextTime = mapCard.querySelector('.popup__text--time');
    popupTextTime.textContent = 'Заезд после ' + informations.offer.checkin + ', выезд до ' + informations.offer.checkout;


    var popupFeaturesContainer = mapCard.querySelector('.popup__features');
    var items = popupFeaturesContainer.querySelectorAll('.popup__feature');

    var wifiIcon = mapCard.querySelector('.popup__feature--wifi');
    var dishwasherIcon = mapCard.querySelector('.popup__feature--dishwasher');
    var parkingIcon = mapCard.querySelector('.popup__feature--parking');
    var washerIcon = mapCard.querySelector('.popup__feature--washer');
    var elevatorIcon = mapCard.querySelector('.popup__feature--elevator');
    var conditionerIcon = mapCard.querySelector('.popup__feature--conditioner');


    items.forEach(function (it) {
      it.remove();
    });

    informations.offer.features.forEach(function (it) {
      switch (it) {
        case 'wifi':
          popupFeaturesContainer.append(wifiIcon);
          break;

        case 'dishwasher':
          popupFeaturesContainer.append(dishwasherIcon);
          break;

        case 'parking':
          popupFeaturesContainer.append(parkingIcon);
          break;

        case 'washer':
          popupFeaturesContainer.append(washerIcon);
          break;

        case 'elevator':
          popupFeaturesContainer.append(elevatorIcon);
          break;

        case 'conditioner':
          popupFeaturesContainer.append(conditionerIcon);
          break;
      }

    });

    var popupDescription = mapCard.querySelector('.popup__description');
    popupDescription.textContent = informations.offer.description;

    var popupPhotos = mapCard.querySelector('.popup__photos');
    var popupPhoto = mapCard.querySelector('.popup__photo');
    popupPhoto.src = informations.offer.photos[0];

    if (informations.offer.photos.length === 0) {
      popupPhotos.remove();
    } else if (informations.offer.photos.length > 1) {
      informations.offer.photos.forEach(function (it) {
        var popupPhotoClone = popupPhoto.cloneNode(true);
        popupPhotoClone.src = it;
        popupPhotos.append(popupPhotoClone);
      });
    }

    return mapCard;
  };

})();
