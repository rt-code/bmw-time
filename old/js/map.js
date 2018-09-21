ymaps.ready(init);

function init() {

    // Создание экземпляра карты.
    var myMap = new ymaps.Map('filials-map', {
            center: [50.443705, 30.530946],
            zoom: 9
        }),

    
        // Контейнер для меню.
        menu = $('<ul class="menu"></ul>');

    // Перебираем все группы.
    for (var i = 0, l = groups.length; i < l; i++) {
        createMenuGroup(groups[i]);
    }
    myMap.controls
        // Кнопка изменения масштаба.
        .add('zoomControl', { left: 5, top: 5 })
        // Список типов карты
        .add('typeSelector')
        // Стандартный набор кнопок
        .add('mapTools', { left: 35, top: 5 });
    function createMenuGroup (group) {
        // Пункт меню.
        var menuItem = $('<li><a>' + group.name + '</a></li>'),
        // Коллекция для геообъектов группы.
            collection = new ymaps.GeoObjectCollection(null, { preset: group.style }),
        // Контейнер для подменю.
            submenu = $('<ul class="submenu"></ul>');

        // Добавляем коллекцию на карту.
        myMap.geoObjects.add(collection);

        // Добавляем подменю.
        menuItem
            .append(submenu)
            // Добавляем пункт в меню.
            .appendTo(menu)
            // По клику удаляем/добавляем коллекцию на карту и скрываем/отображаем подменю.
            .find('a')
            .toggle(function () {
                myMap.geoObjects.remove(collection);
                submenu.hide();
            }, function () {
                myMap.geoObjects.add(collection);
                submenu.show();
            });

        // Перебираем элементы группы.
        for (var j = 0, m = group.items.length; j < m; j++) {
            createSubMenu(group.items[j], collection, submenu);
        }
    }

    function createSubMenu (item, collection, submenu) {
        // Пункт подменю.
        var submenuItem = $('<li><a>' + item.name + '</a></li>'),
        // Создаем метку.
            placemark = new ymaps.Placemark(item.center, { balloonContent: item.name });

        // Добавляем метку в коллекцию.
        collection.add(placemark);
        // Добавляем пункт в подменю.
        submenuItem
            .appendTo(submenu)
            // При клике по пункту подменю открываем/закрываем баллун у метки.
            .find('a')
            .bind('click', function () {
                if (!placemark.balloon.isOpen()) {
                    placemark.balloon.open();
                } else {
                    placemark.balloon.close();
                }
                return false;
            });

    }

    // Добавляем меню в тэг.
    menu.appendTo($('.contact-page .right'));
    // Выставляем масштаб карты чтобы были видны все группы.
    myMap.setBounds(myMap.geoObjects.getBounds());
}

// Группы объектов
var groups = [
        {
            name: "г. Краснодар",
            style: "twirl#redIcon",
            items: [
                {
                    center: [45.0510225746099,39.14996349999998],
                    name: "п.Знаменский ул. Ольховая 66"
                },
                {
                    center: [45.099893074607685,38.96133549999995],
                    name: "ул.Питерская 20"
                }
            ]},
        {
            name: "г. Набережные Челны",
            style: "twirl#redIcon",
            items: [
                {
                    center: [55.732230684403724,52.41627899999997],
                    name: "проспект 40 Лет Победы, пгсо «Гренада», бокс 79"
                }
            ]},
        {
            name: "г. Новосибирск",
            style: "twirl#redIcon",
            items: [
                {
                    center: [55.06053356965361,82.98170350000001],
                    name: "ул. Ползунова 1, корп.2"
                }
            ]}
    ];