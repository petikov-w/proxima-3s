import {createStore} from "vuex";

export default createStore({
    state: function () {
        const main_content = {
            title: "Качественный газ для газгольдера",
            subtitle: "Доставка в любое время дня и ночи вне зависимости от погодных условий",
            info: [
                {procent: "80%", gaz: 'пропана'},
                {procent: "20%", gaz: 'бутана'}
            ]
        }
        const images = {
            big_car: require('@/assets/images/car_1.png'),
            button: require('@/assets/images/btn_zakaz_gaz.png')
        }
        const advantage = {
            list: [
                {
                    img: require('@/assets/images/sistern.png'),
                    title: 'Экономия<br> на хранилище',
                    descr: "за счёт собственных цистерн на нашей базе вы экономите <b style='font-weight:900; color: #ffffff;'>до 10%</b> вашего бюджета"
                },
                {
                    img: require('@/assets/images/track_1.png'),
                    title: "Экономия<br> на транспорте",
                    descr: "более 10 собственных газовозов которые экономят <b style='font-weight:900; color: #ffffff;'>5 – 7%</b> ваших денежных средств"
                },
                {
                    img: require('@/assets/images/cards_1.png'),
                    title: "Оплата удобным<br> для вас способом",
                    descr: "вы можете оплачивать как <b style='font-weight:900; color: #ffffff;'>наличными</b>, так и по <b style='font-weight:900; color: #ffffff;'>терминалу</b> который оборудован во все наши газовозы"
                },
                {
                    img: require('@/assets/images/baloon_1.png'),
                    title: "Любые объёмы поставки качественного газа",
                    descr: "вы получаете объем <b style='font-weight:900; color: #ffffff;'>от 1 до 20 тонн,</b> с сертификатом качества газа"
                }
            ]
        }
        const contentHeader=  {
            logo: require('@/assets/images/logo_proxima.png'),
            telefon: "74958773292",
            subtitle: "Срочный вопрос"
        }
        const site = { title: "Proxima" }

        return {
            main_content,
            images,
            advantage,
            contentHeader,
            site
        }
    }
});
